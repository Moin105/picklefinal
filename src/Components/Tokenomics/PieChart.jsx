import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import pick from '../../Assets/Picture.png'
import './Tokenomics.css'
const PieChart = ({ data }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate total value of data items
  const total = data.reduce((acc, item) => acc + item.value, 0);

  // Calculate start angle and end angle for each data item
  let cumulativeAngle = -Math.PI / 2; // start from the top
  const arcs = data.map((item) => {
    const arcAngle = (item.value / total) * (2 * Math.PI); // calculate angle based on value
    const arc = {
      startAngle: cumulativeAngle,
      endAngle: cumulativeAngle + arcAngle,
      color: item.color,
    };
    cumulativeAngle += arcAngle;
    return arc;
  });

  return (
    <div ref={containerRef} style={{ width: '100%', position: 'relative' }}>
    <svg
      width={containerWidth}
      height={containerWidth}
      viewBox={`0 0 ${containerWidth} ${containerWidth}`}
      style={{ display: 'block', margin: '0 auto' }}
    >
      {/* Render pie chart segments */}
      <g transform={`translate(${containerWidth / 2}, ${containerWidth / 2})`}>
        {arcs.map((arc, index) => (
          <motion.path
            key={index}
            d={describeArc(0, 0, containerWidth / 2, arc.startAngle, arc.endAngle)}
            fill={arc.color}
            animate={{ scale: [0, 1], rotate: [0, 360] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        ))}
      </g>

      {/* Render center image */}
      
        <image
          href={pick}
          x={containerWidth / 2 - 50} // Adjust the position based on image size
          y={containerWidth / 2 - 50} // Adjust the position based on image size
          width={100}
          height={100}
          className="imageStyle"
        //   style={{border:"1px solid black"}}
          style={{
    borderRadius: '50%', // Example: Apply border radius for rounded corners
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    border:"1px solid black"
     // Example: Apply box shadow for a subtle effect
  }}
          preserveAspectRatio="xMidYMid meet"
        />
    
    </svg>
  </div>
  );
};

// Helper function to describe an arc
function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1';

  const arcPath = [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    'L', x, y,
    'Z'
  ].join(' ');

  return arcPath;
}

// Helper function to convert polar coordinates to Cartesian coordinates
function polarToCartesian(centerX, centerY, radius, angleInRadians) {
  const x = centerX + (radius * Math.cos(angleInRadians));
  const y = centerY + (radius * Math.sin(angleInRadians));
  return { x, y };
}

export default PieChart;

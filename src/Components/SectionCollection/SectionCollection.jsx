import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./sectioncollection.css";
import pickle1 from "../../Assets/pickle1.png";
import pickle2 from "../../Assets/pickle2.png";
import pickle3 from "../../Assets/pickle3.png";
import pickle4 from "../../Assets/pickle4.png";
import pickle5 from "../../Assets/pickle5.png";
import pickle6 from "../../Assets/pickle6.png";
import pickle7 from "../../Assets/pickle7.jpeg";
function SectionCollection() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    
    // Controls for animations using framer-motion
    const controls = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const [activeSection, setActiveSection] = useState(1);
    // Refs for each section
    const { ref: ref1, inView: inView1 } = useInView();
    const { ref: ref2, inView: inView2 } = useInView();
    const { ref: ref3, inView: inView3 } = useInView();
    const renderImagesForSection = (sectionNumber) => {
        // Define image sets for each section
        const imageSets = {
          1: [pickle1, pickle2, pickle3, pickle4],
          2: [pickle5, pickle6, pickle7, pickle4],
          3: [pickle3, pickle6, pickle2, pickle1],
        };
    
        return imageSets[sectionNumber].map((imageName, index) => (
          <motion.img key={index} 
          src={imageName}  
          className={`image-${index + 1}`}
          alt={`Image ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }} />
        ));
      };
    useEffect(() => {
      if (inView1) {
        setActiveSection(1);
        setIsVisible(true);
        controls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeOut" },
        });
        console.log("Section 1 is in view");
      }
      if (inView2) {
        setActiveSection(2);
        setIsVisible2(true);
        controls2.start({
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeOut" },
        });
        console.log("Section 2 is in view");
      }
      if (inView3) {
        setIsVisible3(true);
        setActiveSection(3);
        controls3.start({
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeOut" },
        });
        console.log("Section 3 is in view");
      }
    }, [inView1, inView2, inView3, controls, controls2, controls3]);
  

  return (
    <div className="collection">
    <div className="collection-container">
      <div className="nfts-section">
        <div className="nfts-left">
          <span>Revenue Share Through Asset Ownership</span>
          <h2>Become a holder of $PICKLE and PickleButt NFTs</h2>
          <p>
            We reward those who are part of our ecosystem by gathering holders
            utlity to earn crypto yield from the arcade service fees.
          </p>
          <button>Buy Now</button>
        </div>
        <div ref={ref1}></div>
      </div>
      <div className="revenue-section">
        <div className="revenue-left">
          <h2>Want to learn more details about how revenue share works</h2>

          <button>Learn more</button>
        </div>
        <div ref={ref2}></div>
      </div>
      <div className="community-section">
        <div className="community-left">
          <h2>What are you waiting for ?</h2>

          <button>Join the Community</button>
        </div>
        <div ref={ref3}></div>
      </div>
    </div>
    <div className="collection-right">
    {renderImagesForSection(activeSection)}
    </div>
    </div>
  );
}

export default SectionCollection;

import React from 'react';
import styled, { keyframes, css } from "styled-components";


export  const ImageRenderer = ({ images }) => {
  const renderedIndices = new Set(); // Set to track already rendered indices
 
  const Marquee = styled.div`
    display: flex;
    width: 100%;
    top: 70px;
    overflow: hidden;
    user-select: none;

    mask-image: linear-gradient(
      to right,
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 10%,
      hsl(0 0% 0% / 1) 90%,
      hsl(0 0% 0% / 0)
    );
  `;
  const Marquee23 = styled.div`
    display: flex;
    width: 100%;
    opacity: 0.1;
    z-index: -1;
    overflow: hidden;
    user-select: none;

    mask-image: linear-gradient(
      to right,
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 10%,
      hsl(0 0% 0% / 1) 90%,
      hsl(0 0% 0% / 0)
    );
  `;
  const Marquee234 = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    opacity: 0.1;
    z-index: -1;
    bottom: 1%;
    overflow: hidden;
    user-select: none;

    mask-image: linear-gradient(
      to right,
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 10%,
      hsl(0 0% 0% / 1) 90%,
      hsl(0 0% 0% / 0)
    );
  `;

  const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

  const common = css`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap;
    width: 100%;
    animation: ${scrollX} 30s linear infinite;
  `;

  const MarqueeGroup = styled.div`
    ${common}
  `;
  const MarqueeGroup2 = styled.div`
    ${common}
    animation-direction: reverse;
    animation-delay: -3s;
  `;

  const ImageGroup = styled.div`
    display: grid;
    place-items: center;
    width: 15%;
    ${"" /* width: clamp(10rem, 1rem + 40vmin, 30rem); */}
    ${"" /* padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10); */}
  `;
  const ImageGroup2 = styled.div`
  display: grid;
  place-items: center;
  margin: 60px 0px 0px 0px;
  width: 15%;
  ${"" /* width: clamp(10rem, 1rem + 40vmin, 30rem); */}
  ${"" /* padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10); */}
`;

  const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
    /* border: 1px solid black; */
    border-radius: 0.5rem;
    ${"" /* aspect-ratio: 16/9; */}
    padding: 5px 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  `;
  return (
    <Marquee>
      {/* Render images within a MarqueeGroup */}
      <MarqueeGroup>
        {images.map((el, index) => {
          if (!renderedIndices.has(index)) {
            const nextIndex = index + 1;
            const nextEl = images[nextIndex];

            // Mark both current index and next index as rendered
            renderedIndices.add(index);
            renderedIndices.add(nextIndex);

            return (
              <React.Fragment key={index}>
                {/* Render ImageGroup or ImageGroup2 based on index parity */}
                {(index + 1) % 2 === 0 ? (
                  <ImageGroup>
                    <Image src={el} />
                    {nextEl && <Image src={nextEl} />} {/* Render next image if exists */}
                  </ImageGroup>
                ) : (
                  <ImageGroup2>
                    <Image src={el} />
                    {nextEl && <Image src={nextEl} />} {/* Render next image if exists */}
                  </ImageGroup2>
                )}
              </React.Fragment>
            );
          }
          return null; // Skip rendering if index already processed
        })}
      </MarqueeGroup>
    </Marquee>
  );
};

// Example usage:
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg'];


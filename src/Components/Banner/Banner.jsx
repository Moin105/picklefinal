import React from "react";
import "./banner.css";
import styled, { keyframes, css } from "styled-components";
import pickle1 from "../../Assets/pickle1.png";
import pickle2 from "../../Assets/pickle2.png";
import pickle3 from "../../Assets/pickle3.png";
import pickle4 from "../../Assets/pickle4.png";
import pickle5 from "../../Assets/pickle5.png";
import pick from '../../Assets/pick.png'
import pickle6 from "../../Assets/pickle6.png";
import pickle7 from "../../Assets/pickle7.jpeg";
import pickle8 from "../../Assets/pickle8.png";
import pickle9 from "../../Assets/pickle9.png";
import pickle10 from "../../Assets/pickle10.jpeg";

// import VideoPlayer from "./videoplayer";
import videoSource from "../../Assets/hero.mp4";
import VideoAsGif from "./videoplayer";
function Banner() {
  const row1 = [
    pickle1,
    pickle2,
    pickle3,
    pickle4,
    // pickle5,
    // pickle6,
    // pickle7,
    // pickle1,
    // pickle2,
    // pickle3,
    pickle4,
    pickle5,
    pickle6,
    pickle7,
    pickle8,
    pickle9,
    pickle10
  ];
  const row2 = [
    pickle1,
    pickle2,
    pickle3,
    pickle4,
    // pickle5,
    // pickle6,
    // pickle7,
    // pickle1,
    // pickle2,
    // pickle3,
    pickle4,
    pickle5,
    pickle6,
    pickle7,
    pickle8,
    pickle9,
    pickle10
  ];
  const Marquee = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    opacity: 0.1;
    z-index: -1;
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
  position: absolute;
  opacity: 0.1;
  z-index: -1;
  bottom: 35%;
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
    <div className="banner">
    {/*  <Marquee>
        <MarqueeGroup>
          {row1.map((el) => (
            <ImageGroup>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup>
        <MarqueeGroup>
          {row1.map((el) => (
            <ImageGroup>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup>
      </Marquee>*/}
      
      <div className="banner-container">
        <div className="banner-left">
          <h2>Welcome to the new era of online arcade</h2><br></br>
          <p>
            Step into the premier online platform where competitive gaming
      
            meets cryptocurrency wagerring.
          </p>
        </div>
        <div className="banner-right">
        <img src={pick} style={{width:"200px",margin:"0 auto"}}/>
          {/* <VideoAsGif src={videoSource} /> */}
        </div>
      </div>
  { /*   <Marquee23>
        <MarqueeGroup2>
          {row2.map((el) => (
            <ImageGroup>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup2>
        <MarqueeGroup2>
          {row2.map((el) => (
            <ImageGroup>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup2>
      </Marquee23>
      <Marquee234>
        <MarqueeGroup>
          {row1.map((el) => (
            <ImageGroup>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup>
        <MarqueeGroup>
          {row1.map((el) => (
            <ImageGroup>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup>
      </Marquee234>*/}
    </div>
  );
}

export default Banner;

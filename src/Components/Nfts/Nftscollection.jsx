import React from "react";
import "./nftcollection.css";
import pickle1 from "../../Assets/pickle1.png";
import pickle2 from "../../Assets/pickle2.png";
import pickle3 from "../../Assets/pickle3.png";
import pickle4 from "../../Assets/pickle4.png";
import pickle5 from "../../Assets/pickle5.png";
import pick from "../../Assets/pick.png";
import pickle6 from "../../Assets/pickle6.png";
import pickle7 from "../../Assets/pickle7.jpeg";
import styled, { keyframes, css } from "styled-components";
import pickle8 from "../../Assets/pickle8.png";
import pickle9 from "../../Assets/pickle9.png";
import { IoSearchOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

import pickle10 from "../../Assets/pickle10.jpeg";
import pickle11 from "../../Assets/00132.png";
import pickle12 from "../../Assets/00209.png";
import pickle13 from "../../Assets/00405.png";
import pickle14 from "../../Assets/02342.png";
import pickle15 from "../../Assets/01152.png";
import pickle16 from "../../Assets/01415.png";
import pickle17 from "../../Assets/01651.png";
import pickle18 from "../../Assets/02031.png";
import pickle19 from "../../Assets/01723.png";
import pickle20 from "../../Assets/02168.png";
import pickle21 from "../../Assets/02214.png";
import pickle22 from "../../Assets/02168.png";
import pickle23 from "../../Assets/01926.png";
import pickle24 from "../../Assets/01986.png";
import pickle25 from "../../Assets/02041.png";
import pickle26 from "../../Assets/02452.png";
import pickle27 from "../../Assets/00685.png";
import pickle28 from "../../Assets/02342.png";
import pickle29 from "../../Assets/01152.png";
import pickle30 from "../../Assets/01415.png";
import pickle31 from "../../Assets/01391.png";
import pickle32 from "../../Assets/02031.png";
function Nftscollection() {
  const row1 = [
    { img: pickle1, img2: pickle2 },
    { img: pickle3, img2: pickle4 },
    { img: pickle31, img2: pickle5 },
    { img: pickle6, img2: pickle7 },
    { img2: pickle8, img: pickle9 },
    { img: pickle10, img2: pickle11 },
    { img: pickle12, img2: pickle13 },
    { img: pickle15, img2: pickle14 },
    
  ];
  const row2 = [
    { img: pickle16, img2: pickle17 },
    { img: pickle18, img2: pickle19 },
    { img: pickle20, img2: pickle21 },
    { img: pickle22, img2: pickle23 },
    { img2: pickle24, img: pickle25 },
    { img: pickle26, img2: pickle27 },
    { img: pickle28, img2: pickle29 },
    { img: pickle32, img2: pickle30 },
  ];
  const Marquee = styled.div`
    display: flex;
    width: 100%;
    top: 70px;
    gap: 15px;
    overflow: hidden;
    user-select: none;

    mask-image: linear-gradient(
      to right,
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 10%,
      hsl(0 0% 0% / 1) 90%,
      hsl(0 0% 0% / 0)
    );
    @media only screen and (max-width: 500px) {
      gap: 20px;
    }
    @media only screen and (max-width: 450px) {
      gap: 50px;
    }
    @media only screen and (max-width: 390px) {
      gap: 90px;
    }
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
    gap: 15px;
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
    display: flex;
    flex-direction: column;
    width: 15%;
    ${"" /* width: clamp(10rem, 1rem + 40vmin, 30rem); */}
    ${"" /* padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10); */}
  `;
  const ImageGroup2 = styled.div`
    display: flex;
    flex-direction: column;
    margin: 70px 0px 0px 0px;
    width: 15%;
    ${"" /* width: clamp(10rem, 1rem + 40vmin, 30rem); */}
    ${"" /* padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10); */}
  `;

  const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    /* border: 1px solid black; */
    border-radius: 8px;
    ${"" /* aspect-ratio: 16/9; */}
    margin: 5px 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  `;
  return (
    <div className="nft-collection">
      <div className="nft-collection-container">
        <div className="nft-collection-top">
          <span>PickleButts</span>
          <h2>A deflationary NFT collection</h2>
          <p>
            6,900 PickleButt NFTs were minted on Cardano and sold out in an hour
            on February 3rd, 2024. Each NFT minted for 1M $PICKLE: 500k $PICKLE
            was burned, and 500k was attached to the NFT. The collection is
            designed to gain value and decrease in supply over time as passive
            income accrues from various sources. Income sources include $PICKLE
            tied to each NFT, royalties from secondary market sales, and revenue
            share from the Pickle Arcade. To access the income linked to an NFT,
            it must be burned via Picklehub.
          </p>
          <p className="row">
            {" "}
            <p className="row2">
              Learn more{" "}
              <span className="circle">
                <BsArrowRight />
              </span>
            </p>
            <p className="row2">
              {" "}
              Explore on Picklehub{" "}
              <span className="circle">
                <IoSearchOutline />
              </span>
            </p>
          </p>
        </div>
        <div className="nft-collection-bottom">
          <Marquee>
            <MarqueeGroup>
              {row1.map((el, index) =>
                (index + 1) % 2 === 0 ? (
                  <ImageGroup>
                    <Image src={el.img} />
                    <Image src={el.img2} />
                  </ImageGroup>
                ) : (
                  <ImageGroup2>
                    <Image src={el.img} />
                    <Image src={el.img2} />
                  </ImageGroup2>
                )
              )}
            </MarqueeGroup>
            <MarqueeGroup>
              {row2.map((el, index) =>
                (index + 1) % 2 === 0 ? (
                  <ImageGroup>
                    <Image src={el.img} />
                    <Image src={el.img2} />
                  </ImageGroup>
                ) : (
                  <ImageGroup2>
                    <Image src={el.img} />
                    <Image src={el.img2} />
                  </ImageGroup2>
                )
              )}
            </MarqueeGroup>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Nftscollection;

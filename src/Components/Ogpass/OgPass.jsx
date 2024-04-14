import React from "react";
import ogpass from "../../Assets/ogpass.gif";
import './ogpass.css'
import { BsArrowRight } from "react-icons/bs";

function OgPass() {
  return (
    <div className="ogpass">
      <div className="ogpass-container">
        <div className="ogpass-left">
          <h2>The “OG” Pass</h2>
          <p>
            The original 69, the foundation of it all... PickleButt OG Passes
            grant hodlers exclusive benefits within the Pickle Ecosystem. Past
            benefits for hodlers included early access to $PICKLE token sale, a
            1% airdrop of $PICKLE supply, whitelist access to PickleButts NFT
            minting, and free NFT airdrops. Each pass also entitles hodlers to
            revenue share from the Pickle Arcade.
          </p>
          <p className="row">
            {" "}
            <p className="row2">
              Learn more{" "}
              <span className="circle">
                <BsArrowRight />
              </span>
            </p>
            {/* <button className="row2">
              {" "}
              Buy Now <span className="document"></span>
            </button> */}
          </p>
        </div>
        <div className="ogpass-right">
        <img src={ogpass}/>
        </div>
      </div>
    </div>
  );
}
export default OgPass;

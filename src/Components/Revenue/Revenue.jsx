import React from "react";
import "./Revenue.css";
import { BsArrowRight } from "react-icons/bs";

function Revenue() {
  return (
    <div className="revenue">
      <div className="revenue-container">
        <div className="revenue-left">
          <h2>
            Want to understand more details <br></br>
            about how revenue share works?
          </h2>
          <p className="row2">
              Learn more{" "}
              <span className="circle">
                <BsArrowRight />
              </span>
            </p>
        </div>
        <div className="revenue-right">
          <div className="revenues">
            <div className="revenue-card">
              <h3>334</h3>
              <p>Token Holders</p>
            </div>
            <div className="revenue-card">
              <h3>328</h3>
              <p>NFT Holders</p>
            </div>
            <div className="revenue-card">
              <h3>2,300</h3>
              <p>Followers</p>
            </div>
          </div>
          <div className="revenues">
            <div className="revenue-card2">
              <h3>3.45B</h3>
              <p>Tokens Burned</p>
            </div>
            <div className="revenue-card2">
              <h3>54</h3>
              <p>NFTs Burned</p>
            </div>
            <div className="revenue-card2">
              <h3>420</h3>
              <p>Memes</p>
            </div>
          </div>
          <div className="revenues">
            <div className="revenue-card3">
              <h3>76%</h3>
              <p>Memes</p>
            </div>
            <div className="revenue-card3">
              <h3>4.38%</h3>
              <p>Memes</p>
            </div>
            <div className="revenue-card3">
              <h3>100%</h3>
              <p>Memes</p>
            </div>
          </div>
          <div className="revenuess">
            <div className="revenue-card4">
              <h3>6.70B</h3>
              <p>Remaining Tokens</p>
            </div>{" "}
            <div className="revenue-card4">
              <h3>6,846</h3>
              <p>Memes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revenue;

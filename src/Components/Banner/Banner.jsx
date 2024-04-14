import React from "react";
import "./banner.css";


// import VideoPlayer from "./videoplayer";
import videoSource from "../../Assets/hero.mp4";
import VideoAsGif from "./videoplayer";
function Banner() {
 
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-left">
          <h2>Welcome to the new era of online arcades</h2>
          <br></br>
          <p>
            Jump into the premier online platform where competitive gaming meets
            cryptocurrency wagering.
          </p>
          <h4>Arcade Stats</h4>
          <div className="cards-container">
            <div className="banner-card">
              <h3>1000+</h3>
              <p>Players Registered</p>
            </div>
            <div className="banner-card">
              <h3>10,000+</h3>
              <p>Matches Played</p>
            </div>
            <div className="banner-card">
              <h3>1,000,000+</h3>
              <p>ADA Wagered</p>
            </div>
          </div>
        </div>
        {/* <div className="banner-right">
        <img src={pick} style={{width:"200px",margin:"0 auto"}}/>
        
        </div> */}
      </div>
    </div>
  );
}

export default Banner;

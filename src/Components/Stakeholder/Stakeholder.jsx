import React from "react";
import './stakeholder.css'
import ogpass from '../../Assets/pickle12.png'
import picture from '../../Assets/Picture.png'
import sade from '../../Assets/00685.png'
function Stakeholder() {
  return (
    <div className="stakeholder">
      <div className="stakeholder-container">
        <span>Revenue Share Through Asset Ownership</span>
        <h2>Become a holder of $PICKLE and PickleButt NFTs</h2>
        <p>
          We reward those who are part of our ecosystem by granting holders the
          utility to earn ADA yield from Pickle Arcade service fees.
        </p>
        <div className="stakeholder-card">
          <h3>33%</h3>
        </div>
        <p className="p-grad">
          33% of the revenue generated will go back to stakeholders of the
          Pickle Ecosystem according to the following allocations.
        </p>
        <div className="cards-container">
          <div className="stakes-card">
            <div className="stake-top">
              <img src={picture} />
              <h3>20%</h3>
            </div>
            <h3>PICKLE Token</h3>
          </div>
          <div className="stakes-card">
            <div className="stake-top">
              <img  src={sade}/>
              <h3>10%</h3>
            </div>
            <h3>PickleButts NFT</h3>
          </div>
          <div className="stakes-card">
            <div className="stake-top">
              <img src={ogpass}/>
              <h3>3%</h3>
            </div>
            <h3>OG Pass</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stakeholder;

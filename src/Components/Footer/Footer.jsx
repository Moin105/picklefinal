import React from "react";
import { FaDiscord } from "react-icons/fa6";
import './footer.css'
import footies from '../../Assets/footer.png'
import { RiTwitterXLine } from "react-icons/ri";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="upper">
          <div className="upper-left">
            <img src={footies}/>
            <p>
                An original meme building the most 
                competitive online arcade to win crypto.
            </p>
          </div>
          <div className="upper-right">
            <p>For inquiries regarding careers, partnerships, collaborations ,or investments, please email us:</p>
            <p><b>admin@picklearcade.com</b></p>
          </div>
        </div>
        <div className="lower">
          <div className="one">
              <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
          </div>
          <div className="two">
             <p>Copyright © 2024 Pickle Media. All rights reserved. </p>
          </div>
          <div className="three">
          <ul>
                        <li><a href="/"><FaDiscord/></a></li>
                        <li><a href="/about"><RiTwitterXLine/></a></li>
                    </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

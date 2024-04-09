import React from 'react'
import './learnmore.css'
import Learn from '../../Assets/learn.jpg'
import { FaDiscord } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

function LearnMore() {
  return (
    <div className='learncontainer'>

   
    <div className='learnmore'>
            <h2>Want to learn more about what we are building?</h2><br></br>
            <p>Check out our average white paper</p><br></br>
            <img src={Learn}/>  
            <button>Read White Paper</button>
    </div>
    <div className='learnbottom'>
            <p>What are you waiting for?</p>
            <div className='box-span'>
                <RiTwitterXLine/>
                <FaDiscord/>
            </div>
    </div>
    </div>
  )
}

export default LearnMore
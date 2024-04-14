import React from 'react'
import Swap from '@dexhunterio/swaps'
import '@dexhunterio/swaps/lib/assets/style.css'
import './Swapsection.css'
import videoSource from "../../Assets/token.gif";
import VideoAsGif from "../Banner/videoplayer";
function SwapSection() {
  return (
    <div className='swap-section'>
          <div className='swap-container'>
               <div className='swap'>
               <div className="gif-swap">
               <img src={videoSource} alt="loading..."  />
               </div>
                  <h2>PICKLE Token</h2>
                  <p>The thiccest memecoin providing dillish utility to those who hodl</p>
                  <Swap
      orderTypes={["SWAP"]}
      defaultToken="3c8cceafc16845f6ee5afe36f1521f0d1a384b55a69242eb5154cdef5049434b4c45"
      colors={{"background":"#0E0F12","containers":"#191B23","subText":"#88919E","mainText":"#FFFFFF","buttonText":"#FFFFFF","accent":"#27A128"}}
      theme="dark"
      width="450"
      partnerCode="pickle6164647231717976653668327a73713934723535636e336d6b3635757163766363676b3475366e6c3071796c3030336e6867337a7a36667679686134676d3635756b647070656472786d63717867767979397533637036777663656e7a6c336571743275737532da39a3ee5e6b4b0d3255bfef95601890afd80709"
      partnerName="pickle"
      displayType="FULL"
    />
               </div>
          </div>
    </div>
  )
}

export default SwapSection
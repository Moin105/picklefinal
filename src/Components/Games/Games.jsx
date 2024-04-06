import React from 'react'
import './game.css'
import falppy from '../../Assets/flappyBtn.png'
import galaga from '../../Assets/galagaBtn.jpg'
import jump from '../../Assets/jumpBtn.jpg'
import road from '../../Assets/roadBtn.png'
function Games() {
  return (
    <div className='games'>
       <div className='games-container'>
       <div className='games-left'>
            <span>Safe & Secure</span>
            <h2>
                Pickle Arcade delivers an adrenaline-
                fueled gaming experience.
            </h2>
            <p>
                Challenge opponents,in skill-based mini-games for crypto. The Pickle 
                Arcade is accessible to anyone with an internet browser,providing instant
                payouts and a secured environment.  
            </p>
            <button>
                Launch Arcade
            </button>
       </div>
       <div className='games-right'>
            <img src={galaga} alt='games'/>
            <img src={jump} alt='games'/>
            <img src={falppy} alt='games'/>
            <img src={road} alt='games'/>
       </div>
       </div>
    </div>
  )
}

export default Games
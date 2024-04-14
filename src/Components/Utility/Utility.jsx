import React from 'react'
import './utility.css'
import discount from '../../Assets/discount.png'
import governance from '../../Assets/governance.png'
import staking from '../../Assets/staking.png' 
import fire from '../../Assets/fire.gif'
function Utility() {
  return (
    <div className='utility'>
          <div className='utility-container'>
                 <h2>PICKLE Utility</h2>
                 <div className='utility-boxes'>
                         <div className='utility-box'>
                         <img src={staking}/>
                         <h3>Staking</h3>
                         <p>Stake PICKLE to earn real crypto yield directly from arcade fees.</p>
                         </div>
                         <div className='utility-box'>
                         <img src={discount}/>
                         <h3>Fee Discounts</h3>
                         <p>Hold PICKLE to obtain arcade fee discounts.</p>
                         </div>
                         <div className='utility-box'>
                         <img src={governance}/>
                         <h3>Governance</h3>
                         <p>Exercise your voting rights by using your PICKLE to participate in platform governance.</p>
                         </div>
                 </div>
                 <div className='fire-stamp'>
                          <img src={fire}/>
                 </div>
                 <div className='fire-text'>
                    <span>Burned PICKLE</span>
                    <h2>3,450,000,000</h2>
                    <p>Sent to the infamous $burnsnek wallet</p>
                    <button className='fire-button'>View Wallet</button>
                 </div>
          </div>
    </div>
  )
}

export default Utility
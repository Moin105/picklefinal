import React from 'react'
import swap from '../../Assets/swap.png'
import dexxy from '../../Assets/dexyyy.png'
import logo from '../../Assets/pick.png'
import './midsection.css'
import taptools from '../../Assets/taptools.png'
function Midsection() {
  return (
    <div className='pickle-trades'>
    <div className='pickle-trade-container'>
         <span>The Ultimate Memecoin</span>
         <h2>$PICKLE Token</h2>
         <p>Providing dilish utility to those who hodl.</p>
         <img src={logo}/>
         <span className='supply'>Token Supply : <b> 69,696,969,696</b></span>
         <span className='supply'>Policy ID  : <b> 3c8cceafc16845f6ee5afe36f1521f0d1a384b55a69242eb5154cdef
</b></span>
         <div className='trader-container'>
            <div className='trader'>
                <h3>DexHunter</h3>
                <img src={dexxy}/>
            </div>
            <div className='trader'>
                <h3>TapTools</h3>
                <img src={taptools}/>
            </div>
            <div className='trader'>
                <h3>Miniswap</h3>
                <img src={swap}/>
            </div>
         </div>
    </div> 
    </div>
  )
}

export default Midsection
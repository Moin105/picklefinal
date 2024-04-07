import React from 'react'
import './Tokenomics.css'
function NomicsCard({text, description, bg}) {
  return (
    <div className='nomics-card'>
      <div className='nomics-card-left' style={{background:bg}}>

      </div>
      <div className='nomics-card-right'>
         <h3>{text}</h3>
      {description &&   <p>{description}</p>}
      </div>
          </div>
  )
}

export default NomicsCard
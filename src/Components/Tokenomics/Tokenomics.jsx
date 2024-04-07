import React from 'react'
import smoke from '../../Assets/smoke.jpeg'
import NomicsCard from './NomicsCard'
import PieChart from './PieChart';
function Tokenomics() {
  const tokenols =  [
     { title:  "Token Sale - 40%",
     bg:"#24a32b",
      description: "Hard Cap of 69k ADA, fair token launch, 0% supply to founders,100% funds raised injected into liquidity pool on minswap."},
{title:"Initial Liquidity - 30%",
bg:"#002901",
description:"Minswap initial token deposit + presale proceeds. LP Locked by Brave Dogs"},
{title:"Marketing - 15%",
bg:"#ff6100",
description: "Partnerships, Engagement Farming, Marketing Experiments."},
// {title:"Marketing - 15%",
// bg:"#ff6100",
// description:''},
{title:"Yield Farming - 10%",
bg:"#ffe500",
description:''},
{title:"CEX Listings - 4%",
bg:"#043bfa",
description:''},
{title:"Airdrop- 1%",
bg:"#ff50de",
description:''}    
    ]
    const data = [
        { value: 40, color: '#24a32b' },
        { value: 30, color: '#002901' },
        { value: 15, color: '#ff6100' },
        { value: 10, color: '#ffe500' },
        { value: 4, color: '#043bfa' },
        { value: 1, color: '#ff50de' },
      ];
  return (
    <div className='tokenomics'>
   {/* <span className='spaef'>
   <img src={smoke}/>
   </span>  */}
    <div className='tokenomics-container'>
         <div className='card-item'>
                <h2>Picklenomics</h2>
                <p className='suo'>Our Picklenomics are designed to reward holders while increasing the value of the token over time. </p>
             <div className='items' >
                <div className='item-left'>
                <PieChart data={data} />
                </div>
                <div className='item-right'>
                {tokenols.map((item, index) => (
                    <NomicsCard  key={index} bg={item.bg}  text={item.title} description={item.description} />
                ))}
                </div>
             </div>
         </div>
    </div>

    </div>
  )
}

export default Tokenomics
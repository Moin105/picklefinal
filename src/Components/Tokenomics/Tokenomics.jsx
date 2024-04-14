import React from 'react'
import smoke from '../../Assets/smoke.jpeg'
import NomicsCard from './NomicsCard'
import PieChart from './PieChart';
import chart from '../../Assets/chart.png'
function Tokenomics() {
  const tokenols =  [
     { title:  "40% - Token Sale ",
     bg:"#2ABD19",
      description: "Hard Cap of 69k ADA, fair token launch, 0% supply to founders,100% funds raised injected into liquidity pool on minswap."},
{title:"30% - Initial Liquidity",
bg:"#FFE500",
description:"Minswap initial token deposit + presale proceeds. LP Locked by Brave Dogs"},
{title:"15% - DAO Treasury",
bg:"#139EF2",
description: "Partnerships, Engagement Farming, Marketing Experiments."},
// {title:"Marketing - 15%",
// bg:"#ff6100",
// description:''},
{title:"10% - Blockchain Expansion",
bg:"#CB6CE7",
description:''},
{title:"4% - CEX Listings/Partnerships",
bg:"#FE6100",
description:''},
{title:"1% - Airdrop",
bg:"#FE3131",
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
                <h2>Pickle Tokenomics</h2>
             <div className='items' >
                <div className='item-left'>
                <img src={chart}/>
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
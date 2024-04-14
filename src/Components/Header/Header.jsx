import React,{useState} from 'react';
import { FaDiscord } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import logosa from '../../Assets/logosa.png'
import {motion } from 'framer-motion'
import Swap from '@dexhunterio/swaps'
import '@dexhunterio/swaps/lib/assets/style.css'
import './Header.css'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [shows, setShows] = useState(false);
    return (
        <header className="headers">
            <div className="header">
                <figure>
                    <img src={logosa} alt="Logo"/>
                    <ul>
                        {/* <li><a href="/">Home</a></li> */}
                        <li><a href="/picklehub">Picklehub</a></li>
                        <li><a href="/staking">Staking</a></li>
                        <li><a href="/picklepaper">Pickle Paper</a></li>
                    </ul>
                </figure>
                <nav style={{display:"flex",gap:"20px"}}>  
                    <button className='arcade'>
                    Launch Arcade
                    </button>
                    <button className='arcade' onClick={()=>{setShow(!show)}}>
                    Connect Wallet
                    </button>
                  {show &&  <span style={{position:'absolute',right:"25px",top:"55px"}}>
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
                    </span>}
                </nav>
            </div>
            <div className='nav-header'>
            <figure>
                    <img src={logosa} alt="Logo"/>
                </figure>
                <nav>  
                    <ul>
                    
                        <li style={{cursor:"pointer"}} onClick={()=>{setIsOpen(!isOpen)}}><a>{isOpen ? <IoMdClose/>:<MdOutlineMenu/>}</a></li>
                    </ul>
               <motion.div className='dieef'
                    initial={{width:"100%",height:"0px",top:"65px",left:0,position:"fixed",zIndex:1000,backgroundColor:"black",boxShadow:"10px 10px 0 rgba(0, 0, 0, 0.2)",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}
                    animate={{
    height: isOpen ? "calc(100% - 65px )" : "0px",
    backgroundColor: "black",
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
    position: "fixed",
  }}
  transition={{ delay: 0.3 }}
                    >
                    <div className='ertyuytr' >
                    {/*<IoMdClose    onClick={()=>{setIsOpen(!isOpen)}}/>*/}
                    </div>
                          <motion.ul 
                          initial={{opacity:"0"}}
                          className='navrpe'
                          transition={{ delay: 0.3 }}

                            animate={{

                                opacity: isOpen ? "1" : "0",
                            }}
                          style={{display:"flex",flexDirection:"column"}}>
                        {/* <li><a href="/">Home</a></li> */}
                        <li><a onClick={()=>{setIsOpen(false)}} style={{color:"white!important"}} href="/collection">Picklehub</a></li>
                        <li><a onClick={()=>{setIsOpen(false)}} style={{color:"white!important"}} href="/about" >Staking</a></li>
                        <li><a onClick={()=>{setIsOpen(false)}} style={{color:"white!important"}} href="/collection">Pickle Paper</a></li>
                    </motion.ul>
                    <div>
                    <motion.ul 
                          initial={{opacity:"0"}}
                          transition={{ delay: 1 }}
                           className='navrped'
                            animate={{

                                opacity: isOpen ? "1" : "0",
                            }}
                          style={{display:"flex",margin:"0px 0px 30px 0px"}}>
                          <button className='arcade'>
                            Launch Arcade
                          </button>
                          
                          </motion.ul>
                          <motion.ul 
                          initial={{opacity:"0"}}
                          transition={{ delay: 1 }}
                           className='navrped'
                            animate={{

                                opacity: isOpen ? "1" : "0",
                            }}
                          style={{display:"flex",margin:"0px 0px 30px 0px"}}>
                              <button className='arcade' onClick={()=>{setShows(!shows)}}>
                    Connect Wallet
                    </button>
                  {shows &&  <span style={{position:'absolute',right:"25px",top:"55px"}}>
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
                    </span>}
                          
                          </motion.ul>
                          </div>
                    </motion.div>
                </nav>
            </div>
        </header>
    );
};

export default Header;

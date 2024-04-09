import React,{useState} from 'react';
import { FaDiscord } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import logosa from '../../Assets/logosa.png'
import {motion } from 'framer-motion'
import './Header.css'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
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
                <nav>  
                    <button className='arcade'>
                    Launch Arcade
                    </button>
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
    backgroundColor: "white",
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
                        <li><a onClick={()=>{setIsOpen(false)}} style={{color:"black!important"}} href="/collection">Picklehub</a></li>
                        <li><a onClick={()=>{setIsOpen(false)}} style={{color:"black!important"}} href="/about" >Staking</a></li>
                        <li><a onClick={()=>{setIsOpen(false)}} style={{color:"black!important"}} href="/collection">Pickle Paper</a></li>
                    </motion.ul>
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
                    </motion.div>
                </nav>
            </div>
        </header>
    );
};

export default Header;

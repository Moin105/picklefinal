import React,{useState} from 'react';
import logo from '../../Assets/Picture2.png';
import { FaDiscord } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";

import {motion } from 'framer-motion'
import './Header.css'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="headers">
            <div className="header">
                <figure>
                    <img src={logo} alt="Logo"/>
                    <ul>
                        {/* <li><a href="/">Home</a></li> */}
                        <li><a href="/about">Pickle Arcade</a></li>
                        <li><a href="/collection">Picklehub</a></li>
                        <li><a href="/collection">Pickle Paper</a></li>
                    </ul>
                </figure>
                <nav>  
                    <ul>
                        <li><a href="/"><FaDiscord/></a></li>
                        <li><a href="/about"><RiTwitterXLine/></a></li>
                    </ul>
                </nav>
            </div>
            <div className='nav-header'>
            <figure>
                    <img src={logo} alt="Logo"/>
                </figure>
                <nav>  
                    <ul>
                    
                        <li style={{cursor:"pointer"}} onClick={()=>{setIsOpen(!isOpen)}}><a><MdOutlineMenu/></a></li>
                    </ul>
               <motion.div className='dieef'
                    initial={{width:"200px",height:"0px"}}
                    animate={{
    height: isOpen ? "200px" : "0px",
    backgroundColor: "white",
    x: !isOpen ? "0" : "-150px",
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
    position: "fixed",
  }}
  transition={{ delay: 1 }}
                    >
                          <motion.ul 
                          initial={{opacity:"0px"}}
                          transition={{ delay: 1 }}
                            animate={{

                                opacity: isOpen ? "1" : "0",
                            }}
                          style={{display:"flex",flexDirection:"column"}}>
                        {/* <li><a href="/">Home</a></li> */}
                        <li><a onClick={()=>{setIsOpen(false)}} style={{color:"black!important"}} href="/about" >Pickle Arcade</a></li>
                        <li><a onClick={()=>{setIsOpen(false)}} style={{color:"black!important"}} href="/collection">Picklehub</a></li>
                        <li><a onClick={()=>{setIsOpen(false)}} style={{color:"black!important"}} href="/collection">Pickle Paper</a></li>
                    </motion.ul>
                    <motion.ul 
                          initial={{opacity:"0px"}}
                          transition={{ delay: 1 }}
                           className='navrpe'
                            animate={{

                                opacity: isOpen ? "1" : "0",
                            }}
                          style={{display:"flex",flexDirection:"column"}}>
                        <li style={{color:"black !important"}}  onClick={()=>{setIsOpen(!isOpen)}}><a style={{color:"black !important"}} href="/"><RiTwitterXLine/></a></li>
                        <li style={{color:"black !important"}}  onClick={()=>{setIsOpen(!isOpen)}}><a style={{color:"black !important"}} href="/about"><RiTwitterXLine/></a></li>
                    </motion.ul>
                    </motion.div>
                </nav>
            </div>
        </header>
    );
};

export default Header;

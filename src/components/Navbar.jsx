import React from 'react'
import {motion} from 'framer-motion';
import logo from '../assets/logo.png'
import navbar from '../styles/navbar.css'
import { useState } from 'react';
import { BsFillGrid3X3GapFill} from 'react-icons/bs';


const buttonvariants = {
    hidden: { 
      x: "100vw",
      opacity:0 
    },
    visible: { 
      x:0,
      opacity: 1,
      stiffness: 100
    }
  }

  const Loadvariants = {
    hidden: {x: "-100vw",
    },
    visible: { x: 0,
       transition: {
            type: "spring",
            duration: 1.5
       },
    }
  }

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);
  return (
    <div className='nav-container'>
        <div className='nav-sub_container'>
            <div className='logo'><img src={logo} alt="highway" /></div>
            <motion.ul className='navlinks'
                initial={"hidden"}
                animate={"visible"}
                transition={{staggerChildren: 0.5}}
                whileInView={"visible"}
              viewport={{once: false}}
                variants={buttonvariants}            
            >
                <motion.li
                  variants={buttonvariants}
                >   <a href="#">Home</a>
                </motion.li>

                <motion.li
                  variants={buttonvariants}
                >   <a href="#">Gallery</a>
                </motion.li>
            
                <motion.li
                  variants={buttonvariants}
                >   <a href="#">Pricing</a>
                </motion.li>

                <BsFillGrid3X3GapFill className='burger'
                onClick={() => setShowNav(!showNav)}
          />
          {
                showNav && <motion.ul className='sec_navLinks' onClick={()=> setShowNav(false)}
                initial="hidden"
                animate="visible"
                exit={{
                  x: "-100vw",
                 transition:{ ease: 'easeInOut'}
                }}
                variants={Loadvariants}
                 >
                <li><a href="">Home</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#pricing">Pricing</a></li>
            </motion.ul>
            }
            </motion.ul>
        </div>
    </div>
  )
}

export default Navbar;
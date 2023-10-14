import React from 'react'
import {motion} from "framer-motion"
import Navbar from './Navbar'
import hero_page from '../styles/hero_page.css'
import highway from '../assets/highway.png'
import beach from '../assets/beach.png'
import bg from '../assets/bg.jpg'
import earth from '../assets/earth2.png'
import luggage from '../assets/luggage.png'


const HeroPage = () => {
  return (
    <div className='heropage_container'>
        <Navbar />
        <div className='earth'>
        <img src={earth} alt="earth"/>
        </div>
        
      <div className='front_flex'>
        <div className='left'>
          <p className='header'>EXPLORE <span>DREAM</span> DESTINATION </p>
          <p className='subheader'>Tour around the world with the new destination</p>
          <button><a href="#premium">Explore</a></button>
        </div>
        <div className='right'>
       <motion.div className='highway'
          animate={{
            rotate: 360,
          }}
          transition={{
           duration: 60,
            yoyo: Infinity
          }} 
       >
        <img src={highway} alt="highway"/>
        </motion.div>
        <motion.div className='beach'
          animate={{
            y: ["0px", "5px", "-5px", "0px"],
          }}
          transition={{
           duration: 3,
            yoyo: Infinity
          }} 
        >
        <img id='beach' src={beach} alt="highway"/>
        </motion.div>
        <motion.div className='luggage'
         animate={{
          y: ["0px", "5px", "-5px", "0px"],
        }}
        transition={{
         duration: 3,
          yoyo: Infinity
        }} 
        >
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
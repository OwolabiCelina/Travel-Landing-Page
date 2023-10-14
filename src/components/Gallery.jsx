import gallery from '../styles/gallery.css'
import canyon from "../assets/grand1.jpg"
import sdy from "../assets/sdy.jpg"
import macchu from "../assets/macchu.jpg"
import maldives from "../assets/maldives.jpg"
import victoria from "../assets/victoria.jpg"
import cap from "../assets/cap.jpg"
import colo from "../assets/colo.jpg"
import {motion} from "framer-motion"


const boxvariants = {
    hidden: { 
      x: -100,
      opacity:0 
    },
    visible: { 
      x:0,
      opacity: 1
    }
  }


const Gallery = () => {
  return (
    <section className='gallery' id="gallery">
        <div className='gallery_container'>
            <p className='gallery_header'>
                Our Gallery
            </p>
            <p className='gallery_subheader'>
                We Record Memories
            </p>
            <motion.div className='box_containers'
             initial={"hidden"}
             whileInView={"visible"}
             viewport={{once: true}}
             transition={{staggerChildren: 0.15}}
             variants={boxvariants}
            >
               <motion.div className='box'
                variants={boxvariants}
               >
                    <img src={canyon} alt="highway"/>
                   
                    <div className='box_desc'>
                        <p className='place' >Grand Canyon</p>
                        <p className='location' >Grand Canyon National park, Arizona</p>
                        <button>Visit</button>
                    </div>
               </motion.div>
               <motion.div className='box'
                variants={boxvariants}
               >
                    <img src={macchu} alt="highway"/>
                  <div className='box_desc'>
                    <p className='place'>Machu Picchu</p>
                    <p className='location'>A symbol of the Incan Empire 1450AD, Peru</p>
                    <button>Visit</button>    
                  </div>
               </motion.div>
               <motion.div className='box'
                 variants={boxvariants}
               >
                    <img src={maldives} alt="highway"/>
                    <div className='box_descc'>
                      <p className='place'>Maldives</p>
                      <p className='location'>An archipelagic state situated in the Indian Ocean</p>
                      <button>Visit</button>
                    </div>
               </motion.div>
               <motion.div className='box'
                variants={boxvariants}
               >
                    <img src={cap} alt="highway"/>
                    <div className='box_desc'>
                      <p className='place' >Cappadocia</p>
                      <p className='location' >Unique rock formations and amazing hot air ballooning opportunities, Turkey</p>
                      <button>Visit</button>
                    </div>

               </motion.div>
               <motion.div className='box'
                variants={boxvariants}
               >
                    <img src={sdy} alt="highway"/>
                    <div className='box_descc'>
                      <p className='place'>Sydney Opera House</p>
                      <p className='location' >A multi-venue perforimg arts center, Sydney</p>
                      <button>Visit</button>
                    </div>

               </motion.div>
               <motion.div className='box'
                variants={boxvariants}
               >
                    <img src={victoria} alt="highway"/>
                    <div className='box_desc'>
                      <p className='place'>Victoria Falls</p>
                      <p className='location' >Waterfall on the Zambezi River, zimbabwe</p>
                      <button>Visit</button>
                    </div>

               </motion.div>
               <motion.div className='box'
                variants={boxvariants}
               >
                    <img src={colo} alt="highway"/>
                    <div className='box_desc'>
                      <p className='place'>Colosseum</p>
                      <p className='location' >An oval amphitheatre in the city of Rome, Italy</p>
                      <button>Visit</button>
                    </div>

               </motion.div>
              
            </motion.div>
        </div>
    </section>
  )
}

export default Gallery
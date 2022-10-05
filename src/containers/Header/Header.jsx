import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion';
import { images } from '../../constants'
import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const flotantes = [images.flutter, images.redux, images.sass, images.css, images.html]

const Header = () => {
  return (
    <div className='app__header app__flex'>
 
      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 0.5 }} className="app__header-img" >
        <div>
          <img src={images.profile} alt="perfil" className='imagen' />  

          <motion.img whileInView={{ scale: [0, 1] }} transition={{ duration: 1, ease: 'easeInOut' }} className="overlay_circle" src={images.circle} alt="circle-background"></motion.img>
     
        </div>
      </motion.div>

      <motion.div variant={scaleVariants} whileInView={scaleVariants.whileInView} className='app__header-circles'>
        
        {flotantes.map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle"/>
          </div>
        ))}
      </motion.div>

      
    </div>
  )
}

export default AppWrap(Header, 'home')
import React, { useState } from 'react'
import './Navbar.scss'
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'




const Navbar = () => {
  const menu = ['home', 'about', 'work', 'skills', 'contact'];
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <img src={images.logo} alt="logo" />
        </div>
              
        <ul className='app__navbar-links'>
          {
            menu.map((item) => (
              <li className='app__flex p-text' key={`link-${item}`}>
                <div></div>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))
          }
        </ul>

        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)}></HiMenuAlt4>
          
          {toggle && (
            <motion.div
              whileInView={{ x: [200, 0] }}
              transition={{ duration: 0.5, ease: 'easeOut' }}>
              
              <HiX onClick={() => setToggle(false)}></HiX>

              <ul>
                {
                  menu.map((item) => (
                    <li key={item}><a onClick={() => setToggle(false)} href={`#${item}`}>{item}</a></li>
                  ))
                }
              </ul>

            </motion.div>
          ) }
        </div>

      </nav>      
    </div>
    


  )
}

export default Navbar

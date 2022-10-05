import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrapper } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message      
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true)
        
    })

  }

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>

      <div className='app__footer-cards'>
        <div className="app__footer-card">
          <img src={images.email} alt="images of an email" />
          <a href="mailto:code2steps@gmail.com">code2steps@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="images of an mobile" />
          <a href="tel:+584245042502">+584245042502</a>
        </div>
      </div>

      {!isFormSubmitted ?
        <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type="text" name="name" placeholder='Your Name' value={name} onChange={handleChangeInput}/>
        </div>
        <div className='app__flex'>
          <input className='p-text' type="email" name="email" placeholder='Your Email' value={email} onChange={handleChangeInput}/>
        </div>
        <div className='app__flex '>
          <textarea className='p-text' placeholder='Your Message' value={message} name="message" onChange={handleChangeInput}></textarea>
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message '}</button>
        </div>
        :
        <h3 className="head-text">Thank you for getting in touch</h3>
      
    }

      
    
    </>
  )
}

export default AppWrap(
  MotionWrapper(Footer, 'app__footer'), 'contact', "app__primarybg"
) 
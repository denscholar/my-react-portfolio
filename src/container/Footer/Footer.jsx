import React, { useState } from 'react';
import MotionWrapper from '../../MotionWrapper/MotionWrapper';
import Wrapper from '../../Wrapper/Wrapper';
import { client } from '../../client';
import emailImage from '../../assets/assets/email.png';
import telImage from '../../assets/assets/mobile.png';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true)
      })
  }
  return (
    <>
      <h2 className="head-text" style={{marginTop: '5rem', marginBottom: '2rem', fontSize: '25px'}}>
        Take a coffee and chat with me
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={emailImage} alt="email" />
          <a href="mailto:d.akagha20@gmail.com" className='p-text'>d.akagha20@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={telImage} alt="telephone" />
          <a href="tel: +234 814-598-6650" className='p-text'>+234 814-598-6650</a>
        </div>
      </div>


      {!isFormSubmitted ? (<div className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text" className="p-text" placeholder='Your name' name='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input type="email" className="p-text" placeholder='Your email' name='email' value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
            className='p-text'
            name="message"
            value={message}
            placeholder='Your message'
            onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>) :
        (<div>
          <h3 className="head-text">Thank You for getting in touch</h3>
        </div>)}
    </>
  )
}

export default Wrapper(
  MotionWrapper(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
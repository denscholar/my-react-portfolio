import React from 'react';
import { motion } from 'framer-motion';
import profile from '../../assets/assets/denscholar.png';
import circle from '../../assets/assets/circle.svg';
import redux from '../../assets/assets/redux.png';
import react from '../../assets/assets/react.png';
import python from '../../assets/assets/python.png';
import Wrapper from '../../Wrapper/Wrapper';
import './Header.scss';

const scaleVariant = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >

        <div className="app__header-badge">
          <div className='badge-cmp app-flex'>
            <span>👋</span>
            <div style={{ marginLeft: '20px' }}>
              <p className="p-text title">Hello, I am</p>
              <h1 className="head-text">Dennis</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className="p-text">Full-stack Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={profile} alt="profile" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          src={circle}
          alt='circle-image'
          className='overlay__circle'
        />
      </motion.div>
      <motion.div
        variants={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className="app__header-circles"
      >
        {[redux, react, python].map((circleImage, index) => (
          <div className='circle-cmp app__flex' key={`circleImage-${index}`}>
            <img src={circleImage} alt="stack_image" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Wrapper(Header, 'home');
import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../../assets/assets/logo-me1.png';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { motion } from 'framer-motion';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={logo} alt="logo" />
            </div>
            <ul className='app__navbar-links'>
                {['home', 'about', 'work', 'skill', 'contact'].map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <MenuOutlinedIcon onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [150, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <CancelPresentationOutlinedIcon onClick={() => setToggle(false)} />
                        <ul>
                            {['home', 'about', 'work', 'skill', 'contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}

            </div>
        </nav>
    )
}

export default Navbar
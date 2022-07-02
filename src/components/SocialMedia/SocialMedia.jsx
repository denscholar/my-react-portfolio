import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://twitter.com/dennisakagha" target='_blank' rel="noreferrer"><AiFillTwitterCircle/></a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/dennisakagha/" target='_blank' rel="noreferrer"><AiFillLinkedin/></a>
                
            </div>
            {/* <div>
                <FaFacebookF/>
            </div> */}
        </div>
    )
}

export default SocialMedia

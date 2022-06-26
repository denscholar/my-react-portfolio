import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <AiFillTwitterCircle/>
            </div>
            <div>
                <AiFillLinkedin/>
            </div>
            <div>
                <FaFacebookF/>
            </div>
        </div>
    )
}

export default SocialMedia

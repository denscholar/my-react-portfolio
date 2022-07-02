import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
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
            <div>
                <a href="https://github.com/denscholar" target='_blank' rel="noreferrer"><AiFillGithub/></a>
            </div>
        </div>
    )
}

export default SocialMedia

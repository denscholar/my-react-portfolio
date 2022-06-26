/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

const NavigationDot = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'testimonial', 'work', 'skill', 'contact'].map((item, index) => (
                <a
                href={`#${item}`}
                key={item + index}
                className='app__navigation-dot'
                style={active === item ? {backgroundColor: '#313BBAC'} : {}}
                 />
            ))}
        </div>
    )
}

export default NavigationDot
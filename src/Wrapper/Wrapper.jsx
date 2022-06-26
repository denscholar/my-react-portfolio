import React from 'react'
import NavigationDot from '../components/NavigationDot/NavigationDot';
import SocialMedia from '../components/SocialMedia/SocialMedia';

const Wrapper = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia/>

      <div className="app__wrapper app__flex">
        <Component/>

        {/* <div className="copyright">
            <p className='p-text'>@2022 denscholar</p>
            <p className='p-text'>All Right reserves</p>
        </div> */}
      </div>
      <NavigationDot active={idName}/>
    </div>
  )
}

export default Wrapper

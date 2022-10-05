import React from 'react';
import {NavigationDots, SocialMedia} from "../components"

const AppWrap = (Component, idName, classNames) => function HOC(){
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia></SocialMedia>

      <div className='app__wrapper app__flex'>
        <Component></Component>
        <div className='copyright'>
          <p>@2022 CODE2STEPS</p>
          <p>All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName}></NavigationDots>



    </div>
  )
}

export default AppWrap
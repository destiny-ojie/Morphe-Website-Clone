import React from 'react'
import './hero.css';
import heroDesktop from '../../assets/banner.png'
import heroMobile from '../../assets/mobilex.png'
import DesktopHero from './DesktopHero';
import MobileHero from './MobileHero';

export default function Hero() {
    const back={
        backgroundImage: "url("+ heroDesktop +")", 
        
    }
    const mobilex={
      backgroundImage: "url("+ heroMobile +")", 
      
  }
  return (
   <>
   <DesktopHero back={back} />
   <MobileHero mobilex={mobilex} />

   </>
  )
}

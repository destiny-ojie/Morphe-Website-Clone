
import { useState } from 'react';
import MobileNave from './mobile-nav';
import DesktopNav from './desktop-nav';
import Offer from './Offer';

export default function Header() {
  /*const {ShowOverLay, SetOverLay}=useState(false);
  const hovering =()=> SetOverLay(true);
  const nothovering =()=> SetOverLay(false);*/
const[ShowLine, SetShowLine]=useState(false);
  return (
    < div className='main m-0 p-0 '>
      <Offer />
      <DesktopNav />
      <div className=' mobiles  lg:hidden'>
      <MobileNave />
      </div>

    </div>
  )
}



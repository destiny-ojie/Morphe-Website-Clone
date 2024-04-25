import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import DesktopDropDown from './DesktopDropDown';
import { useState } from 'react';


export default function DesktopNav() {
    const [ShowNav, SetNav]=useState(false);
    const HandNavShow =()=>{
        SetNav(true);
        
    }
    const HandNavHide =()=>{
        SetNav(false);
          
    }
    const links =["menu1", "menu2", "menue3"];
        
  return (
    <>
    <div className=' desktop hidden lg:block nav-container  P-0'>
        <div className='nav  bg-white p-5 drop-shadow-lg '>
          <ul className=' nav-list  lg:flex md:flex hidden justify-between items-center '>
            <li  className=' mr-auto font-extrabold  text-3xl'>M-CL<span className=' text-red-400'>O</span>NE<span className=' text-red-500'>X</span></li>
            <ul className=' drop flex mr-auto justify-center items-center'>
            <li onMouseOver={HandNavShow}  onMouseLeave={HandNavHide} className=' rel mr-5 '>NEW <hr className='line'></hr>
            </li>
            <li onMouseOver={HandNavShow}  onMouseLeave={HandNavHide} className=' mr-5 '>MAKEUP <span className=' line' ></span></li>
            <li onMouseOver={HandNavShow}  onMouseLeave={HandNavHide} className=' mr-5 '>BRUSHES & TOOLS <span ></span></li>
            <li onMouseOver={HandNavShow}  onMouseLeave={HandNavHide} className=' mr-5 '>DISCOVER <span ></span></li>
            <li onMouseOver={HandNavShow}  onMouseLeave={HandNavHide} className=' mr-5 '>GIFTS & SETS<span ></span></li>
            <li onMouseOver={HandNavShow}  onMouseLeave={HandNavHide} className=' mr-5 '>EDITS<span ></span></li>
            </ul>
            <ul className=' flex justify-center align-middle items-center'>
            <li className=' mr-5 text-sm bg-slate-400  p-1  '>MORPHE2</li>
            <li className=' pr-5'>USD$</li>
            <li className=' pr-5'>STORES</li>
            <li className=' pr-5'>LOGIN</li>
            <li className=' pr-5'><FaSearch /></li>
            <li className=' pr-5 relative'><FaShoppingBag /><span className=' absolute -top-2 -right-[0.01rem]'>0</span></li>
            </ul>
          </ul>
        </div>

      </div>
      {ShowNav? <DesktopDropDown links={links}/> : null}
      </>
  )
}

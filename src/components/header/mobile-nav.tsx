"use client"
import React from 'react';

import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa";


export default function MobileNav() {
  return (
    <div className=' nav-container  P-0'>
        <div className='nav bg-white p-5 drop-shadow-lg '>
          <ul className=' nav-links nav-list  lg:hidden flex  justify-between items-center '>
            <ul className='mr-auto flex justify-center items-center'>
            <li  className=' mr-5 '><FaBars /> </li>
            <li className=' '><FaSearch /> </li>
            </ul>
            
            <ul className=' flex mr-auto justify-center items-center'>

            <li  className=' logo  font-extrabold   text-2xl'>M-CL<span className=' text-red-400'>O</span>NE<span className=' text-red-500'>X</span></li>
            
            </ul>
            <ul className=' nav-links flex justify-center align-middle items-center'>
            

            <li className=' pr-5'>LOGIN</li>
            
            <li className=' flex justify-center items-center pr-5 relative'><FaShoppingBag /><span className=' absolute -right-[0.01rem]'>0</span></li>
            </ul>
          </ul>
        </div>

      </div>
  )
}

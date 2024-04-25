import React from 'react'

export default function DesktopHero({back}) {
  return (
    <div> <div className=' hidden lg:flex flex-row justify-end items-center  bg-cover md:bg-center bg-center w-[full]  h-[450px] md:h-[100vh] bg-no-repeat' style={back}>
    <div className=' hidden lg:flex  justify-end items-center '>
    <div className=' flex flex-col justify-start w-[20em] items-start mr-[10em] -mt-[10em] font-bold text-left '>
    <h1 className='  text-3xl  text-slate-50 '>MORPHE X ARIEL</h1>
    <p className=' text-slate-200 '>You asked. We answered. Select viral-sensation Morphe X Ariel Signature set brushes are now available individually.</p>
    <div className=' py-1 px-4 border border-slate-50 text-slate-50 mt-2'>Shop Now</div>
   </div></div>
   </div></div>
  )
}

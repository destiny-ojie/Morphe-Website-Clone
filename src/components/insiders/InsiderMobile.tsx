import React from 'react'
import insiders from '../../assets/insiders.png'

export default function InsiderMobile() {
  return (
    <div><div className='flex flex-col mb-[10em] mt-[5em]'>
        <div className='flex flex-grow '>
        <img src={insiders} className=' w-full'/>
    </div>
    <div className='px-6 py-[2em] bg-[#f0f68d]'>
        <div className='flex flex-col justify-start items-start   gap-2 '>
    <div className='  text-3xl font-extrabold text-[#74767c] '>MORPHE INSIDERS</div>
 <div>We continue to redefine how to give all people products, tools, and confidence to be unapologetically themselves. Get more for your Morphe.</div>
 <div className=' text-[#74767c] border border-[#84878f] py-2 px-5 w-fit '>BECOME AN INSIDER</div>
    </div>
    </div>
    
</div></div>
  )
}

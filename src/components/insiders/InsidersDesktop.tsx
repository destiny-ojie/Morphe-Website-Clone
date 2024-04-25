import React from 'react'
import insiders from '../../assets/insiders.png'

export default function InsiderDesktop() {
  return (
    <div>
        <div className=' bg-[#fae953] flex justify-between mb-[10em] mt-[5em] h-[35em]'>
            <div className=' flex justify-center items-start px-[10em] py-[2em] '>
                <div className='w-[25em] flex flex-col justify-start items-start   gap-2 '>
            <div className=' text-3xl font-extrabold text-[#8f8e84] '>MORPHE INSIDERS</div>
         <div>We continue to redefine how to give all people products, tools, and confidence to be unapologetically themselves. Get more for your Morphe.</div>
         <div className=' text-[#84878f] border border-[#84878f] py-2 px-5 w-fit '>BECOME AN INSIDER</div>
            </div>
            </div>
            <div className=' ml-auto flex flex-grow '>
                <img src={insiders} className=' w-full'/>
            </div>
        </div>
    </div>
  )
}

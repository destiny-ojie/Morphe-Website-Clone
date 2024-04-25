import React from 'react'
import hash from '../../assets/hash.png'

export default function () {
  return (
    <div className=' hidden md:hidden lg:flex '>
    
    <div className='mt-[5em] relative w-[100%] '>
        <img src={hash} className='w-full'/>
        <div className=' absolute top-[50%] left-20'>
        <div className='  flex flex-col w-[20em] gap-4'>
            <h1 className=' text-[#74767C]  text-6xl font-extrabold  '>#MORPHEFEST</h1>
            <p className=' text-black'>Show-stopping colors. High-performance formulas. Your all-access artistry pass is here.</p>
            <div className=' border border-gray-500 px-5 py-2 w-fit font-extrabold text-lg text-[#74767C]'>SHOP FESTIVAL SEASON</div>
        </div>
        </div>
        <div>
            
        </div>
    </div>

    </div>
    
  )
}

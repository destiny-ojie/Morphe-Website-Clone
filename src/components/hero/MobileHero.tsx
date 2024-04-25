import React from 'react'

export default function MobileHero({mobilex}) {
  return (
    <div className='lg:hidden relative'>
    <div className=' flex lg:hidden flex-row justify-end items-center bg-cover bg-center  mb-5 w-[full] h-[100vh] md:h-[100vh] bg-no-repeat' style={mobilex}>
    <div className='bg-[#a7b2d3] mt h-fit w-[100%] p-5 absolute bottom-0'>
        <div className=' flex flex-col gap-2 justify-start items-start text-gray-800'>
        <div className=' pl-6 overflow-x-hidden'>
        <h1 className='  text-3xl font-bold '>MORPHE X ARIEL</h1>
        <p >You asked. We answered. Select viral-sensation Morphe X Ariel Signature set brushes are now available individually.</p>
        <div className=' py-1 px-4 border border-gray-800 text-gray-800 mt-2 w-fit'>Shop Now</div>
        </div>
        </div>

    </div>
   </div>
    </div>
  )
}

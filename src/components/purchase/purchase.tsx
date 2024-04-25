import React from 'react'
import mobile from '../../assets/mobile.png'
import ProductsHomePage from '../products'

export default function Purchase() {
  const purchase=
    {
    backgroundImage : "url("+ mobile +")",  
  }
  
  return (
    <div className=' max-h-svh mt-7 mb-5 mr-5'>
    <div className='lg:hidden md:hidden overflow-x-hidden flex flex-col gap-2 p-1 max-fit text-gray-500 '>
        <div className=' pl-6 overflow-x-hidden'>
        <h1 className=' text-3xl font-bold '>FIND YOUR LIGHTFORM SHADE</h1>
        <div className=' mt-5 border border-gray-500 py-2 px-4 font-extrabold w-fit'>FIND YOUR SHADE</div>
        </div>
        <div className=' pl-6 bg-contain bg-center bg-repeat-x h-[100px] lg:h-[400px] md:h-[150px] mt-5 '>
          <div className=''><img src={mobile}/></div>
            
        </div>
        </div>

        <div className='hidden overflow-x-hidden lg:flex md:flex flex-col gap-2 p-5 max-fit text-gray-500 '>
        <div className=' pl-6 overflow-x-hidden'>
        <h1 className=' text-3xl font-bold '>FIND YOUR LIGHTFORM SHADE</h1>
        <div className=' mt-5 border border-gray-500 py-2 px-4 font-extrabold w-fit'>FIND YOUR SHADE</div>
        </div>
        <div className=' md:overflow-x-hidden md:overflow-y-hidden pl-6 bg-contain bg-center bg-repeat-x h-[100px] lg:h-[400px] md:h-[250px] mt-5 '>
          <div className=' flex flex-row flex-wrap lg:flex-nowrap md:flex-nowrap'><img src={mobile} className='object-fill lg:w-[800px] lg:h-[300px] md:w-[900px] md:h-[250px]'/>
          <img src={mobile} className='object-fill lg:w-[800px] lg:h-[300px] md:w-[900px] md:h-[250px]'/></div>
            
        </div>
        </div>
      
    </div>
   


   
  )
}

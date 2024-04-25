import React from 'react'
import NewProducts from './NewProducts'
import BestSellers from './BestSellers'
import NewProductsMobile from './NewProductsMobile'
import {ProductData} from '../../data.ts'
import { useState } from 'react'
export default function ProductsHomePage({shop}) {
  const [tabs,settabs]=useState(true);
  const Toggle1=()=>{
    const currenttabs = ()=> settabs(true);
    console.log(tabs)
    return currenttabs()
  }
  const Toggle2=()=>{
    const currenttabs = ()=> settabs(false);
    console.log(tabs)
    return currenttabs()
  }
  const newproducts=()=>{
    return <div className=' flex flex-col gap-4'>
      <NewProducts product={ProductData}/>
      <div className=' scroll w-[100%]  overflow-x-auto lg:overflow-x-hidden'>
        <NewProductsMobile product={ProductData}/>
        </div>
      
     
    </div>
  }
  const bestproducts=()=>{
    return <div className=' flex flex-col gap-4'>
      <BestSellers/>

    </div>
  }

 const products =()=>{
  return <div className=' flex flex-col'>
  <div className=' flex justify-center items-center gap-5 text-sm font-bold lg:text-3xl lg:font-extrabold'>
    <button onClick={Toggle1} className ={tabs?null:'text-gray-500'}>NEW ARRIVALS</button>  
    <button onClick={Toggle2} className ={!tabs?null:'text-gray-500'}>BEST SELLERS</button>
  </div>
  <div className=' lg:flex justify-center items-center mt-[3em]' >
    {tabs? newproducts(): bestproducts()}
    </div>
</div>
 }

const shops =()=>{
  return <div className=' flex flex-col'>
  <div className=' flex justify-between items-center m-auto lg:gap-[43em] gap-40 pt-5 lg:pt-0 px-3 lg:px-0  text-sm font-bold '>
   <div className=' lg:text-3xl lg:font-extrabold text-[#74767c]'>SHOW STOPPING COLORS</div> <div><a className=' underline'>Shop all</a></div>
  </div>
  <div className=' lg:flex justify-center items-center mt-[3em]' >
    {newproducts()}
    </div>
</div>
}
 

  return (
    shop? shops() : products()
  )
}

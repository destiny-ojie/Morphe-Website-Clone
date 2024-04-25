import React from 'react'

import './products.css'
export default function NewProductsMobile({product}) {
  return (
    <div>
    <div className=' w-[500%] pb-[3em] '>
    <div className=' pl-6 flex gap-3 flex-nowrap lg:hidden '>
      {product.map(product=>{
        return product.title === 'banner'? <div key={product.id} className=' relative h-full'>
        <img className=' w-[700px] h-[500px] object-cover'  src={product.img}  />
      
      <div className=' absolute from-black to-transparent bg-gradient-to-b top-0 py-[10em] w-[240px] '></div>
      <span className=' absolute top-2 left-2 text-white text-lg font-extrabold '>{product.description}</span>
      <span className=' absolute top-8 left-2 text-white '>SHOP NOW {'>'} </span>
      
    </div> : <div className=' flex flex-col gap-1'>
         <div className=' w-fit bg-[#f7f7f7]'>
          <img className='w-[500px] h-[200px] object-fill'  src={product.img}  />
        </div>
        <div className=' card-name py-2'>{product.title}</div>
        <div className=' card-price py-2'>{product.price}</div>
        <div className=' card-description py-2'>{product.description}</div>
        <div className=' card-button border border-gray-400 font-extrabold text-sm w-fit py-2 px-4 mt-auto'> ADD TO BAG</div>
      </div>
      })}
      
      
     
    </div>

    </div>
    

    </div>
  )
}

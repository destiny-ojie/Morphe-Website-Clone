import React from 'react'
import './products.css'

export default function NewProducts({product}) {
  return (
    
    <div className=' h-full'>
    
    <div className=' hidden px-16 lg:grid grid-cols-5 gap-3 md:hidden  '>
      {product.map(product=>{
        return  product.title ==='banner'?<div key={product.id} className=' relative h-full'>
          <img className='w-[250px] h-[100%] object-cover'  src={product.img}  />
        
        <div className=' absolute from-black to-transparent bg-gradient-to-b top-0 py-[10em] w-[250px] '></div>
        <span className=' absolute top-2 left-2 text-white text-lg font-extrabold '>{product.description}</span>
        <span className=' absolute top-8 left-2 text-white '>SHOP NOW {'>'} </span>
        
      </div>
      
      :<div key={product.id} className=' flex flex-col gap-4 h-full'>
        <div className=' w-fit bg-[#f7f7f7]'>
          <img className='w-[250px] h-[250px] object-fill'  src={product.img}  />
        </div>
        <div className=' card-name '>{product.title}</div>
        <div className=' card-price'>{product.price}</div>
        <div className=' card-description'>{product.description}</div>
        <div className=' card-button border border-gray-400 font-extrabold w-fit py-2 px-4 mt-auto'> ADD TO BAG</div>
      </div>
      })}
     
     

    </div>

    </div>
  )
}

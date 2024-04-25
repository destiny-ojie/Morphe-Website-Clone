import React from 'react'
import { Children } from 'react'


export default function DesktopDropDown({links}) {
    
   
  return (
   

    <div>
        
    <div className='DesktopDropDown '>
    <div className='  absolute w-[100%] h-[100svh] bg-white z-10 p-5 flex gap-2 border-t-2 border-slate-200 '>
        
    <ul className=' flex flex-col gap-2 text-lg'>

        {/* <li className=' font-bold'><h3>{props.children.title}</h3></li>*/}
        {links.map((data)=><li>{data}</li>)}
        
        
        
       
        
    </ul>
    </div>
    </div>
    </div>
  )
}

import React from 'react'
import eyes from '../../assets/eyes_collection.png'
import complexion from '../../assets/foundation_collection.webp'
import brushes from '../../assets/brushes_collection_2.png'
import lips from '../../assets/gloss_collection.png'
import brow from '../../assets/brow_collection.png'


export default function CategoriesDesktop() {
  return (
    <div className='hidden lg:flex   w-[150%] overflow-y-hidden whitespace-nowrap pb-[6em]'>
    <div className=' flex flex-row flex-nowrap whitespace-nowrap max-h-[600px] object-fill'>
        <div className='   flex flex-col relative '><img src={eyes}className=' object-fill w-[600px] h-[600px] '  />
        <span className=' absolute top-4 left-4 font-extrabold text-4xl text-white '>EYES</span></div>
        <div className='   flex flex-col relative'><img src={complexion} className=' object-fill w-[600px] h-[600px] '   /><span className=' absolute top-4 left-4 font-extrabold text-4xl text-white '>COMPLEXION</span></div>
        <div className='   flex flex-col relative'><img src={brushes} className=' object-fill w-[600px] h-[600px] '   /><span className=' absolute top-4 left-4 font-extrabold text-4xl text-white '>BRUSHES</span></div>
        <div className='   flex flex-col relative'><img src={lips} className=' object-fill w-[600px] h-[600px] '  /><span className=' absolute top-4 left-4 font-extrabold text-4xl text-white '>LIPS</span></div>
        <div className='     flex flex-col relative'><img src={brow} className=' object-fill w-[600px] h-[600px] '  /><span className=' absolute top-4 left-4 font-extrabold text-4xl text-white '>BROW</span></div>
     </div>
    </div>
    
  )
}

import React from 'react'
import eyes from '../../assets/eyes_collection.png'
import complexion from '../../assets/foundation_collection.webp'
import brushes from '../../assets/brushes_collection_2.png'
import lips from '../../assets/gloss_collection.png'
import brow from '../../assets/brow_collection.png'

export default function CategoriesMobile() {
    return (
        <div className=' lg:hidden   w-[300%] overflow-y-hidden whitespace-nowrap pb-[3em]'>
        <div className=' flex flex-row flex-nowrap whitespace-nowrap max-h-[600px] object-fill'>
            <div className='   flex flex-col relative '><img src={eyes}className=' object-fill w-[800px] h-[300px] md:w-[800px] md:h-[400px]'  />
            <span className=' absolute top-4 left-4 font-extrabold text-base text-white '>EYES</span></div>
            <div className='   flex flex-col relative'><img src={complexion} className=' object-fill w-[800px] h-[300px] md:w-[800px] md:h-[400px] '   /><span className=' absolute top-4 left-4 font-extrabold text-base text-white '>COMPLEXION</span></div>
            <div className='   flex flex-col relative'><img src={brushes} className=' object-fill w-[800px] h-[300px] md:w-[800px] md:h-[400px] '   /><span className=' absolute top-4 left-4 font-extrabold text-base text-white '>BRUSHES</span></div>
            <div className='   flex flex-col relative'><img src={lips} className=' object-fill w-[800px] h-[300px] md:w-[800px] md:h-[400px] '  /><span className=' absolute top-4 left-4 font-extrabold text-base text-white '>LIPS</span></div>
            <div className='     flex flex-col relative'><img src={brow} className=' object-fill w-[800px] h-[300px] md:w-[800px] md:h-[400px] '  /><span className=' absolute top-4 left-4 font-extrabold text-base text-white '>BROW</span></div>
         </div>
        </div>
        
      )
}

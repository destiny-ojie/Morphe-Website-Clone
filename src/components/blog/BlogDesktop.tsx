import React from 'react'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import { FaRegClock } from 'react-icons/fa'

export default function () {
  return (
    <div>
        <div className=' bg-[#ece8e5]  px-10 '>
        <div className=' flex  items-center py-[3em]'>  
        <div className=' flex flex-row justify-between  flex-nowrap gap-[3em]'>
            <div className=' flex '>
            <div className=' flex flex-col   gap-2 w-[25em]'>
                <div className=' 6xl font-extrabold text-[#74767c]'>LEARN MORE IN THE ARTISTRY DIARIES</div>
                <div>Tutorials, trends, and info behind our latest launches. This space is all for you.</div>
                <div className=' border border-[#74767c] py-2 px-5 w-fit font-extrabold text-[#74767c]'>READ NOW</div>
            </div>
            </div>
            <div className=' flex justify-center items-center'>
                <div className=' flex flex-col  '>
                <div className=''><img src={blog1} className=' h-[25em]' />
                <div className=' bg-white flex flex-col pl-6'>
                <div className=' py-4' >Behind The Collection: Rich & Foiled</div>
                <div>Posted on Apr 08, 2024</div>
                <div className=' flex flex-row flex-nowrap justify-start items-center gap-1'><FaRegClock/><span>4 min. read</span></div>
                   
                </div>
                </div>
                </div>
            </div>

             <div className=' flex justify-center items-center'>
                <div className=' flex flex-col  '>
                <div className=''><img src={blog2} className=' h-[25em]' />
                <div className=' bg-white flex flex-col pl-6'>
                <div className=' py-4' >Two Festival Makeup Looks With Meredith Duxbury</div>
                <div>Posted on Apr 08, 2024</div>
                <div className=' flex flex-row flex-nowrap justify-start items-center gap-1'><FaRegClock/><span>4 min. read</span></div>
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

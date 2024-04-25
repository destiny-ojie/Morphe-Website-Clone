import React from 'react'
import InsiderDesktop from './InsidersDesktop'
import InsiderMobile from './InsiderMobile'

export default function Insider() {
  return (
    <div>
        <div className=' hidden lg:flex'>
         <InsiderDesktop />
        </div>
        <div className=' lg:hidden'>
            <InsiderMobile/>
        </div>
    </div>
  )
}

import React from 'react'
import CategoriesDesktop from './CategoriesDesktop'
import CategoriesMobile from './CategoriesMobile'
import './Categories.css'

export default function CategoriesIndex() {
  return (
    <div className='mb-[2em]'>
        <div className='scroll relative w-[100%]  overflow-x-auto'><CategoriesDesktop/></div>
        <div className='scroll relative w-[100%]  overflow-x-auto'><CategoriesMobile /></div>
    </div>
  )
}

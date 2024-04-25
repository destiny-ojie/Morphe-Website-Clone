import { useState } from 'react'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Purchase from './components/purchase/purchase'
import ProductsHomePage from './components/products'
import CategoriesIndex from './components/categories/CategoriesIndex'
import HashAreaIndex from './components/HashArea/HashAreaIndex'
import Insider from './components/insiders/insider'
import BlogIndex from './components/blog/BlogIndex'
import SubscriptionIndex from './components/Subscription/SubscriptionIndex'
import './App.css'
import { title } from 'process'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' flex flex-col'>
   <Header />
   <Hero />
   <Purchase />
   <CategoriesIndex/>
   <ProductsHomePage shop={false} />
   <HashAreaIndex />
   <Insider />
   <BlogIndex/>
   <SubscriptionIndex />
  

   </div>
    </>
  )
}

export default App

import React from 'react'

export default function SubscriptionDesktop() {
  return (
    <div>
      <div className=' hidden lg:flex  mt-[5em] mb-[5em] mx-[2em] border border-[#74767c] py-16 px-5' >
        <div className=' flex  items-center'>
       <div className=' flex lg:flex-row lg:flex-nowrap flex-col   gap-[5em] pl-6 overflow-x-hidden'>
        <div className=' flex flex-col w-[30em] gap-2'>
          <div className=' 4xl font-extrabold'>NEWSLETTER</div>
          <div>Sign up for email updates to be the first to receive our gift guides, product spotlights, and special releases.</div>
        </div>
        <div className=' flex justify-center items-center pt-[3em]'>
        <div className=' flex flex-col gap-1'>
          <div className=' flex flex-row justify-between gap-[10em]'>
            <div>Email  address</div> <div className=' font-extrabold'>Submit</div>
          </div>
          <div className=' border border-b-[#74767c]'></div>
        </div>
        </div>
         <div className=' flex flex-col w-[30em] gap-2 mt-[2em]'>
          
          <div>By entering your email you agree to receive marketing communications from Morphe at the email address provided. View our Privacy Policy.

</div>
        </div>
        
        </div>
       </div>
      </div>
      </div>
  )
}

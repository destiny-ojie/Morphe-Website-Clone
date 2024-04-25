import React from 'react'
import SubscriptionDesktop from './SubscriptionDesktop'
import SubscriptionMobile from './SubscriptionMobile'

export default function SubscriptionIndex() {
  return (
    <div className=''>
        <div>
        <SubscriptionDesktop/>
        <SubscriptionMobile />
        </div>
  </div>
  )
}

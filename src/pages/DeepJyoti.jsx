import React from 'react'
import DeepJyoti1 from '../components/DeepJyoti/DeepJyoti1'
import DeepJyotiActivities from '../components/DeepJyoti/DeepJyotiActivities'
import OurInitiatives from '../components/Csr/OurInitiatives'
import BreadcrumbBanner from '../components/common/BreadcrumbBanner'

const DeepJyoti = () => {
  return (
   <main>
       <BreadcrumbBanner
        title="DeepJyoti"
      />
    <DeepJyoti1/>
    <DeepJyotiActivities/>
    <OurInitiatives/>
   </main>
  )
}

export default DeepJyoti

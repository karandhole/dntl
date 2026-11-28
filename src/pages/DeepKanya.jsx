import React from 'react'
import DeepKanya1 from '../components/DeepKanya/DeepKanya1'
import DeepKanyaActivities from '../components/DeepKanya/DeepKanyaActivities'
import OurInitiatives from '../components/Csr/OurInitiatives'
import BreadcrumbBanner from '../components/common/BreadcrumbBanner'
import DeepKanya2 from '../components/DeepKanya/DeepKanya2'

const DeepKanya = () => {
  return (
   <main>
     <BreadcrumbBanner
        title="DeepKanya"
      />
    <DeepKanya1/>
    <DeepKanyaActivities/>
    <DeepKanya2/>
    <OurInitiatives/>
   </main>
  )
}

export default DeepKanya

import React from 'react'
import DeepGyan1 from '../components/DeepGyan/DeepGyan1'
import DeepGyanActivities from '../components/DeepGyan/DeepGyanActivities'
import OurInitiatives from '../components/Csr/OurInitiatives'
import BreadcrumbBanner from '../components/common/BreadcrumbBanner'

const DeepGyan = () => {
  return (
   <main>
      <BreadcrumbBanner
        title="DeepGyan"
      />
    <DeepGyan1/>
    <DeepGyanActivities/>
    <OurInitiatives/>
   </main>
  )
}

export default DeepGyan

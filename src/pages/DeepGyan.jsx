import React from 'react'
import DeepGyan1 from '../components/DeepGyan/DeepGyan1'
import DeepGyanActivities from '../components/DeepGyan/DeepGyanActivities'
import OurInitiatives from '../components/Csr/OurInitiatives'
import BreadcrumbBanner from '../components/common/BreadcrumbBanner'
import DeepGyan2 from '../components/DeepGyan/DeepGyan2'

const DeepGyan = () => {
  return (
   <main>
      <BreadcrumbBanner
        title="DeepGyan"
      />
    <DeepGyan1/>
    <DeepGyanActivities/>
    <DeepGyan2/>
    <OurInitiatives/>
   </main>
  )
}

export default DeepGyan

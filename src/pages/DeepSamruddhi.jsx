import React from 'react'
import DeepSamruddhi1 from '../components/Csr/DeepSamruddhi/DeepSamruddhi1'
import KeyActivities from '../components/Csr/DeepSamruddhi/KeyActivities'
import OurInitiatives from '../components/Csr/OurInitiatives'
import WaterProjects from '../components/Csr/DeepSamruddhi/WaterProjects'
import WaterProjects1 from '../components/Csr/DeepSamruddhi/WaterProjects1'
import BreadcrumbBanner from '../components/common/BreadcrumbBanner'

const DeepSamruddhi = () => {
  return (
    <main>
          <BreadcrumbBanner
        title="DeepSamruddhi"
      />
        <DeepSamruddhi1/>
        <KeyActivities/>
         <WaterProjects/>
         <WaterProjects1/>
        <OurInitiatives/>
       
    </main>
  )
}

export default DeepSamruddhi

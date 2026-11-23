import React from 'react'
import CareersMain from '../components/Careers/CareersMain'
import BreadcrumbBanner from '../components/common/BreadcrumbBanner'

const Careers = () => {
  return (
    <main>
      <BreadcrumbBanner
        title="Careers"
      />
        <CareersMain/>
    </main>
  )
}

export default Careers

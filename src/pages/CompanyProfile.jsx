import React from 'react'
import CompanyProfile1 from '../components/CompanyProfile/CompanyProfile1'
import BreadcrumbBanner from '../components/common/BreadcrumbBanner'

const CompanyProfile = () => {
  return (
    <main>
      <BreadcrumbBanner
        title="Company Profile"
      />
        <CompanyProfile1/>
    </main>
  )
}

export default CompanyProfile

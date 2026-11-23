import React from 'react'
import ApplicationsPage from '../components/Applications/ApplicationsPage'
import BreadcrumbBanner from '../components/common/BreadcrumbBanner'

const Applications = () => {
  return (
    <main>
      <BreadcrumbBanner
        title="Applications"
      />
      <ApplicationsPage />
    </main>
  )
}

export default Applications

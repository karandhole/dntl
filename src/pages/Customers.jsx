import React from 'react'
import Customers1 from '../components/Customers/Customers1'
import BreadcrumbBanner from '../components/common/BreadcrumbBanner'

const Customers = () => {
  return (
    <main>
       <BreadcrumbBanner
        title="Customers"
      />
        <Customers1/>
    </main>
  )
}

export default Customers

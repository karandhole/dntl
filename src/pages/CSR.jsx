import React from 'react'
import CsrSection from '../components/Csr/CsrSection'
import CoreInitiatives from '../components/Csr/CoreInitiatives'
import CSRImpact from '../components/Csr/CSRImpact'
import FocusAreas from '../components/Csr/FocusAreas'

const CSR = () => {
  return (
    <main>
        <CsrSection/>
        <CoreInitiatives/>
        <CSRImpact/>
        <FocusAreas/>
    </main>
  )
}

export default CSR

import React from 'react'
import CsrSection from '../components/Csr/CsrSection'
import CoreInitiatives from '../components/Csr/CoreInitiatives'
import CSRImpact from '../components/Csr/CSRImpact'
import FocusAreas from '../components/Csr/FocusAreas'
import Acknowledgments from '../components/Csr/Acknowledgments'

const CSR = () => {
  return (
    <main>
        <CsrSection/>
        <CoreInitiatives/>
        <CSRImpact/>
        <FocusAreas/>
        <Acknowledgments/>
    </main>
  )
}

export default CSR

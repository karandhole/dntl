import React from 'react'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import BreadcrumbBanner from '../components/common/BreadcrumbBanner';

const ProductPage = () => {
  return (
   <main>
       <BreadcrumbBanner
        title="Product Details"
      />
    <ProductDetails/>
   </main>
  )
}

export default ProductPage;

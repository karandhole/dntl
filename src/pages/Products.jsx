import React from 'react'
import ProductPage from '../components/Prducts/ProductPage';
import BreadcrumbBanner from '../components/common/BreadcrumbBanner';

const Products = () => {
  return (
    <main>
      <BreadcrumbBanner
        title="Products"
      />
      <ProductPage />
    </main>
  )
}

export default Products;

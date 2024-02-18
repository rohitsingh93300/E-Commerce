import React from 'react'
import { useProductContext } from './Context/ProductContext'
import Product from './Product';

const FeatureProduct = () => {
    const {isLoading, featureProducts} = useProductContext();
    if(isLoading){
        return <div>......Loading</div>
    }
  return (
    <div className='bg-slate-100 py-14 px-4 text-center' >
      <div className="container  m-auto">
        <h3 className='text-xl'>Check Now</h3>
        <h1 className='text-3xl font-bold pb-6'>Our Feature Services</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {
           featureProducts.map((data)=>{
            return <Product key = {data.id} {...data}/>;
           })
          }
        </div>
      </div>
    </div>
  )
}

export default FeatureProduct;

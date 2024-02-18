import React from 'react'
import FilterSection from './FilterSection'
import ProductList from './ProductList'
import Sort from './Sort'


const AllProducts = () => {
    
   
  return (
    <div className='container  m-auto w-screen'>
    <div className='grid sm:grid-cols-[20%_80%] grid-cols-1'>
      <div className='hidden sm:block'>
        <FilterSection/>
      </div>
      <section className='w-screen sm:w-auto'>
      <div >
      <Sort/>
      </div>
      <div >
      <ProductList/>
      </div>
      </section>
    </div>
    </div>
  )
}

export default AllProducts

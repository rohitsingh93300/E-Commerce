import React, { useState } from 'react'
import FilterSection from './FilterSection'
import ProductList from './ProductList'
import Sort from './Sort'
import MobileFilter from './MobileFilter'


const AllProducts = () => {
  // const [showFilter, setShowFilter] = useState(false)

  // const toggleFilter = () => {
  //   setShowFilter(!showFilter);
  // };
    
   
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
      {/* <div className='sm:hidden'>
        <MobileFilter showFilter={showFilter}/>
      </div> */}
      <div >
      <ProductList/>
      </div>
      </section>
    </div>
    </div>
  )
}

export default AllProducts

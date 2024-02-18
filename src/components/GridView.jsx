import React from 'react'
import Product from './Product'

const GridView = ({products}) => {
  return (
    <div className='p-7'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {
            products.map((data)=>{
                return (
                    <Product key={data.id} {...data}/>
                )
            })
        }
      </div>
    </div>
  )
}

export default GridView

import React from 'react'
import FormatPrice from './Helpers/FormatPrice'
import Star from './Star'
import AddToCart from './AddToCart'


const ProductInfo = (props) => {
    const {price, stock, company, namez, description, stars, reviews, singleProduct} = props
  return (
    <div className='space-y-2  md:pr-[100px] sm:pr-[100px] px-7 '>
      <p>{company}</p>
      <h1 className='font-bold text-3xl' >{namez}</h1>
      <Star stars={stars} reviews={reviews}/>
      
      <p>MRP :  
        <del>
            <FormatPrice price={price+250000}/>
        </del>
      </p>
      <p className='font-semibold'>Deal of the day <span className='text-red-500'><FormatPrice price= {price}/></span></p>
      <p>{description}</p>
      <hr />
      <div>
        <p>Available: <span className='font-semibold'>{stock>0? "In Stock": "Not Available"}</span></p>
      </div>
      {
        stock>0 && <AddToCart product={singleProduct}/>
      }
    </div>
  )
}

export default ProductInfo

import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from './Helpers/FormatPrice';


const Product = (data) => {
    const{id, name, image, price, category} = data;
  return (
    <NavLink to={`/singleproduct/${id}`}>
     <div className="card">
        <figure className='relative'>
            <img src={image} alt="" className='rounded-lg' />
            <figcaption className='caption px-3 bg-green-300 my-2 rounded-lg inline-block absolute top-1 text-gray-800 right-2'>{category}</figcaption>
        </figure>
        <div className="card-data">
            <div className="card-data flex justify-between px-3">
                <h3>{name}</h3>
                <p className='card-data-price'>
                    {<FormatPrice price={price}/>}
                </p>
            </div>
        </div>
     </div>
    </NavLink>
  )
}

export default Product

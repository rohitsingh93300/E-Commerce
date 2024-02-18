import React from 'react'
import FormatPrice from './Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

const ListView = ({products}) => {
  return (
    <div className='p-14 space-y-5 '>
    {
        products.map((data)=>{
            const {id, name, image, price, description} = data;
            return(
                <div className='grid grid-cols-2 border-gray-200 border-2 place-items-center py-7 pr-7 hover:scale-105 transition-all duration-500 hover:shadow-md shadow-gray-300'>
                    <NavLink to={`/singleproduct/${id}`}>
                  <figure>
                    <img src={image} alt={name} className='h-[200px] w-[330px] rounded-md' />
                  </figure>
                  </NavLink>

                  <div className='space-y-2'>
                    <h3 className='text-bold text-3xl'>{name}</h3>
                    <p className='text-red-500'><FormatPrice price={price}/></p>
                    <p className='pb-4'>{description.slice(0,99)}...</p>
                    <NavLink to={`/singleproduct/${id}`}>
                        <button className='text-green-500 border border-green-500 px-3 py-2 rounded-md hover:text-white hover:bg-green-500 transition-all duration-300'>Read More</button>
                    </NavLink>
                  </div>
                </div>
            )
        })
    }
      
    </div>
  )
}

export default ListView

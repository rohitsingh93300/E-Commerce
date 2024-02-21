import React from 'react'
import FormatPrice from './Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

const ListView = ({products}) => {
  return (
    <div className='lg:p-14 p-3 lg:space-y-5 space-y-2'>
    {
        products.map((data)=>{
            const {id, name, image, price, description} = data;
            return(
                <div className='grid grid-cols-2 border-gray-200 border-2 w-auto place-items-center lg:py-7 lg:pr-7 hover:shadow-md shadow-gray-300'>
                    <NavLink to={`/singleproduct/${id}`}>
                  <figure>
                    <img src={image} alt={name} className='lg:h-[200px] lg:w-[330px] h-[100px] w-[150px] rounded-md' />
                  </figure>
                  </NavLink>

                  <div className='lg:space-y-2 space-y-1'>
                    <h3 className='text-bold lg:text-3xl text-xl'>{name}</h3>
                    <p className='text-red-500'><FormatPrice price={price}/></p>
                    <p className='lg:pb-4 lg:hidden'>{description.slice(0,19)}...</p>
                    <p className='pb-4 hidden lg:block'>{description.slice(0,99)}...</p>
                    <NavLink to={`/singleproduct/${id}`}>
                        <button className='text-green-500 border border-green-500 lg:px-3 lg:py-2 text-sm px-2 py-1 rounded-md hover:text-white hover:bg-green-500 transition-all duration-300'>Read More</button>
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

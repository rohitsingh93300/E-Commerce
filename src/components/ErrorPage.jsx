import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex justify-center'>

    <div className='container flex justify-center items-center h-[300px]'>
        <div className='text-center space-y-3'>
            <h2 className='font-bold text-5xl'>404</h2>
            <h3 className='font-semibold text-2xl'>Error mt kr lawdu!</h3>
            <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, tenetur odio facilis quod ducimus delectus.</p>
            <NavLink to="/">
                <button className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg'>Go Back</button>
            </NavLink>
        </div>
      
    </div>
    </div>
  )
}

export default ErrorPage

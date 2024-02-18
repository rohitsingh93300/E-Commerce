import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <div className='bg-slate-100 py-3 px-3'>
        <NavLink to="/">HOME</NavLink>/{title}

    </div>
  )
}

export default PageNavigation

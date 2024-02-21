import React, { useState } from 'react'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from './Context/Filter_context';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import MobileFilter from './MobileFilter';


const Sort = () => {
  const [showFilter, setShowFilter] = useState(false)
    const {filter_products, grid_view, setGridView, setListView, sorting} = useFilterContext();
   
     const toggleFilter = () =>  {
      setShowFilter(!showFilter)
    };
    console.log(showFilter);
    
  return (
    <div>
      <div className='flex justify-between lg:px-14 lg:pt-5  sm:px-2 pt-2 px-4'>
        <div className='gap-3 flex'>
            <button 
            onClick={setGridView}
            className={!grid_view?"bg-gray-200 p-1":"bg-black text-white p-1"}>
                <BsFillGridFill className='h-5 w-5 '/>
            </button>
            <button  
            onClick={setListView}
            className={grid_view?"bg-gray-200 p-1":"bg-black text-white p-1"}>
                <BsList className='h-5 w-5 '/>
            </button>
        </div>
        <div className='hidden sm:block'>
            <p>{`${filter_products.length} products available`}</p>
        </div>
        <div className='lg:hidden '>
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" className='px-2 border-2 border-gray-800 w-[100px]' onClick={sorting}>
              <option value="lowest">Price(lowest)</option>
              
              <option value="highest">Price(highest)</option>
              
              <option value="a-z">Price(A-Z)</option>
              
              <option value="z-a">Price(Z-A)</option>
            </select>
          </form>
        </div>
        <div className='hidden lg:block'>
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" className='px-2 border-2 border-gray-800' onClick={sorting}>
              <option value="lowest">Price(lowest)</option>
              <option value="#" disabled></option>
              <option value="highest">Price(highest)</option>
              <option value="#" disabled></option>
              <option value="a-z">Price(A-Z)</option>
              <option value="#" disabled></option>
              <option value="z-a">Price(Z-A)</option>
            </select>
          </form>
        </div>
        <div 
        onClick={toggleFilter}
        className='flex items-center border-2 border-gray-700 px-2  gap-1 sm:hidden'>
        <FaArrowRightArrowLeft/> 
        <p>Filters</p>
        </div>
        

      </div>
      <div className={`${
        showFilter ? "-left-0" : "-left-[100%]"
      } fixed z-20 top-0 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md sm:hidden`}>
        <MobileFilter showFilter={showFilter}/>
      </div>
    </div>
  )
}

export default Sort

import React from 'react'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from './Context/Filter_context';


const Sort = () => {
    const {filter_products, grid_view, setGridView, setListView, sorting} = useFilterContext();
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
        <div>
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
      </div>
    </div>
  )
}

export default Sort

import React from 'react'
import { useFilterContext } from './Context/Filter_context'
import { FaCheck } from 'react-icons/fa';
import FormatPrice from './Helpers/FormatPrice';

const MobileFilter = (showFilter) => {
  const {filters:{text, color, maxPrice, price, minPrice}, updateFilterValue, all_products, clearFilterValue} = useFilterContext();
//   console.log(showFilter);
  // to get the unique data of each field
  const getUniqueData = (data, property)=>{
    let newVal = data.map((curElem)=>{
      return curElem[property];
    })
    if (property==="colors"){
      // return (newVal= ["All",...new Set([].concat(...newVal))])
      newVal = newVal.flat();
    }

      return (newVal = ["All",...new Set(newVal)])
    
  }

  // we need to have the individual data of each in an array format 
  const categoryData = getUniqueData(all_products, "category" );
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
 
 
  return ( 
    <div >
    <div >
      <form onSubmit={(e)=> e.preventDefault()} className='lg:p-5 p-2'>
        <input type="text" name='text' value={text} placeholder='Search' onChange={updateFilterValue} 
        className='border-2 border-gray-700 pl-2 lg:w-[140px] w-[120px]'/>
      </form>
    </div>
    <div className='lg:px-5 px-2 '>
      <h3 className='text-semibold text-xl pb-2'>Category</h3>
      <div className='flex flex-col items-start gap-2 space-y-1 '>
        {
          categoryData.map((curElem, index)=>{
            return <button
              key={index}
              type="button"
              name="category"
              value={curElem}
              onClick={updateFilterValue}
              className={({isActive})=>`border-b-2 ${isActive?"border-green-500":"border-transparent"}`}
            >
              {curElem}
            </button>
          })
        }
      </div>
    </div>
    <div className='lg:px-5 px-2 pt-4'>
      <h3 className='text-semibold text-xl pb-2'>Company</h3>
      <form action="#">
        <select name="company" id="company" onClick={updateFilterValue} className='border-2 border-gray-700'>
          {
            companyData.map((curElem, index)=>{
              return(
                <option key={index}value={curElem} name="company">{curElem}</option>
              )
            })
          }
        </select>
      </form>
    </div>
    <div className='lg:px-5 px-2 pt-4'>
      <h3 className='text-semibold text-xl pb-2'>Colors</h3>
      <div className='flex gap-2 items-center'>
        {colorsData.map((curColor, index)=>{
          if(curColor==="All"){
            return <button 
            key={index}
            value={curColor}
            name='color'
            // style={{backgroundColor: curColor}}
            // className="rounded-full w-5 h-5 opacity-70"
            onClick={updateFilterValue}
            type='button'>
             All
             </button>
          }
           return <button 
           key={index}
           value={curColor}
           name='color'
           style={{backgroundColor: curColor}}
           className={`rounded-full lg:w-5 lg:h-5 w-4 h-4 ${color===curColor? "opacity-100": "opacity-70"}`}
           onClick={updateFilterValue}
           type='button'>
            {color===curColor? <FaCheck className='text-white text-center m-auto'/> : null}
            </button>
        })}
      </div>
    </div>
    <div className='lg:px-5 px-2 pt-4'>
      <h3 className='text-semibold text-xl pb-2'>Price</h3>
      <p><FormatPrice price={price}/></p>
      <input className='cursor-pointer lg:w-[140px] w-[100px]'
      name='price'
      type="range" 
      min={minPrice} 
      max={maxPrice} 
      value={price} 
      onChange={updateFilterValue} />
    </div>
    <div className='lg:px-5 px-2 pt-4'>
      <button onClick={clearFilterValue} className='px-3 py-1 bg-orange-500 text-white rounded-sm'>Clear Filter</button>
    </div>
    </div>
   
  )
}

export default MobileFilter



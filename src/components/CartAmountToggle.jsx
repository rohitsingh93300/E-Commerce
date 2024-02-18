import React from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const CartAmountToggle = ({amount, setDecrease, setIncrease}) => {
  return (
    <div >
      <div className='flex gap-4'>
        <button onClick={()=>setDecrease()}>
            <FaMinus/>
        </button>
        <p className='border-2 border-gray-500 px-3 py-1'>{amount}</p>
        <button onClick={()=>setIncrease()}>
            <FaPlus/>
        </button>
      </div>
    </div>
  )
}

export default CartAmountToggle

import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from './Context/cart_context';


const AddToCart = ({product}) => {
  const {addToCart} = useCartContext()
    const{id, colors, stock} = product;
    const [color, SetColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = ()=>{
        amount >1? setAmount(amount-1):setAmount(1);
    }

    const setIncrease =()=>{
        amount<stock ? setAmount(amount +1): setAmount(stock);
    }
  return (
    <div className='space-y-2'>   
    <div className='pb-2'>
      <p className='flex items-center'>
        Colors:
        {
            colors.map((curColor, index)=>{
                return <button 
                onClick={()=>SetColor(curColor)}
                style={{backgroundColor: curColor}}
                className='rounded-full w-7 h-7 opacity-70 ml-2'
                key={index}>
                    {color===curColor? <FaCheck className='m-auto text-white object-cover'/>: null}
                </button>
            })
        }
      </p>
    </div>
    
    <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
    <NavLink to="/cart" onClick={()=>addToCart(id, color, amount, product)}>
        <button className='bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-md mt-3'>Add To Cart</button>
    </NavLink>
    </div>
  )
}

export default AddToCart

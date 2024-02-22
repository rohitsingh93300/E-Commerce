import React from 'react'
import { useCartContext } from './Context/cart_context'
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import empty_cart from "../assets/empty_cart.png"
import FormatPrice from './Helpers/FormatPrice';

const Cart = () => {
    const {cart, clearCart, total_amount, shipping_fee} = useCartContext();
   if (cart.length==0){
    return <div className='grid place-items-center '>
    <img src={empty_cart} alt="" className='lg:w-[400px] w-[300px]' />
    <h1 className='text-green-500 lg:text-4xl text-3xl font-bold'>Oops! Cart is empty...</h1>
    <NavLink to = "/product">
        <button className='px-4 py-2 text-white bg-green-500 rounded-md mt-5'>Shop Now</button>
    </NavLink>
    </div>
   }
  return (
    <div className='container m-auto relative '>
      <div className='grid sm:grid-cols-5 grid-cols-3 place-items-center p-3'>
        <p>Item</p>
        <p className='hidden sm:block'>Price</p>
        <p>Quantity</p>
        <p className='hidden sm:block'>Subtotal</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {
            cart.map((curElem)=>{
               return <CartItem key = {curElem.id} {...curElem}/>
            })
        }
      </div>
      <div className='flex justify-between mt-5 lg:px-20 px-4'>
        <NavLink to = "/product">
            <button className='bg-green-500 hover:bg-green-400 px-3 py-2 text-white rounded-md font-semibold'>Continue Shopping</button>
        </NavLink>
        <button 
        onClick={clearCart}
        className='bg-red-500 hover:bg-red-400 px-3 py-2 text-white rounded-md font-semibold' >
            Clear Cart
        </button>
      </div>
      {/* order total amount */}
      <div className=' flex sm:justify-end justify-center '>
        <div className='bg-gray-100 mt-7  sm:w-[300px] w-[300px] rounded-md ' >
          <div className='flex justify-between px-4  pt-5'>
            <p>Subtotal :</p>
            <p  className='font-semibold'><FormatPrice price={total_amount}/></p>
          </div>
          <div className='flex justify-between px-4 py-5'>
            <p>Shipping Fee :</p>
            <p className='font-semibold'><FormatPrice price={shipping_fee}/></p>
          </div>
          <hr className='bg-green-500 w-[250px] pb-1 mb-5 m-auto font-bold rounded-full' />
          <div className='flex justify-between px-4 pb-5'>
            <p>Order Total :</p>
            <p className='font-semibold'><FormatPrice price={shipping_fee+total_amount}/></p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart

import React from 'react'
import FormatPrice from './Helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from './Context/cart_context'

const CartItem = ({ id, name, image, color, price, amount }) => {
    const {removeItem} = useCartContext();
    const setDecrease = ()=>{
        // amount >1? setAmount(amount-1):setAmount(1);
    }

    const setIncrease =()=>{
        // amount<stock ? setAmount(amount +1): setAmount(stock);
    }
    return (
        <>
        <div className='grid sm:grid-cols-5 grid-cols-3 place-items-center pt-5'>
            <div className='grid sm:grid-cols-2 place-items-center'>
                <div className='w-[50px]'>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div className=''>
                    <p>{name}</p>
                    <div className='flex items-center gap-1'>
                        <p>Color :</p>
                        <div style={{ backgroundColor: color, color: color }} className='w-4 h-4 rounded-full'></div>

                    </div>
                </div>
            </div>
            {/* price */}
            <div className='hidden sm:block'>
                <p><FormatPrice price={price} /></p>
            </div>
            {/* quantity */}
            <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
            {/* subtotal */}
            <div className='hidden sm:block'>
                <p><FormatPrice price={price*amount}/></p>
            </div>
            <div>
                <FaTrash className='text-red-500' onClick={()=>removeItem(id)}/>
            </div>
        </div>
        <hr className='mt-5'/>
        </>
    )
}

export default CartItem

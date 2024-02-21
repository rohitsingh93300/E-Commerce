import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer"
import { json } from "react-router-dom";

const CartContext = createContext();
const getLocalCartData = () => {
    let localCartData = localStorage.getItem("rohitCart");
    if (localCartData == []) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
}
const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // add to cart feature
    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } })
    }
    // remove items from cart
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }
    //to clear the cart
    const clearCart = ()=>{
        dispatch({type:"CLEAR_CART"})
    }
    // add data in local storage
    useEffect(() => {
        localStorage.setItem("rohitCart", JSON.stringify(state.cart))
    }, [state.cart])
    return <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart }}>
        {children}
    </CartContext.Provider>
};
const useCartContext = () => {
    return useContext(CartContext);
}
export { CartProvider, useCartContext }
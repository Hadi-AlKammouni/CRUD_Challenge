import React, { useState } from "react";

export const CartContext = React.createContext();

const CartProvider = ({children}) => {
    
    const [cartItems, setCartItems] = useState([])
    const [billTotal, setBillTotal] = useState(0)

    return (
        <CartContext.Provider 
        value={{cartItems, setCartItems, billTotal, setBillTotal}}>

            {children}

        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => {
    const {cartItems, setCartItems, billTotal, setBillTotal} = React.useContext(CartContext)

    return {
        cartItems, setCartItems, billTotal, setBillTotal
    }
}
// only this is made as .js extension
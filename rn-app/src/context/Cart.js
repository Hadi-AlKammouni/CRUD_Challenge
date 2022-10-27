import React, { useState } from "react";

export const CartContext = React.createContext();

const CartProvider = ({children}) => {
    
    const [cartItems, setCartItems] = useState([])

    return (
        <CartContext.Provider 
        value={{cartItems, setCartItems}}>

            {children}

        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => {
    const {cartItems, setCartItems} = React.useContext(CartContext)

    return {
        cartItems, setCartItems
    }
}
// only this is made as .js extension
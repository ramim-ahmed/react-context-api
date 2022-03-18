import { createContext, useState } from "react";


const CartContext = createContext();

export const CartContextProvider = ({children}) => {
  
    const [cart, setCart] = useState([]);

    const addToCart = (title, price) => {
        setCart( (prevState) => [...prevState, {title, price}])
    }
  return (
    <CartContext.Provider value={{cart, addToCart}}>
        {children}
    </CartContext.Provider>
  )
}



export default CartContext;
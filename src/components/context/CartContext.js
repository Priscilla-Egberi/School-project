
import React, {useState} from "react";


const CartContext = React.createContext()


export function CartProvider({children}) {
    const [items, setItems] = useState([])

    const AddItems =(name, amount)=>{
        setItems((prevState)=>[...prevState, {name, amount}])
    }
  
    return (
      <CartContext.Provider value={{items, AddItems}}>
        {children}
      </CartContext.Provider>
  )
}

export default CartContext


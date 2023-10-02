
import React, {useState} from "react";


const CartContext = React.createContext()


export function CartProvider({children}) {
    const [items, setItems] = useState([])

    const AddItems =(name, amount, id)=>{
        setItems((prevState)=>[...prevState, {name, amount, id}])
    }
  
    return (
      <CartContext.Provider value={{items, AddItems}}>
        {children}
      </CartContext.Provider>
  )
}

export default CartContext


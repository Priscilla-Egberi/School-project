
import React, {useState} from "react";


const CartContext = React.createContext()


export function CartProvider({children}) {
    const [items, setItems] = useState([])

    const AddItems =(name, condition, amount, detail, id)=>{
        setItems((prevState)=>[...prevState, {name, condition, amount, detail, id}])
    }
  
    return (
      <CartContext.Provider value={{items, AddItems}}>
        {children}
      </CartContext.Provider>
  )
}

export default CartContext


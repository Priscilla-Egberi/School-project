import { useContext } from "react"
import CartContext from "./context/CartContext"
export default function Cart(){
    const {items} = useContext(CartContext)
    return(
        <>
        <div>Cart {items.length}</div>
        </>
    )
}
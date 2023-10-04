import { useContext } from "react"
import CartContext from "../context/CartContext"
import Cards from "./CardCart"
export default function Cart(){
    const {items} = useContext(CartContext)
    
    return(
        <><div className="mt-5 mx-3 md:mx-20 grid grid-cols-1 md:grid-cols-4 gap-4 ">
        {items.map((item) => (
          
          <div key={item.id}>
          <Cards link={`/home/goods/${item.id}`} name={item.name} amount={item.amount} detail={item.detail} condition={item.condition} className="col-span-1" />
        </div>
        
        ))}
        </div>
        </>
    )
}
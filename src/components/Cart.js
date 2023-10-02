import { useContext } from "react"
import CartContext from "./context/CartContext"
import Cards from "./Cards"
export default function Cart(){
    const {items} = useContext(CartContext)
    
    return(
        <>
        {items.map((item) => (
          <div key={item.id}>
          <Cards link={`/goods/${item.id}`} name={item.name} amount={item.amount} className="col-span-1" />
          {/* <Cards link={`/goods/${item.id}`} name={item.name} condition={item.condition} amount={item.amount} detail={item.imgUrl[0]} className="col-span-1" /> */}
        </div>
        ))}
        </>
    )
}
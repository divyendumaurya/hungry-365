import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../Utils/cartSlice";

const Cart = ()=>{
const cartItems = useSelector((store)=> store.cart.items )

const dispatch = useDispatch();

const handleClearCart = () =>{
    dispatch(clearCart());

}
    return(
    <div>
        <h1 className="font-bold text-3xl">Cart items -{cartItems.length} </h1>
        <button 
        onClick={()=> handleClearCart()}
         className="bg-red-400 m-2 p-2">Empty the cart</button> 
       <div className="flex ">{cartItems?.map((item) =>(<FoodItem key={item?.card?.info.id} {...item?.card?.info}/> ))}
        </div> 
        
    </div>)
}

export default Cart;
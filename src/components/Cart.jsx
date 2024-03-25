import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import Ordered from "./Ordered";
import { clearCart } from "../utils/cartSlice";
import { orderItem } from "../utils/cartSlice";

const Cart=()=>{
      

    const cart=useSelector((store)=>store.cart)
    const cartItems=cart.items;
  const dispatch=useDispatch();

  const clearCartHandler=()=>{
    dispatch(clearCart())
  }

  const orderItemsHandler=()=>{
    dispatch(orderItem())
    console.log(cart.ordered);
  }


var tolatCost=0;
    cartItems.map(item=>{tolatCost+=item.info.price?item.info.price/100:item.info.defaultPrice/100})
// console.log(tolatCost);
    return(<div className="mx-auto">
        {cart.ordered ?<Ordered/>:(cartItems.length===0? <EmptyCart/>:cartItems.map(item=><CartItem key={1} item={item} />))}
        { tolatCost!=0 && <div className="flex font-bold text-lg w-2/3 m-auto bg-slate-200 items-center p-4 sticky bottom-0">
            <div className="m-auto flex justify-between "><span className="mr-28">Total =</span> 
            <span className=" mx-8 text-blue-600   ">
                 Rs. { tolatCost}</span>
        <button onClick={clearCartHandler} className="text-white bg-red-400 rounded-lg px-4 py-1 mx-8 hover:bg-red-500" >Clear Cart</button>
        <button onClick={orderItemsHandler} className=" text-white bg-green-400 rounded-lg px-4 py-1 mx-8 hover:bg-green-500">Order</button>
        </div></div>}
       
    </div>)
}
export default Cart;
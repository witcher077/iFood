import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import cart_Img_CDN from "../utils/constants";
import { removeItem } from '../utils/cartSlice';
// import addsameItemMultiple from '../utils/cartSlice';
// import subsameItemMultiple from '../utils/cartSlice';
const CartItem = ({ item}) => {


     const dispatch =useDispatch()
 const removeItemFromCart=(id)=>{
    dispatch(removeItem(id))
 }

    const [count, setCount] = useState(1)

    const countHanler = () => { 
        setCount(count + 1)
        // dispatch(addsameItemMultiple( id))
        // console.log(id)
     

    }
    const countHanler2 = () => {
        if (count > 1)

            setCount(count - 1)
            // dispatch(subsameItemMultiple(id))
            
    }


    const img = () => {

        if (item?.info?.imageId) {
            return item?.info?.imageId;
        }
        else {
            return item?.itemCards[0]?.card.info?.imageId;
        }

    }
    var imageurl = img()

    return (
        <div className='flex mx-auto w-2/3'>
        <div className='  font-bold justify-evenly flex mb-6'>  
        <div ><h1 className='mb-3'>{item.info.name}</h1>
            <img className='rounded-lg ' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100/" + imageurl}>
            </img>
        </div>
            <div className='font-bold m-2 mt-14'>
                <button onClick={()=>countHanler(item)} className='bg-gray-500 rounded-sm px-3'>+</button><span className='w-20 mx-2'>{count}</span><button onClick={()=>countHanler2(item)} className='bg-gray-500 rounded-sm px-3'>-</button>
            </div>
            <h1 className='font-bold m-2 mt-14'>₹ {item.info.price? count*item.info.price/100:count*item.info.defaultPrice/100}</h1>
            <button className='text-red-600 bg-gray-200 w-20 h-10 rounded-sm ml-4 mt-12 hover:bg-gray-300'onClick={()=>removeItemFromCart(item.info.id)}>Remove</button>
        </div></div>
    )
}

export default CartItem;
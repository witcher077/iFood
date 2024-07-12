import React from 'react';
import { useDispatch } from 'react-redux';
import { Img_CDN } from '../utils/constants';
import { addItem } from '../utils/cartSlice';

const CatagoryItems = (props) => {
    

    const dispatch=useDispatch()

    const handleAddItems=(item)=>{
  dispatch(addItem(item));
//   console.log(item)
    }

    const img=()=>{
        if(props.item?.card?.info?.imageId){
            return props.item?.card?.info?.imageId;
            
        }
        else{
            return props.item?.itemCards[0]?.card.info?.imageId;
            
        }
    }
    var imageurl=img()

    
    const details=()=>{
        if(props.item?.card){
            return props.item?.card;
            
        }
        else if(props.item?.itemCards[0]?.card){
            return props.item?.itemCards[0]?.card;
            
        }
        else if(props.item?.dish){
            return props.item?.dish;
            
        }
    }
    var detail=details()

   
  return (
    <div className='flex justify-between mt-5 border-blue-100 border-b-2 pb-4'>
    <div className='w-3/5'>
        <h2 className='font-bold mb-4 text-blue-500 dark:text-white'>{detail?.info?.name+" - "+" Rs. "+detail?.info?.price/100}</h2>
        <p className=' text-gray-600 leading-5 text-sm dark:text-white'>{props?.item?.card?.info?.description}</p>
    </div>
    <div className='w-2/5    relative mt-10 pl-6 '>
        <img className='rounded-lg h-44 w-52  ' src={Img_CDN+imageurl} alt="img"/>
        <button onClick={()=>handleAddItems(detail)} className=' mx-auto px-2 left-0 right-0  bottom-0 bg-white w-16   h-8 absolute font-bold text-green-500 rounded-lg  hover:bg-slate-300'>Add</button>
    </div>
</div>
  )
}

export default CatagoryItems;
import React from 'react'
import { useState } from 'react';
import CatagoryItems from './CatagoryItems';

const ResCatogory = ({catogory,showItems,setExpandIndex}) => {
    // const props=catogory;
    // const [showItems,setShowItems]=useState(false)
    
    const filter = () => {

        if (catogory?.itemCards) {
            return  catogory?.itemCards;
        }
        else if (catogory?.categories){
            return catogory?.categories ;
        }
        else{
            return catogory?.carousel;
        }
    }

    const filteredItems=filter();

    const clickHandler=()=>{
        setExpandIndex();
    }
    // console.log(filteredItems);
    return (
        <div className='w-full border-slate-200 mb-3 border-b-8  py-8'>
            <div className='flex justify-between cursor-pointer select-none' onClick={clickHandler}>
                <h1 className=' font-bold text-lg text-slate-600'>{catogory.title} ({filteredItems.length})</h1>
                <span> {!showItems ? "▼" : "▲" } </span>
            </div>
            {    
            
             showItems && filteredItems?.map(item=><CatagoryItems key={item.bannerId} item={item} />)
            }
            
            
        </div>
    )
}

export default ResCatogory;
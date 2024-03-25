import React, { useEffect, useState } from 'react'
import GrocerySimmer from './SimmerUi/GrocerySimmer';

const Grocery = () => {

    const [products, setProducts] = useState([]);
     
  

    const fetchData = async () => {
        try {
            const data = await fetch('https://dummyjson.com/products');
            const jsonData = await data.json();
            const product = jsonData?.products;
            console.log(product);
            setProducts(product);

        }
        catch {
            console.log("got Error");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if(products.length===0){
        return<GrocerySimmer/>
    }
    
    return (
        <div>
            <ul className='flex  flex-wrap justify-evenly mt-5'>
                {
                   products && products.map((e,i) => { let image=e.thumbnail; return(<li key={i} className=" w-[300px] mb-4 cursor-pointer"><h4 className='text-xl text-blue-700 mb-4 font-bold'>{e.title}</h4>
                   <div className='itemImage w-[300px] h-52 rounded-md bg-center' onMouseOver={()=>{
                    // let ind=0;
                    // setInterval(()=>{
                    //     if(ind===e.images.length-1)
                    //     ind=0;
                    //     image=e.images[ind];
                    //     console.log(e.images[ind]);
                    //     if(ind<(e.images.length-1))
                    //        ind++;
                    // },2000)
                   }} style={{backgroundImage:`url(${image})`}}><div  className='bottom'></div></div>
                   <p className='italic text-slate-700 hover:text-blue-900' >{e.description}</p></li>)})
                }
            </ul>
        </div>
    )
}

export default Grocery;
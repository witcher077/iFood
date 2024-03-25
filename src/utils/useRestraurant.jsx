import React, { useEffect,useState } from 'react'

const useRestraurant = (resId) => {
    const [resdetail,setResDetail]=useState([])

    
   useEffect(()=>{
    fetchresDetails();
   },[])

  

   
   async function fetchresDetails(){
       try{
       
           const res=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId.reId);

           if(!res.ok){
            const err= res.status;
            throw new console.error(err);
           }
           else{
               const json = await res.json();
               setResDetail(json.data.cards);
               
           }
           
       }
       catch(error){
           console.error(error);
       }
   }

   

//    const allCards=(cards)=>{
       
//        for(let i=0;i<cards.length;i++){
//            let checkList=cards[i]?.card?.card?.itemCards;
//            if(checkList !== undefined){
              
//                return checkList;
               
//            }
        
//        }
           
       
//    }
// console.log(resdetail[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
//   let resInfo=allCards(resdetail[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)



  return resdetail[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
}

export default useRestraurant;
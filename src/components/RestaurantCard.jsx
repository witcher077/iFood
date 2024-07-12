import {useEffect,useContext} from "react";
import ThemeContext from "../Context/themeContext";

const RestraurantCard=(props)=>{
 

  // const[addedInCart,setaddedInCart]=useState([]);
  
    const {details}=props;
    const resName=details.name;
    const cuisine=details.cuisines.map((el)=>el+", ");
    const rating=details.avgRating;
    const deliveryTime=details.sla.slaString;
    const imgUrl=details.cloudinaryImageId;
    const distance=details.sla.lastMileTravelString;
    const costforTwo=details.costForTwo;
    
    // console.log(addedInCart)
    const {theme}=useContext(ThemeContext);
    const element = document.documentElement;
    useEffect(() => {
  theme==="moon"?element.classList.add("dark"):element.classList.remove("dark");
    }, [theme])
    // return null

  return(<div className="res-container  hover:scale-105 transition-all duration-1000 grid h-full card">
  <div className="m-2 p-4 w-[230px] rounded-lg bg-slate-100 shadow-2xl dark:bg-gray-600">
  <img className="rounded-lg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/${imgUrl}`}></img>
  <h3 className=" font-bold text-lg dark:text-white text-blue-500">{resName}</h3>
  <p className=" text-[13px] italic dark:text-blue-200 text-blue-400">{cuisine}</p>
  <div className="flex justify-between my-4 font-bold"><h4>{rating} ⭐</h4><h4>{costforTwo}</h4></div>
  <div className="flex justify-between my-4 font-bold"><h4>{distance}</h4>
  <h4>🕧 {deliveryTime}</h4></div>
  {/* <h1 className="add" onClick={setaddedInCart(curr=>[...curr,props])}>+</h1> */}
  </div></div>)
   }
   function OpenedRes(RestraurantCard){
    return(props)=>{
      return(
        <div className="hover:scale-100 transition-all">
          <label className="absolute text-white bg-green-900 rounded-sm m-1 text-[10px] px-5">{"open"}</label>
          
          <RestraurantCard {...props}/>
        </div> 
      )
    }
   }
   export  {RestraurantCard,OpenedRes};
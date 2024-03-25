import {OpenedRes,RestraurantCard} from "./RestaurantCard";
import { listItems } from "../utils/constants";
import React, { useEffect, useState ,useContext} from "react";
import Shimmer from "./SimmerUi/simmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ThemeContext from "../Context/themeContext";

const Body = () => {

  let [AllRestaurants, setAllRestaurants] = useState([]);
  let [FilteredRestaurant, setFilteredRestaurant] = useState([]);
  let [searchText, setsearchText] = useState("");

  const {theme}=useContext(ThemeContext);
  const element = document.documentElement;
  useEffect(() => {
theme==="moon"?element.classList.add("dark"):element.classList.remove("dark");

  }, [theme])


  useEffect(() => {

    fetchData();
  }, []);


  async function fetchData() {


    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      // if response is not ok then throw new Error

      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      }
      else {
        const json = await response.json();
        // console.log(json?.data?.cards);

        // initialize checkJsonData() function to check Swiggy Restaurant data
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {

            // initialize checkData for Swiggy Restaurant data
            let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            // if checkData is not undefined then return it
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }

        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(json);


        // update the state variable restaurants with Swiggy API data
        setAllRestaurants(resData);
        setFilteredRestaurant(resData);
        // console.log(resData);

      }


    } catch (error) {
      console.error(error); // show error in console
    }
  }

  const isOnline = useOnlineStatus();


  if (!isOnline) {
    return <h1 className="onlineStatus">🔴 Offline, please check your internet connection</h1>;
  }

  if (AllRestaurants.length === 0) {

    return (<Shimmer />)

  }

  const ResWithPermotedLebal=OpenedRes(RestraurantCard);
  console.log(FilteredRestaurant)


  return (<div className="body m-0 pb-6 duration-1000  dark:bg-gray-800">

    <div className="filter flex justify-between ">
      <div className="search m-2 p-2">
        <input type="text" placeholder="Enter any text" onChange={(e) => {
          setsearchText(e.target.value)

        }} className="border-solid border-black border rounded-md p-1" value={searchText}  ></input>


        <button onClick={() => {
          let filterdList = AllRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

          setFilteredRestaurant(filterdList);


        }} className="m-2 ml-4 px-4 py-1 bg-green-400 rounded-lg hover:bg-green-600 transition-colors">Search</button>
      </div>
      <div className="search m-2 p-2">

        <button className="m-2 px-4 py-2 bg-blue-400 hover:bg-blue-600 rounded-lg " onClick={() => {

          let filteredList = AllRestaurants.filter((res) => res.info.avgRating > 4);
          // console.log(filteredList);
          setFilteredRestaurant(filteredList);
        }}>Top Rated res 🔝</button>
      </div>


    </div>
    <div className="res-container flex flex-wrap justify-between">
      {FilteredRestaurant?.map(restaurant => 
      <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id} >

        {
          
          restaurant.info.isOpen?<ResWithPermotedLebal details={restaurant.info}/>:<RestraurantCard details={restaurant.info} />
        }
        </Link>)}
    </div>
  </div>)
}


export default Body;
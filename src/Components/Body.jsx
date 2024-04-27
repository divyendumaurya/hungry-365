import React from 'react'
import { restaurantList } from "../Contants"
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnline from '../Utils/useOnline';




function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [allRestaurants , setAllRestaurants ] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

useEffect(()=>{
  getRestaurants()
}, []);


async function getRestaurants(){
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6145&lng=77.3063&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const json = await data.json();
// console.log(json);

setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilteredRestaurants (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 


// console.log(allRestaurants);
}

const isOnline =useOnline();
if(!isOnline){
  return <h1>No Internet Connection</h1>
}

// if (!allRestaurants) return null ;

// if(filteredRestaurants?.length ==0) return <h2>No Restaurant matches your search!</h2>;

  return allRestaurants?.length == 0  ?( <Shimmer/>) : (
    <>
      <div className="search-container p-5 bg-slate-100 my-3 shadow-md ">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn m-2 p-2 bg-purple-200 rounded-md hover:bg-purple-600"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link key={restaurant.info.id} to={"/restaurant/" +restaurant.info.id }> <RestaurantCard {...restaurant.info}  /></Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;


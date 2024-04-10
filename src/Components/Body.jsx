import React from 'react'
import { restaurantList } from "../Contants"
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";



function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filterData;
}

const Body = () => {
  const [restaurantss, setRestaurantss] = useState();
  const [searchText, setSearchText] = useState("");

useEffect(()=>{
  getRestaurants()
}, []);


async function getRestaurants(){
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6145&lng=77.3063&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const json = await data.json();
console.log(json);

setRestaurantss(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
console.log(restaurantss);
}


  return (
    <>
      <div className="search-container">
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
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, restaurantss);
            // update the state - restaurants
            setRestaurantss(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurantss?.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;


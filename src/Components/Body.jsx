import React from 'react'
import { restaurantList } from "../Contants"
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect , useContext} from "react";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnline from '../Utils/useOnline';
import UserContext from '../Utils/UserContext';
import { IoMdSearch } from "react-icons/io";
import Swiper from './Swiper'





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
  const {user, setUser} =  useContext(UserContext);

useEffect(()=>{
  getRestaurants()
}, []);


async function getRestaurants(){
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6145&lng=77.3063&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const json = await data.json();

// console.log(json);

// setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// setFilteredRestaurants (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 


// console.log(allRestaurants);

const restaurantCards = json?.data?.cards.filter(card => 
  card?.card?.card?.['@type'] === "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget" &&
  card?.card?.card?.gridElements?.infoWithStyle?.restaurants
);

const allRestaurantsData = restaurantCards.flatMap(card => 
  card?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
);

setAllRestaurants(allRestaurantsData);
setFilteredRestaurants(allRestaurantsData);

}

const isOnline =useOnline();
if(!isOnline){
  return <h1>No Internet Connection</h1>
}

// if (!allRestaurants) return null ;

// if(filteredRestaurants?.length ==0) return <h2>No Restaurant matches your search!</h2>;

  return allRestaurants?.length == 0  ?( <Shimmer/>) : (
    <>
     <div className="max-w-screen-sm mx-auto">
  <div className="flex items-center bg-white border-gray-200  px-4 py-2 rounded-b-lg shadow-sm">
    <div className="flex items-center flex-grow">
      <input
        data-testid="search-input"
        type="text"
        className="search-input text-gray-800 bg-transparent focus:outline-none flex-grow"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
    <button
      data-testid="search-btn"
      className="flex items-center px-3 py-2 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 ml-3"
      onClick={() => {
        const data = filterData(searchText, allRestaurants);
        setFilteredRestaurants(data);
      }}
    >
      <IoMdSearch size={20} />
    </button>
  </div>
</div>
<Swiper/>
<div>
  <h2 className="font-bold text-3xl text-gray-900 ml-48 my-4" >
    Top Restaurants near you
  </h2>
</div>
        {/* <input onChange={e => setUser(
          {
            name : e.target.value,
            email : "example@gmail.com",
          }
        )} value={user.name} /> */}
      {/* </div> */}

      
      <div className="flex flex-wrap justify-center mx-10" data-testid="res-list">
       
        
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link key={restaurant.info.id} to={"/restaurant/" +restaurant.info.id }> <RestaurantCard {...restaurant.info}  /></Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;


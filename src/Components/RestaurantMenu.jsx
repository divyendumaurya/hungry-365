import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from '../Contants';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const {id} = useParams();

    const [restaurant , setRestaurant] = useState({});
    const [menu , setMenu] = useState(null);
    

useEffect(()=>{
getRestaurantInfo();
},[])

async function getRestaurantInfo(){

    
   
    const data = await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5265299&lng=77.3991879&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
    const json = await data.json();

    console.log(json);

    setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

    console.log(menu);
    
}

// !restaurant ? (<Shimmer/>) : 


  return (
    <><div className="menu">
    <div >
    <h1>
        Restaurant id: {restaurant?.id}
    </h1>
    <h2> 
        {restaurant.name}
    </h2>
    <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="" />
    <h3>{restaurant?.areaName}</h3>
    <h3>{restaurant?.city}</h3>
    <h3>{restaurant?.avgRating}</h3>
    <h3>{restaurant?.costForTwoMessage}</h3>
    <h3>{restaurant?.cuisines}</h3>
    </div>
    <div>
        <h3>Menu</h3>

        <ul>
        {
        
        menu?.map((item)=>(

                <li 
                key={item?.card?.info?.id}>
                {item?.card?.info?.name}
                    
                </li>
            ))}
        </ul>
    </div>
    </div>
    </>
  )
}

export default RestaurantMenu

import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from '../Contants';
import Shimmer from './Shimmer';
import useRestaurant from '../Utils/useRestaurant';

const RestaurantMenu = () => {
    const {id} = useParams();

    // const [restaurant , setRestaurant] = useState({});
    // const [menu , setMenu] = useState(null);
    

const {restaurant, menu} = useRestaurant(id);

return !restaurant || !menu ? (
    <Shimmer />
  ) : (
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

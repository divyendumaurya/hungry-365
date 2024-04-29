import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from '../Contants';
import Shimmer from './Shimmer';
import useRestaurant from '../Utils/useRestaurant';
import { addItem  } from '../Utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
    const {id} = useParams();

    // const [restaurant , setRestaurant] = useState({});
    // const [menu , setMenu] = useState(null);
    

const {restaurant, menu} = useRestaurant(id);

const dispatch = useDispatch();

const addFoodItem = (item) =>{
    dispatch(addItem(item));
}

return !restaurant || !menu ? (
    <Shimmer />
  ) : (
    <><div className="flex ">
    <div >
    <h1>
        Restaurant id: {restaurant?.id}
    </h1>
    <h2> 
        {restaurant.name}
    </h2>
    <img className='w-80' src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="" />
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
        
        Object.values(menu).map((item)=>(

                <li 
                key={item?.card?.info?.id}>
                {item?.card?.info?.name}
                <button className='bg-green-500 p-2 m-2 'onClick={()=>addFoodItem(item)}>Add</button>
                    
                </li>
            ))}
        </ul>
        
    </div>
    </div>
   
    </>
  )
}

export default RestaurantMenu

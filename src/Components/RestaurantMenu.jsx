// import React, { useEffect, useState } from 'react'
// import {useParams} from "react-router-dom";
// import { IMG_CDN_URL } from '../Contants';
// import Shimmer from './Shimmer';
// import useRestaurant from '../Utils/useRestaurant';
// import { addItem  } from '../Utils/cartSlice';
// import { useDispatch } from 'react-redux';

// const RestaurantMenu = () => {
//     const {id} = useParams();

//     // const [restaurant , setRestaurant] = useState({});
//     // const [menu , setMenu] = useState(null);
    

// const {restaurant, menu} = useRestaurant(id);

// const dispatch = useDispatch();

// const addFoodItem = (item) =>{
//     dispatch(addItem(item));
// }

// return !restaurant || !menu ? (
//     <Shimmer />
//   ) : (
//     <><div className="flex ">
//     <div >
//     <h1>
//         Restaurant id: {restaurant?.id}
//     </h1>
//     <h2> 
//         {restaurant.name}
//     </h2>
//     <img className='w-80' src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="" />
//     <h3>{restaurant?.areaName}</h3>
//     <h3>{restaurant?.city}</h3>
//     <h3>{restaurant?.avgRating}</h3>
//     <h3>{restaurant?.costForTwoMessage}</h3>
//     <h3>{restaurant?.cuisines}</h3>
//     <h3>{restaurant?.totalRatingsString}</h3>
//     </div>
//     <div>
        
//         <h3>Menu</h3>

//         <ul>
//         {
        
//         Object.values(menu).map((item)=>(

//                 <li 
//                 key={item?.card?.info?.id}>
//                 {item?.card?.info?.name}
//                 <button className='bg-green-500 p-2 m-2 'onClick={()=>addFoodItem(item)}>Add</button>
                    
//                 </li>
//             ))}
//         </ul>
        
//     </div>
//     </div>
   
//     </>
//   )
// }

// export default RestaurantMenu




import React from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../Contants';
import Shimmer from './Shimmer';
import useRestaurant from '../Utils/useRestaurant';
import { addItem } from '../Utils/cartSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'flowbite-react';
import { MdStar, MdLocationOn, MdRestaurant, MdAdd } from 'react-icons/md';

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurant, menu } = useRestaurant(id);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant || !menu ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto py-8 ">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 max-w-4xl mx-auto">
        <div className="flex items-center mb-4">
          <img
            className="w-24 h-24 object-cover rounded-full mr-4"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
          <div>
            <h2 className="text-2xl font-bold mb-1">{restaurant?.name}</h2>
            <div className="flex items-center mb-1">
              <MdStar className="text-yellow-500 mr-1" />
              <span className="text-gray-600">{restaurant?.avgRating}</span>
            </div>
            <div className="flex items-center">
              <MdLocationOn className="text-gray-500 mr-1" />
              <span className="text-gray-600">
                {restaurant?.areaName}, {restaurant?.city}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MdRestaurant className="text-gray-500 mr-1" />
            <span className="text-gray-600">{restaurant?.cuisines.join(', ')}</span>
          </div>
          <span className="text-gray-600">{restaurant?.costForTwoMessage}</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 ml-80">Menu</h3>
      <ul className="divide-y divide-gray-200 max-w-4xl mx-auto space-y-6">
        {Object.values(menu).map((item) => (
          <li
            key={item?.card?.info?.id}
            className="bg-gray-100 py-4 px-6 flex items-center justify-between"
          >
            <div className="flex items-center w-full">
              <div className="flex-grow mr-4">
                <h4 className="text-xl font-semibold">{item?.card?.info?.name}</h4>
                <p className="text-gray-600">{item?.card?.info?.description}</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="max-w-md h-40 overflow-hidden object-cover mb-2"
                  src={IMG_CDN_URL + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name}
                />
                <Button className='bg-green-300 border-green-700 px-4'
                  color="green"
                  size="xs"
                  onClick={() => addFoodItem(item)}
                >
                  <MdAdd className="mr-1 " />
                  Add
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

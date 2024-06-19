import React, { useState ,useEffect} from 'react';
import { FETCH_MENU_URL } from '../Contants';

const useRestaurant = (id) => {

const [restaurant, setRestaurant] = useState(null);
const [menu , setMenu] = useState({});
    

useEffect(()=>{
    getRestaurantInfo();
    },[])
    
        async function getRestaurantInfo(){
        const data = await fetch (FETCH_MENU_URL + id);
       
       
        // const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5265299&lng=77.3991879&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
    
        console.log(json);
    
        setRestaurant(json?.data?.cards[2]?.card?.card?.info);
        setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    
        console.log(menu);
        
    }

  return  {restaurant,menu};
}

export default useRestaurant

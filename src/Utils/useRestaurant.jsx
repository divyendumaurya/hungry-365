import React, { useState ,useEffect} from 'react';
import { FETCH_MENU_URL } from '../Contants';

const useRestaurant = (id) => {

const [restaurant, setRestaurant] = useState(null);
const [menu , setMenu] = useState({});
    

useEffect(()=>{
    getRestaurantInfo();
    },[])
    
    //     async function getRestaurantInfo(){
    //     const data = await fetch (FETCH_MENU_URL + id);
       
       
    //     // const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5265299&lng=77.3991879&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     const json = await data.json();
    
    //     console.log(json);
    
    //     setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    //     // setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    //     setMenu(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    
    //     console.log(menu);
        
    // }



    async function getRestaurantInfo() {
      const data = await fetch(FETCH_MENU_URL + id);
      const json = await data.json();
    
      console.log(json);
    
      setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    
      const menuCard = json?.data?.cards.find(card => 
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards.some(item => 
          item?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        )
      );
    
      if (menuCard) {
        const menuItems = menuCard.groupedCard.cardGroupMap.REGULAR.cards
          .find(item => item?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
          ?.card?.card?.itemCards || [];
    
        setMenu(menuItems);
      } else {
        setMenu([]);
      }
    
      console.log(menu);
    }

  return  {restaurant,menu};
}

export default useRestaurant

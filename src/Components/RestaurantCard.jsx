import { IMG_CDN_URL } from "../Contants";
import {useContext} from 'react';
import UserContext from "../Utils/UserContext";

const RestaurantCard = ({

  

  name,
  cloudinaryImageId,
  cuisines,
  sla,
  id
}) => 
{
  const {user} = useContext(UserContext);
  return (
    <div className="w-56 border-1 border-red-950 m-3 p-3 shadow-md shadow-green-200 bg-green-50">
      <img className="h-50 w-60" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-semibold">{name}</h2>
      <h3>ID {id}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{sla.lastMileTravelString} minutes</h4>
      <h4>{sla.deliveryTime} hr</h4>
      <h5>{user.name}</h5>
    </div>
  );
};

export default RestaurantCard;




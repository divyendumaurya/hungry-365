// import { IMG_CDN_URL } from "../Contants";
// import {useContext} from 'react';
// import UserContext from "../Utils/UserContext";

// const RestaurantCard = ({

  

//   name,
//   cloudinaryImageId,
//   cuisines,
//   sla,
//   id
// }) => 
// {
//   const {user} = useContext(UserContext);
//   return (
//     <div className="w-64 border border-gray-200 rounded-lg overflow-hidden shadow-lg m-4 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
//     <img className="w-full h-40 object-cover" src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-2 text-gray-800">{name}</h2>
//       <h3 className="text-sm text-gray-600 mb-1">ID: {id}</h3>
//       <h3 className="text-sm text-gray-600 mb-1">{cuisines.join(", ")}</h3>
//       <h4 className="text-sm text-gray-600 mb-1">{sla.lastMileTravelString}</h4>
//       <h4 className="text-sm text-gray-600 mb-1">{sla.deliveryTime} mins</h4>
    
//     </div>
//   </div>
//   );
// };

// export default RestaurantCard;
import { IMG_CDN_URL } from "../Contants";
import { useContext } from 'react';
import UserContext from "../Utils/UserContext";
import { MdDeliveryDining, MdAccessTime } from 'react-icons/md';
import { Badge } from 'flowbite-react';

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  sla,
  id
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-64 bg-white border border-gray-200 rounded-lg shadow-md p-4 m-4 hover:bg-blue-100 transition-colors duration-300 ease-in-out">
      <div className="h-40 overflow-hidden rounded-lg mb-4">
        <img className="w-full h-full object-cover" src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      </div>
      <div className="h-48">
        <h2 className="text-xl font-bold mb-2 text-gray-800 truncate">{name}</h2>
        <Badge color="info" className="mb-2">
          ID: {id}
        </Badge>
        <div className="text-sm text-gray-600 mb-2 h-12 overflow-hidden">
          {cuisines.join(", ")}
        </div>
        <div className="flex items-center mb-1">
          <MdAccessTime className="text-gray-500 mr-1" />
          <p className="text-sm text-gray-600">{sla.deliveryTime} mins</p>
        </div>
        <div className="flex items-center">
          <MdDeliveryDining className="text-gray-500 mr-1" />
          <p className="text-sm text-gray-600">{sla.lastMileTravelString}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
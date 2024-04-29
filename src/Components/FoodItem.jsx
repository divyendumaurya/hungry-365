import { IMG_CDN_URL } from "../Contants";

const FoodItem = ({
  name,
  imageId,
  price,
  category
}) => 
{
  
  return (
    <div className="w-56 border-1 border-red-950 m-3 p-3 shadow-md shadow-green-200 bg-green-50">
      <img className="h-32 w-32" src={IMG_CDN_URL + imageId} />
      <h2 className="font-semibold">{name}</h2>
      <h3> Rupees {price/100}</h3>
      <h3>{category}</h3>
     
    </div>
  );
};

export default FoodItem;




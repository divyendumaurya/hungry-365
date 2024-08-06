import { IMG_CDN_URL } from "../Contants";
import { IoMdTrash } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeItem } from "../Utils/cartSlice";

const FoodItem = ({
  name,
  imageId,
  price,
  category,
  id
}) => {

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };


  return (
    <div className="w-full md:w-56 border border-gray-300 rounded-lg m-3 p-3 shadow-lg bg-white  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
      <img className="h-32 w-full object-cover rounded-t-lg" src={IMG_CDN_URL + imageId} alt={name} />
      <div className="p-3">
        <h2 className="font-semibold text-lg text-gray-900 ">{name}</h2>
        <h3 className="text-gray-600  mt-2">₹{(price / 100).toFixed(2)}</h3>
        <h3 className="text-gray-500  mt-1">{category}</h3>
        <button
        onClick={() => handleRemoveItem()}
        className="flex items-center bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-sm transition duration-200 ease-in-out mb-6"
      >
        <IoMdTrash className="mr-2" size={20} />
        Remove Item
      </button>
        
      </div>
    </div>
  );
};

export default FoodItem;

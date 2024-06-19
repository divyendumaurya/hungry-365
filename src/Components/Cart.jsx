// import { useDispatch, useSelector } from "react-redux";
// import FoodItem from "./FoodItem";
// import { clearCart } from "../Utils/cartSlice";
// import { IoMdTrash } from "react-icons/io";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);

//   const dispatch = useDispatch();

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto p-4">
//       <h1 className="font-bold text-3xl text-gray-900 dark:text-white mb-6">
//         Cart Items - {cartItems.length}
//       </h1>
//       <button
//         onClick={() => handleClearCart()}
//         className="flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-200 ease-in-out mb-6"
//       >
//         <IoMdTrash className="mr-2" size={20} />
//         Empty the Cart
//       </button>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {cartItems?.map((item) => (
//           <FoodItem key={item?.card?.info.id} {...item?.card?.info} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;



import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdTrash } from "react-icons/io";
import { clearCart } from "../Utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 ">
      <h2 className="font-bold text-3xl text-gray-900 dark:text-white mb-6">
        No of Items in your cart - {cartItems.length}
      </h2>
      {cartItems.length === 0 ? (
        <div className="bg-orange-100 h-[300px] dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center shadow-md justify-center">
          <p className="text-lg text-red-700 dark:text-gray-300 mb-4">
            Your cart is empty. <p className="text-gray-900">Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
          </p>
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-200 ease-in-out"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <>
          <button
            onClick={() => handleClearCart()}
            className="flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-200 ease-in-out mb-6"
          >
            <IoMdTrash className="mr-2" size={20} />
            Empty the Cart
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cartItems.map((item) => (
            //   <FoodItem key={item?.card?.info.id} {...item?.card?.info} />
              <FoodItem
                key={item.card.info.id}
                id={item.card.info.id}
                name={item.card.info.name}
                imageId={item.card.info.imageId}
                price={item.card.info.price}
                category={item.card.info.category}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

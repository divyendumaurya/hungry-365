import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../Utils/UserContext';
import { useSelector } from 'react-redux'
import { IoMdCart, IoMdHome, IoMdPerson, IoMdMail, IoMdPricetag, IoMdHelpCircle } from "react-icons/io";
import logo from '../assets/logo.png'



const loggedInUser = () =>{
  return true;
}

// const Title = () => (
//     <a href="/">
//       <img data-testid = "logo"
//         className=" w-24 p-2 mx-auto"
//         alt="logo"
//         src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
//       />
//     </a>
//   );
  

const Header = () => {

  const [ isLoggedIn, setIsLoggedIn] = useState(false);
  const {user} = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems)
;
  return (
    <>
    
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 h-20">
    <Link to="/" className="flex items-center h-full">
      <img src={logo} className="h-full" alt="365 Hungry Logo" />
    </Link>
    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <Link data-testid="cart" to="/cart" className="relative px-5">
        <div className="flex items-center px-3 py-2 bg-green-500 rounded-full text-white">
          <span className="mr-2">
            <IoMdCart size={20} />
          </span>
          Cart
          <span className="ml-2 bg-white text-green-500 rounded-full px-2 py-1 text-xs font-semibold">
            {cartItems.length}
          </span>
        </div>
        {cartItems.length > 0 && (
          <div className="absolute top-0 right-0 -mt-2 mx-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
            {cartItems.length}
          </div>
        )}
      </Link>

      {isLoggedIn ? (
        <button
          type="button"
          className="flex items-center px-3 py-2 bg-red-500 rounded-full text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
          onClick={() => setIsLoggedIn(false)}
        >
          <IoMdPerson size={20} className="mr-2" />
          Log Out
        </button>
      ) : (
        <button
          type="button"
          className="flex items-center px-3 py-2 bg-blue-700 rounded-full text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          onClick={() => setIsLoggedIn(true)}
        >
          <IoMdPerson size={20} className="mr-2" />
          Log In
        </button>
      )}
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      <ul className="flex flex-row font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            to="/"
            className="flex items-center px-3 py-2 rounded-full text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
            aria-current="page"
          >
            <IoMdHome size={20} className="mr-2" />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="flex items-center px-3 py-2 rounded-full text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
          >
            <IoMdPerson size={20} className="mr-2" />
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="flex items-center px-3 py-2 rounded-full text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
          >
            <IoMdMail size={20} className="mr-2" />
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/offers"
            className="flex items-center px-3 py-2 rounded-full text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
          >
            <IoMdPricetag size={20} className="mr-2" />
            Offers
          </Link>
        </li>
        <li>
          <Link
            to="/help"
            className="flex items-center px-3 py-2 rounded-full text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
          >
            <IoMdHelpCircle size={20} className="mr-2" />
            Help
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>



    {/* <div className=" flex justify-between bg-green-200 shadow-md">
      <Title />

      <div className="nav-items">
        <ul className='flex py-10 '>
         <Link to="/"> <li className='px-3'> Home</li></Link>
          <Link to="/about"><li  className='px-3'>About</li></Link>
          <Link to ="/contact"><li  className='px-3'>Contact</li></Link>
          <Link data-testid="cart" to ='/cart'><li  className='px-3'>Cart - {cartItems.length} </li></Link>
          
        </ul>
      </div>
      <span className='p-10  font-bold text-red-600 h-3 w-6'>{user.name} </span>
     { isLoggedIn ?( <Button  onClick={()=>setIsLoggedIn(false)}>Log Out</Button>) :( <Button onClick={()=> setIsLoggedIn(true)}>Log in</Button>)
     }
      
    </div> */}

    </>
  )
}

export default Header




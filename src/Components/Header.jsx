import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { IoMdCart, IoMdHome, IoMdPerson, IoMdMail, IoMdPricetag, IoMdHelpCircle, IoMdArrowDropdown, IoMdLogOut } from "react-icons/io";
import { Dropdown } from 'flowbite-react';
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
  // const {user} = useContext(UserContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(store => store.cart.items);
  const user = useSelector(store => store.user.currentUser);
  console.log(cartItems)
;

useEffect(() => {
  // Check if user is logged in (you might want to use a more robust method)
  setIsLoggedIn(!!user);
}, [user]);

const handleLogin = () => {
  navigate('/login');
};

const handleLogout = () => {
  // Dispatch logout action (you need to create this action and reducer)
  dispatch({ type: 'LOGOUT' });
  setIsLoggedIn(false);
  setShowDropdown(false);
};

  return (
    <>
    
    <nav className="bg-white border-gray-200  shadow-md">
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
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <button
                type="button"
                className="flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName} className="w-8 h-8 rounded-full mr-2 border-2 border-white" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                    <IoMdPerson size={20} className="text-gray-600" />
                  </div>
                )}
                <span className="font-semibold">{user.displayName?.split(' ')[0]}</span>
                <IoMdArrowDropdown size={20} className="ml-1" />
              </button>
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.displayName}</span>
              <span className="block truncate text-sm font-medium">{user.email}</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout} className="text-red-600 hover:bg-red-100 focus:bg-red-100">
              <div className="flex items-center">
                <IoMdLogOut className="mr-2" size={20} />
                <span>Sign out</span>
              </div>
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <button
            type="button"
            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleLogin}
          >
            <IoMdPerson size={20} className="mr-2" />
            Log In
          </button>
        )}
      </div>

      {/* mm */}
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      <ul className="flex flex-row font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
        <li>
          <Link
            to="/"
            className="flex items-center px-3 py-2 rounded-full text-gray-900 hover:bg-gray-200 "
            aria-current="page"
          >
            <IoMdHome size={20} className="mr-2" />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="flex items-center px-3 py-2 rounded-full text-gray-900 hover:bg-gray-200 "
          >
            <IoMdPerson size={20} className="mr-2" />
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="flex items-center px-3 py-2 rounded-full text-gray-900 hover:bg-gray-200 "
          >
            <IoMdMail size={20} className="mr-2" />
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex items-center px-3 py-2 rounded-full text-gray-900 hover:bg-gray-200 "
          >
            <IoMdPricetag size={20} className="mr-2" />
            Offers
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex items-center px-3 py-2 rounded-full text-gray-900 hover:bg-gray-200 "
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




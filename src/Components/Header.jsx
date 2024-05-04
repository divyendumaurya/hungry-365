import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../Utils/UserContext';
import { useSelector } from 'react-redux';



const loggedInUser = () =>{
  return true;
}

const Title = () => (
    <a href="/">
      <img data-testid = "logo"
        className=" w-24 p-2 mx-auto"
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );
  

const Header = () => {

  const [ isLoggedIn, setIsLoggedIn] = useState(false);
  const {user} = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems)
;
  return (
    <div className=" flex justify-between bg-green-200 shadow-md">
      <Title />

      <div className="nav-items">
        <ul className='flex py-10 '>
         <Link to="/"> <li className='px-3'> Home</li></Link>
          <Link to="/about"><li  className='px-3'>About</li></Link>
          <Link to ="/contact"><li  className='px-3'>Contact</li></Link>
          <Link data-testid="cart" to ='/cart'><li  className='px-3'>Cart - {cartItems.length} </li></Link>
          
        </ul>
      </div>
      <span className='p-10  font-bold text-red-600'>{user.name} </span>
     { isLoggedIn ?( <button onClick={()=>setIsLoggedIn(false)}>Log Out</button>) :( <button onClick={()=> setIsLoggedIn(true)}>Log in</button>)
}
      
    </div>
  )
}

export default Header

import React ,{useState , useContext} from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import { createBrowserRouter , Outlet} from 'react-router-dom'
import About from './Components/About'
import Error from './Components/Error'
import Contact from './Components/Contact'
import RestaurantMenu from './Components/RestaurantMenu'
import UserContext from './Utils/UserContext'
import { Provider } from 'react-redux'
import store from './Utils/store'
import Cart from './Components/Cart'
import Swiper from './Components/Swiper'

const App = () => {
const [user, setUser] = useState({
  name : "Rajat",
  email : "rajat@gmail.com"
});

  return (
    <Provider store={store} >
    <UserContext.Provider
    value ={{ user,setUser }}
    >
    <Header/>
    
    
    <Outlet/>

    <Footer/>
   
    
    </UserContext.Provider>
    </Provider>
  )
}

export const appRouter = createBrowserRouter([
  {
path: '/',
element : <App />,
children :[
  {
    path :'/',
    element : <Body/>,
  },
  {
    path :'/about',
    element : <About/>,
  },
  {
    path :'/contact',
    element : <Contact/>,
  },
  {
    path :'/restaurant/:id',
    element : <RestaurantMenu/>,
  },
  {
    path :'/cart',
    element : <Cart/>
  },
  
]
// errorElement : <Error/>
  },

  
])


export default App

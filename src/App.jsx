import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import { createBrowserRouter , Outlet} from 'react-router-dom'
import About from './Components/About'
import Error from './Components/Error'
import Contact from './Components/Contact'
import RestaurantMenu from './Components/RestaurantMenu'





const App = () => {
  return (
    <>
    <Header/>
    
    <Outlet/>

    <Footer/>
   
    
    </>
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
  
]
// errorElement : <Error/>
  },

  
])


export default App

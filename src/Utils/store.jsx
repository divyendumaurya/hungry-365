import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";
import userReducer from "./userSlice"


const store = configureStore({
 reducer :{
    cart : cartSlice,
    user: userReducer,
 }
});


export default store;



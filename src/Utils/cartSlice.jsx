import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name :'cart',
    initialState:{
        items :[]
    },

    reducers:{
        addItem: (state , action) =>{
            state.items.push(action.payload);

        },
        // removeItem:(state, action)=> {
        //     state.items.splice(action.payload, 1);
        // },

        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => {return item.card.info.id !== itemId});
          },

        clearCart: (state)=>{
            state.items = [];
        },
    },
});



export default cartSlice.reducer;

 
export const {addItem , removeItem , clearCart} = cartSlice.actions;

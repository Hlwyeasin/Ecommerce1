import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[]
  },
  reducers: {
   cartTotal:(state,action)=>{
    // console.log(state.cartItems);
    console.log(action.payload);
    // state.cartItems.push(action.payload)

    const findIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
     console.log(findIndex);

     if(findIndex >= 0){
      state.cartItems[findIndex].cartQun += 1

     }else{
      state.cartItems.push ({...action.payload,cartQun: 1})

     }

     localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
     
    
   }
  }
})

// Action creators are generated for each case reducer function
export const { cartTotal } = cartSlice.actions

export default cartSlice.reducer


// 2 nd part koira rakdci .......................
// import React from 'react'
// import { createSlice } from '@reduxjs/toolkit'

//   export const cartSlice = createSlice ({
//     name: 'cart',
//     initialState: {
//         value: 0
//     },
//     reducers:{

//     }


//   })
// export const {} = cartSlice.actions

// export default cartSlice.reducer

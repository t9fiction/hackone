import { createSlice } from "@reduxjs/toolkit";

// // Define a type for the slice state
// interface CounterState {
//     value: number
//   }
  
//   // Define the initial state using that type
//   const initialState: CounterState = {
//     value: 0,
//   }

const initialState = {
  cartItems: '',
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(state.cartItems,"console in slie")
      state.cartItems = action.payload;
      console.log(state.cartItems,"console in slie")
    }
  },
});

export const { addToCart } = cartSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default cartSlice.reducer
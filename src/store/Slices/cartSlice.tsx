import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// // Define a type for the slice state
// interface CounterState {
//     value: number
//   }

//   // Define the initial state using that type
//   const initialState: CounterState = {
//     value: 0,
//   }

interface CartItem {
  _id: string;
  _type: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      console.log(action.payload, "action in cartSlice");
      const item = state.cartItems.find(
        (p: any) => p._id === action.payload._id
      );
      if (item) {
        item.quantity++;
        let price:number = item.price;
        price = item.price * item.quantity;
        console.log(price,"Total Price")
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        console.log(state.cartItems[2], "State cartitem");
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default cartSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "../../../types/Product";

// // Define a type for the slice state
// interface CounterState {
//     value: number
//   }

//   // Define the initial state using that type
//   const initialState: CounterState = {
//     value: 0,
//   }

// interface CartItem {
//   _id: string;
//   _type: string;
//   name: string;
//   price: number;
//   size: string;
//   quantity: number;
// }

interface CartPayloadType {
  _id: string;
  task: string;
  val: any;
}

type PayloadType = CartItemType | CartPayloadType;

interface CartState {
  cartItems: CartItemType[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      const item = state.cartItems.find(
        (p: any) => p._id === action.payload._id
      );
      if (item) {
        item.quantity++;
        let price: number = item.price;
        price = item.price * item.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action: PayloadAction<PayloadType>) => {
      console.log(state, action, "State and action ");
      const payload = action.payload as CartPayloadType;
      if ("task" in payload) {
        state.cartItems = state.cartItems.map((item,id) => {
          console.log(id,"id")
          if (item._id === payload._id) {
            console.log(state.cartItems[0].price,"Price of state item0")
            const sPrice = state.cartItems[0].price
            console.log(item.quantity,"quantity")
            return { ...item, [payload.task]: payload.val, price: sPrice * item.quantity };
          }
          return item;
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<{_id:string}>) => {
      state.cartItems = state.cartItems.filter((item)=>item._id !== action.payload._id)
    }
  },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default cartSlice.reducer;

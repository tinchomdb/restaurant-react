import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (x) => x.id === action.payload.id
      );
      if (index !== -1) {
        state.cartItems[index].quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increment: (state, action) => {
      const index = state.cartItems.findIndex((x) => x.id === action.payload);
      state.cartItems[index].quantity += 1;
    },
    decrement: (state, action) => {
      const index = state.cartItems.findIndex((x) => x.id === action.payload);
      if (state.cartItems[index].quantity > 0) {
        state.cartItems[index].quantity -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart, removeItemFromCart, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;

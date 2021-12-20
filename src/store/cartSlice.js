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
        (x) => x._id === action.payload._id
      );
      if (index !== -1) {
        state.cartItems[index].quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
    increment: (state, action) => {
      const index = state.cartItems.findIndex((x) => x._id === action.payload);
      state.cartItems[index].quantity += 1;
    },
    decrement: (state, action) => {
      const index = state.cartItems.findIndex((x) => x._id === action.payload);
      if (state.cartItems[index].quantity > 0) {
        state.cartItems[index].quantity -= 1;
      }
    },
    deleteCart: (state) => {
      state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItemToCart,
  removeItemFromCart,
  increment,
  decrement,
  deleteCart,
} = cartSlice.actions;

export default cartSlice.reducer;

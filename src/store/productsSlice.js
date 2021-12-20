import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsItems: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.productsItems = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;

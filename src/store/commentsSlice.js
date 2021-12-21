import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commentsItems: [],
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getComments: (state, action) => {
      state.commentsItems = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getComments } = commentsSlice.actions;

export default commentsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sectionsItems: [],
};

export const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    getSections: (state, action) => {
      state.sectionsItems = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getSections } = sectionsSlice.actions;

export default sectionsSlice.reducer;

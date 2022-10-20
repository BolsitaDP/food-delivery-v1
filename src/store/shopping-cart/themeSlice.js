import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkmode: true,
  },

  reducers: {
    toggle(state) {
      state.darkmode = !state.darkmode;
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice;

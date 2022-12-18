import { createSlice } from "@reduxjs/toolkit";
const initialState: { results: any[]; searchs: any[] } = {
  results: [],
  searchs: [],
};
export const searchSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveSearch: (state, action) => {
      state.searchs.push(action.payload);
    },
    saveResults: (state, action) => {
      state.results.push(action.payload);
    },
  },
});
export const { saveSearch, saveResults } = searchSlice.actions;
export default searchSlice.reducer;

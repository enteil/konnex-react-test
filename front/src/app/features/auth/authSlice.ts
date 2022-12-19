import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: null,
  name: null,
  token: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    cleanToken: (state) => {
      state.id = null;
      state.name = null;
      state.token = null;
    },
  },
});
export const { saveToken, cleanToken } = userSlice.actions;
export default userSlice.reducer;

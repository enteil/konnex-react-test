import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
    id: "",
    name: "",
  },
  token: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    cleanToken: (state) => {
      state.token = "";
    },
  },
});
export const { saveToken, cleanToken } = userSlice.actions;
export default userSlice.reducer;

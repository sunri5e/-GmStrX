import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.isUserLogged = true;
    },
  },
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLogged: false,
  toastWasShown: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.isUserLogged = action.payload;
    },
    setToastState: (state, action) => {
      state.toastWasShown = action.payload;
    },
  },
});

export const { setUserData, setToastState } = authSlice.actions;
export default authSlice.reducer;

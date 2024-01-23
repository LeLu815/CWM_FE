import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userInfo: null,
  },
  reducers: {
    updateUserInfo(state, action) {
      const newUserInfo = action.payload;

      state.isLoggedIn = newUserInfo.isLoggedIn;
      state.userInfo = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;

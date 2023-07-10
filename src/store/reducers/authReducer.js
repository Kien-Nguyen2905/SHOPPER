import { LOCAL } from "@/constants/localStorage";
import { createSlice } from "@reduxjs/toolkit";
import { profileUser } from "../middleware/authMiddleWare";
const initialState = {
  profile: null,
};
export const { reducer: authReducer, actions: authActions } = createSlice({
  initialState,
  name: "auth",
  reducers: {
    logout: (state) => {
      localStorage.removeItem(LOCAL.token);
      localStorage.removeItem(LOCAL.refreshToken);
      state.profile = null;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(profileUser.fulfilled, (state, action) => {
  //     state.profile = action.payload;
  //   });
  // },
});

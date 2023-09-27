import { LOCAL } from "@/constants/localStorage";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  profile: null,
  listOrder: null,
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
    setOrder: (state, action) => {
      state.listOrder = action.payload;
    },
  },
});

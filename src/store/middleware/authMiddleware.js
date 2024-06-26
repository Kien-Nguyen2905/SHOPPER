import { LOCAL } from "@/constants/localStorage";
import { authService } from "@/services/authenService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authActions } from "../reducers/authReducer";
import { getCart } from "./cartMiddleware";

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      const { token, refreshToken } = await authService.authLogin(payload);
      localStorage.setItem(LOCAL.token, token);
      localStorage.setItem(LOCAL.refreshToken, refreshToken);
      thunkAPI.dispatch(getCart());
      return await thunkAPI.dispatch(profileUser());
    } catch (error) {
      console.log(error);
      throw error?.response?.data?.message;
    }
  }
);

export const profileUser = createAsyncThunk(
  "auth/profile",
  async (_, thunkAPI) => {
    const resProfile = await authService.getProfile();
    thunkAPI.dispatch(authActions.setProfile(resProfile));
    return resProfile;
  }
);

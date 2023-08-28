import { THUNK_STATUS } from "@/constants/general";
import { createSlice } from "@reduxjs/toolkit";
import { addToCart, getCart } from "../middleware/cartMiddleware";
const initialState = {
  cartInfo: {},
  updateStatus: THUNK_STATUS.fullfilled,
  getStatus: THUNK_STATUS.fullfilled,
};
export const { reducer: cartReducer, actions: cartActions } = createSlice({
  initialState,
  name: "cart",
  reducers: {
    updateCacheCart: (state, action) => {
      state.cartInfo = action.payload || state.cartInfo;
    },
    clearCart: (state) => {
      state.cartInfo = {};
    },
  },
  extraReducers: (builder) => {
    // GetCart
    builder.addCase(getCart.pending, (state) => {
      state.getStatus = THUNK_STATUS.pending;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.getStatus = THUNK_STATUS.fullfilled;
      state.cartInfo = action.payload;
    });
    builder.addCase(getCart.rejected, (state) => {
      state.getStatus = THUNK_STATUS.rejected;
      state.cartInfo = {};
    });
    //AddCart;
    builder.addCase(addToCart.pending, (state) => {
      state.updateStatus = THUNK_STATUS.pending;
    });
    builder.addCase(addToCart.fulfilled, (state) => {
      state.updateStatus = THUNK_STATUS.fullfilled;
    });
    builder.addCase(addToCart.rejected, (state) => {
      state.updateStatus = THUNK_STATUS.rejected;
    });
  },
});

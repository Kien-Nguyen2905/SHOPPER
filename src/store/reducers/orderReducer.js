import { THUNK_STATUS } from "@/constants/general";
import { createSlice } from "@reduxjs/toolkit";
import { checkout, getOrder } from "../middleware/orderMiddleware";

const initialState = {
  orderInfo: {},
  checkoutStatus: THUNK_STATUS.fullfilled,
};

export const { reducer: orderReducer, actions: orderAction } = createSlice({
  initialState,
  name: "order",
  reducers: {},
  extraReducers: (builder) => {
    // GET ORDER
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.orderInfo = action.payload;
    });

    // Checkout
    builder.addCase(checkout.pending, (state) => {
      state.checkoutStatus = THUNK_STATUS.pending;
    });
    builder.addCase(checkout.fulfilled, (state) => {
      state.checkoutStatus = THUNK_STATUS.fullfilled;
    });
    builder.addCase(checkout.rejected, (state) => {
      state.checkoutStatus = THUNK_STATUS.rejected;
    });
  },
});

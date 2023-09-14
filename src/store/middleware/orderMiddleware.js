import { orderService } from "@/services/orderService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCart } from "./cartMiddleware";

export const getOrder = createAsyncThunk("order/get", async (_, thunkAPI) => {
  try {
    const orderRes = await orderService.getOrders();
    thunkAPI.fulfillWithValue(orderRes);
    return orderRes;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
    throw error;
  }
});

export const checkout = createAsyncThunk(
  "order/checkout",
  async (checkoutPayload, thunkAPI) => {
    try {
      const checkoutRes = await orderService.checkout(checkoutPayload);
      // GET ORDER
      thunkAPI.dispatch(getOrder());

      // REFETCH CART
      thunkAPI.dispatch(getCart());

      thunkAPI.fulfillWithValue(checkoutRes);
      return checkoutRes;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      throw error;
    }
  }
);

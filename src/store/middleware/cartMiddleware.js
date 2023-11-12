import { cartService } from "@/services/cartService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCart = createAsyncThunk("cart/get", async (_, thunkAPI) => {
  try {
    const res = await cartService.getCart();
    const subTotal = res.quantity?.reduce((curr, next, index) => {
      return curr + Number(next) * Number(res.product?.[index].price || 0);
    }, 0);
    const total =
      subTotal -
        subTotal * ((res.discount || 0) / 100) +
        (res.shipping?.price || 0) || 0;

    const totalProduct =
      res.quantity?.reduce((curr, next) => Number(curr) + Number(next), 0) ||
      "0";
    const modCartInfo = {
      ...res,
      total,
      subTotal,
      totalProduct: [totalProduct.toString()],
    };
    thunkAPI.fulfillWithValue(modCartInfo);
    return modCartInfo;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
    throw error;
  }
});

export const addToCart = createAsyncThunk(
  "cart/add",
  async (actionPayload, thunkAPI) => {
    const currentCart = thunkAPI.getState()?.cart?.cartInfo || {};
    try {
      let addPayload = {};
      if (currentCart.id) {
        const matchIndex = currentCart.product?.findIndex(
          (product) => product.id === actionPayload
        );
        const newProductPayload = currentCart.product?.map((product) => {
          return product.id;
        });
        const newQuantityPayload = [...currentCart.quantity];
        if (matchIndex > -1) {
          newQuantityPayload[matchIndex] = (
            Number(newQuantityPayload[matchIndex]) + 1
          ).toString();
        } else {
          newProductPayload.push(actionPayload);
          newQuantityPayload.push("1");
        }
        addPayload = {
          ...currentCart,
          product: newProductPayload,
          quantity: newQuantityPayload,
        };
      } else {
        addPayload = {
          product: [actionPayload],
          quantity: ["1"],
          subTotal: 0,
          total: 0,
          totalProduct: ["string"],
          discount: 0,
          paymentMethod: "string",
        };
      }
      const cartRes = await cartService.updateCart(addPayload);
      thunkAPI.dispatch(getCart());
      thunkAPI.fulfillWithValue(cartRes);
      return cartRes;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      throw error;
    }
  }
);

export const removeCart = createAsyncThunk(
  "cart/remove",
  async (actionPayload, thunkAPI) => {
    const currentCartInfo = thunkAPI.getState()?.cart?.cartInfo || {};
    try {
      let newPayload = {};
      const removeIndex = currentCartInfo.product?.findIndex(
        (product) => product.id === actionPayload
      );

      if (removeIndex > -1) {
        const newProductPayload = currentCartInfo.product?.filter(
          (_, index) => index !== removeIndex
        );
        const newQuantityPayload = currentCartInfo.quantity?.filter(
          (_, index) => index !== removeIndex
        );

        newPayload = {
          ...currentCartInfo,
          product: newProductPayload.map((product) => product.id),
          quantity: newQuantityPayload,
          subTotal: 0,
          total: 0,
          totalProduct: ["string"],
        };
        const cartRes = await cartService.updateCart(newPayload);
        thunkAPI.dispatch(getCart());

        thunkAPI.fulfillWithValue(cartRes);
        return cartRes;
      } else {
        throw "Can not find remove product";
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      throw error;
    }
  }
);

export const updateCart = createAsyncThunk(
  "cart/update",
  async (actionPayload, thunkAPI) => {
    try {
      const cartRes = await cartService.updateCart({
        ...actionPayload,
        subTotal: 0,
        total: 0,
        totalProduct: [0],
        discount: 0,
        paymentMethod: "string",
      });
      thunkAPI.dispatch(getCart());

      thunkAPI.fulfillWithValue(cartRes);
      return cartRes;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      throw error;
    }
  }
);

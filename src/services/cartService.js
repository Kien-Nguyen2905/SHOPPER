import instance from "./interceptor";

export const cartService = {
  getCart() {
    return instance.get(`carts/me`);
  },
  updateCart(payload = {}) {
    return instance.put(`carts`, payload);
  },
};

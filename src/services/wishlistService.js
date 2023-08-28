import instance from "./interceptor";

export const wishlistService = {
  addList(payload = {}) {
    return instance.post("/customer/white-list", payload);
  },
  removeList(payload = {}) {
    return instance.delete("/customer/white-list", payload);
  },
};

import instance from "./interceptor";

export const orderService = {
  getVoucher(id = "") {
    return instance.get(`orders/voucher/${id}`);
  },
  getOrders(query = "") {
    return instance.get(`orders/me${query}`);
  },
  getOrderById(id = "") {
    return instance.get(`orders/${id}/me`);
  },
  checkout(payload = {}) {
    return instance.post(`orders`, payload);
  },
  getReviewFollowProduct(id = "") {
    return instance.get(`reviews/product/${id}`);
  },
};

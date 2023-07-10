import instance from "./interceptor";
export const subscribeService = {
  subscribe(payload = {}) {
    return instance.post(`/subscribes`, payload);
  },
};

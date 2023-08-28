import instance from "./interceptor";

export const authService = {
  authLogin(payload = {}) {
    return instance.post(`/customer/login`, payload);
  },
  authRegister(payload = {}) {
    return instance.post(`/customer/register`, payload);
  },
  getProfile() {
    return instance.get(`/customer/profiles`);
  },
  updateProfile(payload = {}) {
    return instance.put(`/customer/profiles`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  putProfile(payload = {}) {
    return instance.put(`/customer/profiles`, payload, {
      headers: {
        ["Content-Type"]: "multipart/form-data",
      },
    });
  },
};

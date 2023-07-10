import axios from "axios";
import { BASE_URL } from "@/constants/environment";

const instance = axios.create({
  baseURL: BASE_URL,
});
instance.interceptors.response.use(
  (response) => {
    return response?.data?.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 || error.response.status === 403) {
      try {
        const data = await instance.put("/customer/refresh", {
          refreshToken: localStorage.getItem("refreshToken"),
        });
        localStorage.setItem("accessToken", data.token);
        localStorage.setItem("refreshToken", data.refreshToken);
        originalRequest.headers.Authorization = `Bearer ${data.token}`;
        return instance(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }
    return Promise.reject(error);
  }
);
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Content-Type"] =
        config?.headers?.["Content-Type"] ?? "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;

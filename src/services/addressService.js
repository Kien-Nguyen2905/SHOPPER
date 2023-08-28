import instance from "./interceptor";
export const addressService = {
  getProvinces() {
    return instance.get(`provinces`);
  },
  getDistricts(id) {
    return instance.get(`districts?province=${id}`);
  },
  getWards(id) {
    return instance.get(`wards?district=${id}`);
  },
};

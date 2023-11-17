import instance from "./interceptor";
export const blogService = {
  getCategories() {
    return instance.get(`blog-categories`);
  },
  getBlog() {
    return instance.get(`blogs`);
  },
  getBlogDetail(slug) {
    return instance.get(`blogs${slug ? `/${slug}` : ""}`);
  },
  getMyCourse() {
    return instance.get(`orders/courses/me`);
  },
};

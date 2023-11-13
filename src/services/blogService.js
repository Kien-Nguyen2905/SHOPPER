import instance from "./interceptor";
export const blogService = {
  getCategories() {
    return instance.get(`blog-categories`);
  },
  getBlog(query = "") {
    return instance.get(`blogs${query}`);
  },
  getRelatedBlog(query = "") {
    return instance.get(`blogs?category=${query}`);
  },
  getBlogDetail(slug) {
    return instance.get(`blogs${slug ? `/${slug}` : ""}`);
  },
  getTag() {
    return instance.get(`blog-tags`);
  },
};

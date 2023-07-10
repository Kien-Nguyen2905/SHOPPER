import instance from "./interceptor";

export const productService = {
  getFeaturedProduct(slug) {
    return instance.get(`products${slug ? `/${slug}` : ""}`);
  },
  getProductCategorise() {
    return instance.get(`product-categories`);
  },
};

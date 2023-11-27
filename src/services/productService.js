import instance from "./interceptor";

export const productService = {
  getProducts(query = "") {
    return instance.get(
      `products${
        query
          ? `${query}&orderBy=sortOrder&order=-1`
          : "?orderBy=sortOrder&order=-1"
      }`
    );
  },
  getProductsDetail(slug = "") {
    return instance.get(`products/${slug}`);
  },
  getCategories(query = "") {
    return instance.get(`product-categories/${query}`);
  },
  getProductByCategorise(slug = "") {
    return instance.get(`product-categories/${slug}`);
  },
};

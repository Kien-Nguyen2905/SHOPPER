import instance from "./interceptor";
const convert = (string = "") => {
  return JSON.parse(
    '{"' +
      decodeURI(string)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
};
const obtoquery = (object = {}) => {
  return "?" + new URLSearchParams(object).toString();
};

export const productService = {
  getProducts(query = "") {
    const querynew = convert(
      `orderBy=sortOrder&order=-1${query ? `&` + query.substr(1) : ""}`
    );
    return instance.get(
      `products${
        query
          ? decodeURIComponent(obtoquery({ ...querynew }))
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

import instance from "./interceptor";

export const pageService = {
  getPage(page = "") {
    return instance.get(`/pages/${page}`);
  },
};

import { PATHS } from "@/constants/pathname";
import useDebounce from "@/hooks/useDebounce";
import { useQuery } from "@/hooks/useQuery";
import { blogService } from "@/services/blogService";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
const LIMITS = 6;
export const useBlogPage = () => {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);
  const [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchBlog, setSearchBlog] = useState();
  const debounceSearch = useDebounce(searchBlog, 500);
  const {
    data,
    loading: loadingBlog,
    refetch: refetchBlogs,
  } = useQuery((query) => blogService.getBlog(query || `?limit=${LIMITS}`));
  const updateQueryString = (queryObject) => {
    const newQueryString = queryString.stringify({
      ...queryObject,
      limit: LIMITS,
    });
    setSearchParams(new URLSearchParams(newQueryString));
  };
  const onPagiChange = (page) => {
    updateQueryString({ ...queryObject, page });
  };
  const { data: dataCate, loading: loadingCate } = useQuery(
    blogService.getCategories
  );
  const { data: dataTag } = useQuery(blogService.getTag);
  const tagList = dataTag?.blogs;
  const cateList = dataCate?.blogs;
  const qtyBlogOfCate = (name) => {
    const qty = blogList?.filter((item) => item?.category.name === name);
    return qty?.length;
  };
  const onSearch = (e) => {
    setSearchBlog(e.target.value || "");
  };
  useEffect(() => {
    if (debounceSearch !== undefined) {
      navigate(PATHS.BLOG + `?search=${debounceSearch}`);
    }
  }, [debounceSearch]);
  useEffect(() => {
    refetchBlogs?.(search);
  }, [search]);
  const blogList = data;
  const pagiBlogs = data?.pagination;
  const blogListSB = blogList?.blogs?.slice(0, 3);
  const pagiProps = {
    page: +pagiBlogs?.page || +queryObject?.page || 1,
    limit: +pagiBlogs?.limit || 0,
    total: pagiBlogs?.total || 0,
    onPagiChange,
  };
  const sideBarProp = {
    blogListSB,
    tagList,
    cateList,
    qtyBlogOfCate,
    onSearch,
    searchBlog,
  };
  const isLoadingBlog = useDebounce(loadingBlog, 1500);
  //   console.log(pagiProps);
  return { blogList, isLoadingBlog, sideBarProp, pagiProps };
};

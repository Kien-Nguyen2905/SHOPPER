import { SORT_OPTIONS } from "@/constants/general";
import useDebounce from "@/hooks/useDebounce";
import { useQuery } from "@/hooks/useQuery";
import { productService } from "@/services/productService";
import queryString from "query-string";
import { useEffect, useMemo } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
const LIMITS = 9;
export const useProductPage = () => {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);
  const [_, setSearchParams] = useSearchParams();
  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
    refetch: refetchProducts,
  } = useQuery(
    (query) => productService.getProducts(query || `?limit=${LIMITS}`),
    null,
    {
      preventInitialCall: true,
    }
  );
  const products = dataProducts?.products || [];
  const pagiProducts = dataProducts?.pagination || {};
  useEffect(() => {
    refetchProducts?.(search);
  }, [search]);
  const {
    data: dataCategorise,
    loading: loadingCategorise,
    error: errorCategorise,
  } = useQuery(productService.getCategories);
  const categorise = dataCategorise?.products || [];
  const updateQueryString = (queryObject) => {
    console.log(queryObject);
    const newQueryString = queryString.stringify({
      ...queryObject,
      limit: LIMITS,
    });
    setSearchParams(new URLSearchParams(newQueryString));
  };
  const onPagiChange = (page) => {
    updateQueryString({ ...queryObject, page });
  };
  const activeSelect = useMemo(() => {
    return (
      Object.values(SORT_OPTIONS).find(
        (options) =>
          options.queryObject.orderBy === queryObject.orderBy &&
          options.queryObject.order === queryObject.order
      )?.value || SORT_OPTIONS.popularity.value
    );
  }, [queryObject]);
  const onSortChange = (sortType) => {
    const sortQueryObject = SORT_OPTIONS[sortType].queryObject;
    if (sortQueryObject) {
      updateQueryString({
        ...queryObject,
        orderBy: sortQueryObject.orderBy,
        order: sortQueryObject.order,
        page: 1,
      });
    }
  };
  const onCateChange = (category) => {
    updateQueryString({ ...queryObject, category, page: 1 });
  };
  const pagiProps = {
    page: +pagiProducts.page || +queryObject.page || 1,
    limit: +pagiProducts.limit || 0,
    total: pagiProducts.total || 0,
    onPagiChange,
  };
  const isLoadingProducts = useDebounce(loadingProducts, 1500);
  const listProductsProps = {
    products,
    isLoadingProducts,
    errorProducts,
  };
  const toolBoxProps = {
    limit: products?.length,
    total: pagiProducts.total || 0,
    activeSelect,
    onSortChange,
  };
  const filterProductProps = {
    categorise,
    loadingCategorise,
    errorCategorise,
    activeCategory: queryObject?.category,
    onCateChange,
  };
  return {
    listProductsProps,
    pagiProducts,
    pagiProps,
    toolBoxProps,
    filterProductProps,
  };
};

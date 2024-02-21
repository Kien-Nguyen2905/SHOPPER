import { TAB } from "@/constants/tab";
import useDebounce from "@/hooks/useDebounce";
import { useMutation } from "@/hooks/useMutation";
import { useQuery } from "@/hooks/useQuery";
import { pageService } from "@/services/pageService";
import { productService } from "@/services/productService";
import { subscribeService } from "@/services/subscribeService";
import { message } from "antd";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const useHomePage = () => {
  // Call API get products
  const { data: dataProducts, loading: loadingProducts } = useQuery(
    productService.getProducts
  );
  const products = dataProducts?.products || [];
  // Call API get categorise
  const { data: dataCategorise, loading: loadiCategorise } = useQuery(
    productService.getCategories
  );
  const categorise = dataCategorise?.products || [];
  // Call API get brands
  const { data: dataBrands, loading: loadingBrands } = useQuery(() =>
    pageService.getPage("home")
  );
  const brands = dataBrands?.data?.brands || [];
  // Convert object signature to array
  const dataSignature = dataBrands?.data?.information || [];
  const signature = Object.keys(dataSignature).map((key) => ({
    key,
    ...dataSignature[key],
  }));

  // useMuatation handle submit email to subscribe
  const { execute } = useMutation(subscribeService.subscribe, {
    // Display success notification after submit successfully
    onSuccess: (data) => {
      console.log(data);
      message.success("Successfully");
    },
    // Display error notification after submit unsuccessfully
    onFail: (error) => {
      console.log(error);
      message.error("Failed");
    },
  });
  // ---------------------------------------- DEALCOUPON --------------------------------------------//
  const onSubscribes = (email) => {
    if (email) {
      execute?.(email);
    }
  };
  // ------------------------------------------ LIST PRODUCT FOR TAB ---------------------------------//
  const [selectTab, setSelectTab] = useState(TAB.FEATURED);
  // using useMemo handle out list matching for tab and return selectTab
  const hotProduct = useMemo(() => {
    let list = [];
    switch (selectTab) {
      case TAB.FEATURED:
        list = products?.filter((item) => item.featured);
        break;
      case TAB.ONSALE:
        list = products?.filter((item) => item.onSale);
        break;
      case TAB.RATED:
        list = products?.filter((item) => item.topRated);
        break;
      default:
        list;
        break;
    }
    return {
      list,
      selectTab,
    };
  }, [selectTab, products]);
  // ---------------------------------------- FEATURED PRODUCT -------------------------------------//
  const [cateTab, setCateTab] = useState("all");
  const featuredProduct = useMemo(() => {
    const listFeaturedProduct =
      cateTab === "all"
        ? products
        : products?.filter((item) => item.category?.slug === cateTab);
    return {
      categorise: [{ name: "All", slug: "all" }, ...categorise],
      listFeaturedProduct,
      cateTab,
    };
  }, [cateTab, products, categorise, setCateTab]);
  // ---------------------------------------- RENDER OWL PRODUCT ------------------------------------//
  // renderProduct handle changing tab and render suitable list
  const renderProduct = (data) => {
    const [lisProducts, setListProducts] = useState([]);

    useEffect(() => {
      setListProducts(data);
    }, [data]);

    const onChangTab = (tab) => {
      if (Object.values(TAB)?.includes(tab)) {
        if (tab !== selectTab) {
          setListProducts([]);
          setTimeout(() => {
            setSelectTab(tab);
          }, 200);
        }
      } else {
        if (tab !== cateTab) {
          setListProducts([]);
          setTimeout(() => {
            setCateTab(tab);
          }, 200);
        }
      }
    };

    return {
      lisProducts,
      onChangTab,
    };
  };
  // ---------------------------------------- LOADING ----------------------------------------------//
  const isLoading = useDebounce(
    loadingProducts || loadiCategorise || loadingBrands,
    300
  );
  return {
    products,
    hotProduct,
    renderProduct,
    brands,
    signature,
    categorise,
    isLoading,
    featuredProduct,
    onSubscribes,
  };
};

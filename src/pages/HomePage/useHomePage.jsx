import { productService } from "@/services/productService";
import { useEffect } from "react";
import { useState } from "react";

export const useHomePage = () => {
  const [products, setProducts] = useState();
  const [categories, setCategorise] = useState();
  const onProduct = async () => {
    try {
      const res = (await productService.getFeaturedProduct()) || {};
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  };
  const onCategorise = async () => {
    try {
      const res = (await productService.getProductCategorise()) || {};
      setCategorise(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onProduct();
    onCategorise();
  }, []);
  return { onProduct, products, categories };
};

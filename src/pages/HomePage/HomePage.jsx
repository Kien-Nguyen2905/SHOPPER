import Loading from "@/components/Loading/Loading";
import React from "react";
import BrandProduct from "./Components/BrandProduct";
import DealProduct from "./Components/DealProduct";
import FeaturedProduct from "./Components/FeaturedProduct";
import HotProduct from "./Components/HotProduct";
import Intro from "./Components/Intro";
import Signature from "./Components/Signature";
import Social from "./Components/Social";
import { useHomePage } from "./useHomePage";

const HomePage = () => {
  const {
    hotProduct,
    brands,
    renderProduct,
    signature,
    featuredProduct,
    isLoading,
    onSubscribes,
  } = useHomePage();
  if (isLoading) return <Loading></Loading>;
  return (
    <main className="main">
      <Intro />
      <HotProduct {...hotProduct} renderProduct={renderProduct} />
      <DealProduct {...hotProduct} />
      <BrandProduct listBrand={brands} />
      <div className="container">
        <hr className="mt-3 mb-6" />
      </div>
      <FeaturedProduct {...featuredProduct} renderProduct={renderProduct} />
      <div className="container">
        <hr className="mt-5 mb-0" />
      </div>
      <Signature listSignature={signature} />
      <Social getCoupon={onSubscribes} />
    </main>
  );
};

export default HomePage;

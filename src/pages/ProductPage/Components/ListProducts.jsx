import ProductCart from "@/components/ProductCart/ProductCart";
import SkeletonCard from "@/components/Skeleton/SkeletonCard";
import React from "react";

const ListProducts = ({ products, isLoadingProducts, errorProducts }) => {
  console.log(isLoadingProducts);
  if ((!isLoadingProducts && products?.length < 1) || errorProducts)
    return (
      <div className="products mb-3">
        <div className="row justify-content-center">There is no products</div>
      </div>
    );
  if (isLoadingProducts) return <SkeletonCard></SkeletonCard>;
  return (
    <div className="products mb-3">
      <div className="row justify-content-center">
        {products.map((product, index) => {
          return (
            <div key={product?.id || index} className="col-6 col-md-4 col-lg-4">
              <ProductCart isLoading={isLoadingProducts} item={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProducts;

import ProductCart from "@/components/ProductCart/ProductCart";
import React from "react";

const ListProducts = ({ products, isLoadingProducts, errorProducts }) => {
  console.log(products);
  if ((!isLoadingProducts && products?.length < 1) || errorProducts)
    return (
      <div className="products mb-3">
        <div className="row justify-content-center">There is no products</div>
      </div>
    );
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

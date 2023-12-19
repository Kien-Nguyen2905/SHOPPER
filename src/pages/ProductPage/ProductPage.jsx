import Nav from "@/components/Nav/Nav";
import Pagination from "@/components/Pagination/Pagination";
import { PATHS } from "@/constants/pathname";
import React from "react";
import { Link } from "react-router-dom";
import FilterProducts from "./Components/FilterProducts";
import ListProducts from "./Components/ListProducts";
import ToolBox from "./Components/ToolBox";
import { useProductPage } from "./useProductPage";
import Loading from "@/components/Loading/Loading";

const ProductPage = () => {
  const { listProductsProps, toolBoxProps, pagiProps, filterProductProps } =
    useProductPage();
  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">Product</h1>
        </div>
      </div>
      <Nav>
        <Nav.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Nav.Item>
        <Nav.Item isActive>Product</Nav.Item>
      </Nav>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <ToolBox {...toolBoxProps}></ToolBox>
              <ListProducts {...listProductsProps} />
              <Pagination {...pagiProps} />
            </div>
            <FilterProducts {...filterProductProps} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProductPage;

import BannerText from "@/components/Banner/BannerText";
import PageContainer from "@/components/PageContainer/PageContainer";
import React from "react";
import Account from "./Components/Account";
import Sidebar from "./Components/Sidebar";

const Dashboard = () => {
  return (
    <main className="main">
      <BannerText title="My Account" />
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              My Account
            </li>
          </ol>
        </div>
      </nav>
      <PageContainer>
        <div className="row">
          <Sidebar />
          <div className="col-md-8 col-lg-9">
            <div className="tab-content">
              <Account />
              <div
                className="tab-pane fade"
                id="tab-orders"
                role="tabpanel"
                aria-labelledby="tab-orders-link"
              >
                <p>No order has been made yet.</p>
                <a href="category.html" className="btn btn-outline-primary-2">
                  <span>GO SHOP</span>
                  <i className="icon-long-arrow-right" />
                </a>
                <br />
                <br />
                <table className="table table-cart table-mobile">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-col">
                        <div className="product">
                          <figure className="product-media">
                            <a href="#">
                              <img
                                src="assets/images/demos/demo-3/products/product-3.jpg"
                                alt="Product image"
                              />
                            </a>
                          </figure>
                          <h3 className="product-title">
                            <a href="#">Beige knitted</a>
                          </h3>
                        </div>
                      </td>
                      <td className="price-col text-center">$84.00</td>
                      <td className="quantity-col text-center">1 </td>
                      <td className="total-col text-center">$84.00</td>
                    </tr>
                    <tr>
                      <td className="product-col">
                        <div className="product">
                          <figure className="product-media">
                            <a href="#">
                              <img
                                src="assets/images/demos/demo-3/products/product-2.jpg"
                                alt="Product image"
                              />
                            </a>
                          </figure>
                          <h3 className="product-title">
                            <a href="#">Blue utility</a>
                          </h3>
                        </div>
                      </td>
                      <td className="price-col text-center">$76.00</td>
                      <td className="quantity-col text-center">1</td>
                      <td className="total-col text-center">$76.00 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="tab-pane fade"
                id="tab-address"
                role="tabpanel"
                aria-labelledby="tab-address-link"
              >
                <p>
                  The following addresses will be used on the checkout page by
                  default.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card card-dashboard">
                      <div className="card-body">
                        <h3 className="card-title">Billing Address</h3>
                        <p>
                          <strong>Fullname:</strong> Tran Nghia <br />
                          <strong>Email:</strong> trannghia@gmail.com <br />
                          <strong>Phone number:</strong> 098 9596 912 <br />
                          <br />
                          <a href="#">
                            Edit <i className="icon-edit" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card card-dashboard">
                      <div className="card-body">
                        <h3 className="card-title">Shipping Address</h3>
                        <p>
                          Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi{" "}
                          <br />
                          <br />
                          <a href="#">
                            Edit <i className="icon-edit" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tab-wishlist"
                role="tabpanel"
                aria-labelledby="tab-wishlist-link"
              >
                <table className="table table-wishlist table-mobile">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Stock Status</th>
                      <th />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-col">
                        <div className="product">
                          <figure className="product-media">
                            <a href="#">
                              <img
                                src="assets/images/demos/demo-3/products/product-4.jpg"
                                alt="Product image"
                              />
                            </a>
                          </figure>
                          <h3 className="product-title">
                            <a href="#">Beige knitted</a>
                          </h3>
                        </div>
                      </td>
                      <td className="price-col text-center">$84.00</td>
                      <td className="stock-col text-center">
                        <span className="in-stock">In stock</span>
                      </td>
                      <td className="action-col">
                        <button className="btn btn-block btn-outline-primary-2">
                          <i className="icon-cart-plus" />
                          Add to Cart{" "}
                        </button>
                      </td>
                      <td className="remove-col">
                        <button className="btn-remove">
                          <i className="icon-close" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-col">
                        <div className="product">
                          <figure className="product-media">
                            <a href="#">
                              <img
                                src="assets/images/demos/demo-3/products/product-5.jpg"
                                alt="Product image"
                              />
                            </a>
                          </figure>
                          <h3 className="product-title">
                            <a href="#">Blue utility</a>
                          </h3>
                        </div>
                      </td>
                      <td className="price-col text-center">$76.00</td>
                      <td className="stock-col text-center">
                        <span className="in-stock">In stock</span>
                      </td>
                      <td className="action-col">
                        <button className="btn btn-block btn-outline-primary-2">
                          <i className="icon-cart-plus" />
                          Add to Cart{" "}
                        </button>
                      </td>
                      <td className="remove-col">
                        <button className="btn-remove">
                          <i className="icon-close" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-col">
                        <div className="product">
                          <figure className="product-media">
                            <a href="#">
                              <img
                                src="assets/images/demos/demo-3/products/product-6.jpg"
                                alt="Product image"
                              />
                            </a>
                          </figure>
                          <h3 className="product-title">
                            <a href="#">Orange saddle lock</a>
                          </h3>
                        </div>
                      </td>
                      <td className="price-col text-center">$52.00</td>
                      <td className="stock-col text-center">
                        <span className="out-of-stock">Out of stock</span>
                      </td>
                      <td className="action-col">
                        <button className="btn btn-block btn-outline-primary-2 disabled">
                          Out of Stock
                        </button>
                      </td>
                      <td className="remove-col">
                        <button className="btn-remove">
                          <i className="icon-close" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </main>
  );
};

export default Dashboard;

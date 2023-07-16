import React from "react";

const CategoriseProduct = ({ tab, slug, onChangeTab }) => {
  return (
    <div className="heading heading-flex mb-3">
      <div className="heading-left">
        <h2 className="title">Featured Products</h2>
      </div>
      <div className="heading-right">
        <ul
          className="nav nav-pills nav-border-anim justify-content-center"
          role="tablist"
        >
          {tab?.length > 0 &&
            tab?.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link ${item.slug === slug ? "active" : ""} `}
                  data-toggle="tab"
                  role="tab"
                  onClick={() => onChangeTab(item.slug)}
                >
                  {item.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriseProduct;

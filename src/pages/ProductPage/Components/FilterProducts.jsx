import React from "react";
import CheckboxFilter from "./CheckboxFilter";

const FilterProducts = ({
  categorise,
  loadingCategorise,
  errorCategorise,
  activeCategory,
  onCateChange,
}) => {
  const onFilterChange = (id, isChecked) => {
    if (isChecked) {
      onCateChange(id);
    } else {
      onCateChange("");
    }
  };
  return (
    <aside className="col-lg-3 order-lg-first">
      <div className="sidebar sidebar-shop">
        <div className="widget widget-clean">
          <label>Filters:</label>
          <a
            onClick={() => onFilterChange("")}
            className="sidebar-filter-clear"
          >
            Clean All
          </a>
        </div>
        <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <a data-toggle="collapse" href="#widget-1" role="button">
              {" "}
              Category{" "}
            </a>
          </h3>
          <div className="collapse show" id="widget-1">
            <div className="widget-body">
              <div className="filter-items filter-items-count">
                {categorise?.length > 0 &&
                  categorise?.map((item, index) => (
                    <div className="filter-item" key={index}>
                      <CheckboxFilter
                        id={item.id || index}
                        checked={activeCategory === item.id}
                        label={item.name}
                        onChange={(value) =>
                          onFilterChange(item?.id, value.target.checked)
                        }
                      />
                      {/* <span className="item-count">3</span> */}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <a
              data-toggle="collapse"
              href="#widget-2"
              role="button"
              aria-expanded="true"
              aria-controls="widget-5"
            >
              {" "}
              Price{" "}
            </a>
          </h3>
          <div className="collapse show" id="widget-2">
            <div className="widget-body">
              <div className="filter-price">
                <div className="filter-price-text">
                  {" "}
                  Price Range: <span id="filter-price-range" />
                </div>
                <div id="price-slider" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </aside>
  );
};

export default FilterProducts;

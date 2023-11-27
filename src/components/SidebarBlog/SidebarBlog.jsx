import { PATHS } from "@/constants/pathname";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarBlog = ({
  onCateChange,
  cateList,
  qtyBlogOfCate,
  tagList,
  onSearch,
  searchBlog,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  return (
    <aside className="col-lg-3">
      <div className="sidebar">
        <div className="widget widget-search">
          <h3 className="widget-title">Search</h3>
          <form action="#">
            <label htmlFor="ws" className="sr-only">
              Search in blog
            </label>
            <input
              type="search"
              className="form-control"
              name="ws"
              id="ws"
              value={searchBlog}
              onChange={onSearch}
              placeholder="Search in blog"
              required
            />
            <button type="submit" className="btn">
              <i className="icon-search" />
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        <div className="widget widget-cats">
          <h3 className="widget-title">Categories</h3>
          <ul>
            {cateList?.length > 0 &&
              cateList?.map((item, index) => (
                <li key={index}>
                  <Link
                    to={
                      searchBlog
                        ? `${PATHS.BLOG}?category=${item?.id}&search=${searchBlog}`
                        : `${PATHS.BLOG}?category=${item?.id}`
                    }
                    onClick={() => {
                      onCateChange(item?.id);
                      setActiveCategoryId(item?.id);
                    }}
                    className={activeCategoryId === item?.id ? "active" : ""}
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="widget widget-banner-sidebar">
          <div className="banner-sidebar-title">ad box 280 x 280</div>
          <div className="banner-sidebar banner-overlay">
            <a href="#">
              <img src="/assets/images/blog/sidebar/banner.jpg" alt="banner" />
            </a>
          </div>
        </div>
        <div className="widget">
          <h3 className="widget-title">Browse Tags</h3>
          <div className="tagcloud">
            {tagList?.length > 0 &&
              tagList?.map((item, index) => (
                <a href="#" key={index}>
                  {item?.name}
                  {/* <span>{qtyBlogOfCate(item?.name)}</span> */}
                </a>
              ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarBlog;

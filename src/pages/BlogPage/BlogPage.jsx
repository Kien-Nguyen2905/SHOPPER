import React from "react";
import { useBlogPage } from "./useBlogPage";
import BlogItem from "./BlogItem";
import SidebarBlog from "@/components/SidebarBlog/SidebarBlog";
import Pagination from "@/components/Pagination/Pagination";

const BlogPage = () => {
  const { blogList, sideBarProp, pagiProps } = useBlogPage();
  console.log(blogList);
  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{
          backgroundImage: 'url("assets/images/page-header-bg.jpg")',
        }}
      >
        <div className="container">
          <h1 className="page-title">Blog</h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog
            </li>
          </ol>
        </div>
      </nav>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="entry-container max-col-2" data-layout="fitRows">
                {blogList?.blogs?.length > 0 &&
                  blogList?.blogs?.map((item, index) => (
                    <div className="entry-item col-sm-6">
                      <BlogItem key={index} data={item} />
                    </div>
                  ))}
              </div>
              <Pagination {...pagiProps} />
            </div>
            <SidebarBlog {...sideBarProp} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;

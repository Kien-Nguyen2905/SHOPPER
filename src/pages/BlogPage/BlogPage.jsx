import React from "react";
import { useBlogPage } from "./useBlogPage";
import SidebarBlog from "@/components/SidebarBlog/SidebarBlog";
import BlogList from "./Components/BlogList";
import Nav from "@/components/Nav/Nav";
import { PATHS } from "@/constants/pathname";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const { blogList, isLoadingBlog, sideBarProp, pagiProps } = useBlogPage();

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
      <Nav>
        <Nav.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Nav.Item>
        <Nav.Item isActive>Blog</Nav.Item>
      </Nav>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <BlogList
              blogList={blogList}
              loading={isLoadingBlog}
              pani={pagiProps}
            />
            <SidebarBlog {...sideBarProp} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;

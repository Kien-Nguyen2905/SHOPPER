import React from "react";
import BlogItem from "../BlogItem";
import Pagination from "@/components/Pagination/Pagination";
import SkeletonBlog from "@/components/Skeleton/SkeletonBlog";

const BlogList = ({ blogList, pani, loading }) => {
  if (loading) return <SkeletonBlog></SkeletonBlog>;
  return (
    <div className="col-lg-9">
      <div className="entry-container max-col-2" data-layout="fitRows">
        {blogList?.blogs?.length > 0 ? (
          blogList?.blogs?.map((item, index) => (
            <div className="entry-item col-sm-6" key={index}>
              <BlogItem data={item} />
            </div>
          ))
        ) : (
          <div className="products mb-3">
            <div className="row justify-content-center">
              There is no products
            </div>
          </div>
        )}
      </div>
      <Pagination {...pani} />
    </div>
  );
};

export default BlogList;

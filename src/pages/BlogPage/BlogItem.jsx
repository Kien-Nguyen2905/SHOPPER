import { PATHS } from "@/constants/pathname";
import { formatDate } from "@/utils/formatDate";
import React from "react";
import { Link } from "react-router-dom";
const BlogItem = ({ data }) => {
  return (
    <article className="entry entry-grid">
      <figure className="entry-media">
        <Link to={PATHS.BLOG + `/${data?.slug}`}>
          <img src={data?.image} alt="image desc" />
        </Link>
      </figure>
      <div className="entry-body">
        <div className="entry-meta">
          <span>{formatDate(new Date(data?.updatedAt))}</span>
          <span className="meta-separator">|</span>
          <span className="entry-author">
            by <Link to={PATHS.BLOG + `/${data?.slug}`}>{data?.author}</Link>
          </span>
        </div>
        <h2 className="entry-title">
          <a href="blog-single.html">{data?.name}</a>
        </h2>
        <div className="entry-content">
          <Link to={PATHS.BLOG + `/${data?.slug}`} className="read-more">
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;

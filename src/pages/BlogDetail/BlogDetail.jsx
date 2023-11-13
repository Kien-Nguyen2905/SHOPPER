import React, { useEffect } from "react";
import { useBlogDetail } from "./useBlogDetail";
import { formatDate } from "@/utils/formatDate";
import SidebarBlog from "@/components/SidebarBlog/SidebarBlog";
import { useBlogPage } from "../BlogPage/useBlogPage";
import OwlCarousel from "react-owl-carousel";
import BlogItem from "../BlogPage/BlogItem";
import ShareLink from "@/components/ShareLink/ShareLink";
import Nav from "@/components/Nav/Nav";
import { Link } from "react-router-dom";
import { PATHS } from "@/constants/pathname";
import Loading from "@/components/Loading/Loading";

const BlogDetail = () => {
  const pathUrl = window.location.href;
  const { dataDetail, getTag, listRelate, relatedBlog, isLoadingDetail } =
    useBlogDetail();
  const { sideBarProp } = useBlogPage();
  useEffect(() => {
    listRelate(dataDetail?.category?.id);
  }, [dataDetail?.category?.id]);
  if (!dataDetail?.updatedAt) return;
  if (isLoadingDetail) return <Loading></Loading>;
  return (
    <main className="main">
      <Nav>
        <Nav.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={PATHS.BLOG}>Blog</Link>
        </Nav.Item>
        <Nav.Item>{dataDetail?.name}</Nav.Item>
      </Nav>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <article className="entry single-entry">
                <div className="entry-body">
                  <figure className="entry-media">
                    <img
                      src="assets/images/blog/single/1.jpg"
                      alt="image desc"
                    />
                  </figure>
                  <h1 className="entry-title entry-title-big">
                    {dataDetail?.name}
                  </h1>
                  <div className="entry-meta">
                    <span>{formatDate(new Date(dataDetail?.updatedAt))}</span>
                    <span className="meta-separator">|</span>
                    <span className="entry-author">
                      {" "}
                      by <a href="#">{dataDetail?.author}</a>
                    </span>
                  </div>
                  <div
                    className="entry-content editor-content"
                    dangerouslySetInnerHTML={{
                      __html: dataDetail?.description,
                    }}
                  ></div>
                  <div className="entry-footer row no-gutters flex-column flex-md-row">
                    <div className="col-md">
                      <div className="entry-tags">
                        <span>Tags:</span>
                        {dataDetail?.tags?.length > 0 &&
                          dataDetail?.tags?.map((item, index) => (
                            <a key={index} href="#">
                              {getTag(item)?.[0]?.name}
                            </a>
                          ))}
                      </div>
                    </div>
                    <div className="col-md-auto mt-2 mt-md-0">
                      <div
                        className="social-icons social-icons-color"
                        style={{ gap: "0 5px" }}
                      >
                        <span className="social-label">Share this post:</span>
                        <ShareLink title={"Facebook"} path={pathUrl}>
                          <i className="icon-facebook-f" />
                        </ShareLink>
                        <ShareLink
                          type="twitter"
                          title={"Twitter"}
                          path={pathUrl}
                        >
                          <i className="icon-twitter" />
                        </ShareLink>
                        <ShareLink
                          type="instagram"
                          title={"Instagram"}
                          path={pathUrl}
                        >
                          <i className="icon-instagram" />
                        </ShareLink>
                        <ShareLink
                          type="pinterest"
                          title={"Pinterest"}
                          path={pathUrl}
                        >
                          <i className="icon-pinterest" />
                        </ShareLink>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              {/* <nav className="pager-nav" aria-label="Page navigation">
                <a
                  className="pager-link pager-link-prev"
                  href="blog-single.html"
                  aria-label="Previous"
                  tabIndex={-1}
                >
                  {" "}
                  Previous Post{" "}
                  <span className="pager-link-title">
                    Cras iaculis ultricies nulla
                  </span>
                </a>
                <a
                  className="pager-link pager-link-next"
                  href="blog-single.html"
                  aria-label="Next"
                  tabIndex={-1}
                >
                  {" "}
                  Next Post{" "}
                  <span className="pager-link-title">
                    Praesent placerat risus
                  </span>
                </a>
              </nav> */}
              <div className="related-posts">
                <h3 className="title">Related Posts</h3>
                {relatedBlog?.length > 0 ? (
                  <OwlCarousel
                    className="owl-carousel owl-simple"
                    dots={true}
                    margin={20}
                    loop={false}
                    responsive={{
                      0: {
                        items: 1,
                      },
                      480: {
                        items: 2,
                      },
                      768: {
                        items: 3,
                      },
                    }}
                  >
                    {relatedBlog?.length > 0 &&
                      relatedBlog?.map((item, index) => (
                        <BlogItem data={item} key={index} />
                      ))}
                  </OwlCarousel>
                ) : (
                  <h3 className="title">Don't have related posts</h3>
                )}
              </div>
            </div>
            <SidebarBlog {...sideBarProp} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;

import { useQuery } from "@/hooks/useQuery";
import { blogService } from "@/services/blogService";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const useBlogDetail = () => {
  const { slug } = useParams();
  const [relatedBlog, setRelatedBlog] = useState();
  const { data: dataTag } = useQuery(blogService.getTag);
  const { data: dataDetail } = useQuery(
    () => blogService.getBlogDetail(slug),
    [slug]
  );
  const getTag = (idTag) => {
    return dataTag?.blogs?.filter((item) => item?.id == idTag);
  };
  const listRelate = async (idCate) => {
    if (!idCate) return;
    console.log(idCate);
    try {
      const repon = await blogService.getRelatedBlog(idCate);
      setRelatedBlog(repon?.blogs);
    } catch (error) {
      console.log(error);
    }
  };
  return { dataDetail, getTag, listRelate, relatedBlog };
};

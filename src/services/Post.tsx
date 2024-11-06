import { axiosInstance } from "../config/axiosConfig";

export const getPopularPosts = async () => {
  try {
    const response = await axiosInstance.get("/post/popular");
    return response.data;
  } catch (error) {
    console.error("Error fetching popular posts:", error);
    return [];
  }
};

export const getDetailPost = async (slug: string) => {
  try {
    const response = await axiosInstance.get(`/post/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching popular posts:", error);
    return [];
  }
};

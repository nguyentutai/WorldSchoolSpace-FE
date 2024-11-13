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

export const getCategoryDetailPost = async (slug: string) => {
  try {
    const response = await axiosInstance.get(`/category/${slug}/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching popular posts:", error);
    return [];
  }
};

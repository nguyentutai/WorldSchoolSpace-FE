import { axiosInstance } from "../config/axiosConfig";
import { IPostComment } from "../types/IBlogDetail";

export const postComment = async (id: number, data: IPostComment) => {
  try {
    const response = await axiosInstance.post(`post/${id}/comment`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getComment = async (id: number) => {
  try {
    const response = await axiosInstance.get(`post/${id}/comments`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const deleteComment = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`comment/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

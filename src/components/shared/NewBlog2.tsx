import React, { useEffect, useState } from "react";
import { Post } from "../interfaces/post";
import { axiosInstance } from "../../config/axiosConfig";
import { Category } from "../interfaces/category";
import axios from "axios";

interface NewBlog2Props {
  categoryId: string | null;
}

const NewBlog2: React.FC<NewBlog2Props> = ({ categoryId }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [postsByCategory, setPostsByCategory] = useState<{
    [key: string]: Post[];
  }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCategories, setVisibleCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/category");
        console.log("Danh mục:", response.data);
        setCategories(response.data);

        // Xáo trộn danh mục và lấy 3 danh mục đầu tiên
        const shuffledCategories = [...response.data].sort(
          () => Math.random() - 0.5
        );
        setVisibleCategories(shuffledCategories.slice(0, 3));
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Đã xảy ra lỗi không xác định");
        }
      }
    };

    fetchCategories();
  }, []);

  const getFullImagePath = (image: string) => {
    if (!image.startsWith("http")) {
      return `http://127.0.0.1:8000/storage/${image}`;
    }
    return image;
  };

  useEffect(() => {
    const fetchPostsForCategories = async () => {
      try {
        const postsMap: { [key: string]: Post[] } = {};
        for (const category of categories) {
          const response = await axiosInstance.get(
            `/categories/${category.id}/posts`
          );
          postsMap[category.id] = response.data.posts.sort(
            () => Math.random() - 0.5
          );
        }
        setPostsByCategory(postsMap);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Đã xảy ra lỗi không xác định");
        }
      } finally {
        setLoading(false);
      }
    };

    if (categories.length > 0) {
      fetchPostsForCategories();
    }
  }, [categories]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {visibleCategories.map((cat) => {
          // Kiểm tra nếu danh mục có bài viết
          const posts = postsByCategory[cat.id];
          if (!posts || posts.length === 0) {
            return null; // Ẩn danh mục này nếu không có bài viết
          }

          return (
            <li
              key={cat.id}
              style={{
                flex: "1 0 30%",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <div className="flex gap-5 items-end border-b">
                <span className="md:text-xl text-lg font-semibold text-gray-800 border-b border-red-800 whitespace-nowrap">
                  {cat.name}
                </span>
                {cat.children && cat.children.length > 0 && (
                  <ul className="flex space-x-4 text-gray-600 md:text-sm text-xs whitespace-nowrap overflow-x-scroll scrollbar-hide">
                    {cat.children.map((child) => (
                      <li key={child.id}>{child.name}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex mb-4 mt-4">
                {posts.length > 0 ? (
                  <div className="flex flex-col w-full">
                    {/* Bài viết đầu tiên: Hiển thị ảnh, tên và tóm tắt */}
                    {posts[0].image && (
                      <div className="flex-col mb-4 w-full">
                        <img
                          src={getFullImagePath(posts[0].image)}
                          alt={posts[0].title}
                          className="w-full h-52 mb-2"
                        />
                        <div className="flex-1 ml-4">
                          <h2 className="font-semibold text-base text-gray-800">
                            {posts[0].title}
                          </h2>
                          <p className="md:text-sm text-xs text-gray-600">
                            {posts[0].excerpt}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Bài viết thứ hai: Chỉ hiển thị tên và tóm tắt */}
                    {posts.length > 1 && (
                      <div className="mt-4">
                        <h3 className="font-semibold text-base text-gray-800">
                          {posts[1].title}
                        </h3>
                        <p className="md:text-sm text-xs text-gray-600">
                          {posts[1].excerpt}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p>Không có bài viết nào trong danh mục này.</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewBlog2;

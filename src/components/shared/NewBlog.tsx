import React, { useEffect, useState } from "react";
import { Post } from "../interfaces/post";
import { axiosInstance } from "../../config/axiosConfig";
import { Category } from "../interfaces/category";
import axios from "axios";

interface NewBlogProps {
  categoryId: string | null;
}

const NewBlog: React.FC<NewBlogProps> = ({ categoryId }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [postsByCategory, setPostsByCategory] = useState<{
    [key: string]: Post[];
  }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/category");
        console.log("Danh mục:", response.data);
        setCategories(response.data);
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
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {categories.map((cat) => {
          // Kiểm tra nếu danh mục có bài viết
          const posts = postsByCategory[cat.id];
          if (!posts || posts.length === 0) {
            return null; // Ẩn danh mục này nếu không có bài viết
          }

          return (
            <li key={cat.id}>
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

              <div className="flex mb-4">
                {posts.length > 0 ? (
                  <>
                    {posts.slice(0, 2).map((post, index) => (
                      <div
                        key={post.id}
                        className={`flex ${index % 2 === 0 ? "pr-2" : "pl-1"}`}
                      >
                        {post.image && index % 2 === 0 && (
                          <img
                            src={getFullImagePath(post.image)}
                            alt={post.title}
                            className="w-48 h-32 mb-2 p-4"
                          />
                        )}
                        <div className="flex-1 w-44">
                          <h2 className="font-semibold text-base text-gray-800">
                            {post.title}
                          </h2>
                          <p className="md:text-sm text-xs text-gray-600">
                            {post.excerpt}
                          </p>
                        </div>
                        {index % 2 === 0 && (
                          <div className="border-l border-gray-300 h-44 mx-4"></div>
                        )}
                      </div>
                    ))}
                  </>
                ) : (
                  <p>Không có bài viết nào trong danh mục này.</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t pt-5 border-b pb-5 mb-6">
                {posts.length > 2 ? (
                  posts.slice(2, 5).map((post) => (
                    <div
                      key={post.id}
                      className="flex ms-5 relative items-start"
                    >
                      <span className="text-gray-300 text-3xl mr-2 -mt-2">
                        •
                      </span>
                      <h3 className="md:text-md text-sm font-semibold text-gray-800">
                        {post.title}
                      </h3>
                    </div>
                  ))
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

export default NewBlog;

import React, { useEffect, useState } from "react";
import { Post } from "../interfaces/post";
import { axiosInstance } from "../../config/axiosConfig";
import { Category } from "../interfaces/category";
import axios from "axios";
import { Link } from "react-router-dom";

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
            `/category/${category.slug}/posts`
          );
          postsMap[category.slug] = response.data.posts.sort(
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

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {loading ? (
        <div className="animate-pulse">
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {Array(3)
              .fill("")
              .map((_, index) => (
                <li key={index} className="mb-4">
                  <div className="flex gap-5 items-end border-b pb-2 mb-2">
                    <div className="bg-gray-300 h-6 w-32 rounded"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-56 h-44 bg-gray-300 rounded mb-2"></div>
                    <div className="flex-1 w-44">
                      <div className="h-6 bg-gray-300 rounded mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t pt-5 border-b pb-5 mb-6">
                    {Array(3)
                      .fill("")
                      .map((_, idx) => (
                        <div
                          key={idx}
                          className="h-6 bg-gray-300 rounded"
                        ></div>
                      ))}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {categories.map((cat) => {
            const posts = postsByCategory[cat.slug];
            if (!posts || posts.length === 0) {
              return null;
            }

            return (
              <li key={cat.slug}>
                <div className="flex gap-5 items-end border-b">
                  <Link
                    to={`/news/${cat.slug}`}
                    className="md:text-xl text-lg font-semibold text-gray-800 border-b border-red-800 whitespace-nowrap"
                  >
                    {cat.name}
                  </Link>
                  {cat.children && cat.children.length > 0 && (
                    <ul className="flex space-x-4 text-gray-600 md:text-sm text-xs whitespace-nowrap overflow-x-scroll scrollbar-hide">
                      {cat.children.map((child) => (
                        <Link to={`/categories/${child.slug}`} key={child.slug}>
                          {child.name}
                        </Link>
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
                          className={`flex ${
                            index % 2 === 0 ? "pr-0" : "pl-0"
                          }`}
                        >
                          {post.image && index % 2 === 0 && (
                            <img
                              src={getFullImagePath(post.image)}
                              alt={post.title}
                              className="w-56 h-44 mb-2 p-2"
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
      )}
    </div>
  );
};

export default NewBlog;

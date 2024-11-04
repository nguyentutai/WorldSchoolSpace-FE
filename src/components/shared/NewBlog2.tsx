import React, { useEffect, useState } from "react";
import { Post } from "../interfaces/post";
import { axiosInstance } from "../../config/axiosConfig";
import { Category } from "../interfaces/category";
import axios from "axios";
import { Link } from "react-router-dom";

interface NewBlog2Props {
  categoryId: string | null;
}

const NewBlog2: React.FC<NewBlog2Props> = ({ categoryId }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [postsByCategory, setPostsByCategory] = useState<{
    [key: string]: Post[];
  }>({});
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCategories, setVisibleCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/category");
        setCategories(response.data);
        setVisibleCategories(response.data.slice(0, 3));
      } catch (err: unknown) {
        handleError(err);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  const handleError = (err: unknown) => {
    if (axios.isAxiosError(err)) {
      setError(err.message);
    } else if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Đã xảy ra lỗi không xác định");
    }
  };

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
        for (const category of visibleCategories) {
          const response = await axiosInstance.get(
            `/category/${category.slug}/posts`
          );
          postsMap[category.slug] = response.data.posts.sort(
            () => Math.random() - 0.5
          );
        }
        setPostsByCategory(postsMap);
      } catch (err: unknown) {
        handleError(err);
      } finally {
        setLoadingPosts(false);
      }
    };

    if (visibleCategories.length > 0) {
      fetchPostsForCategories();
    }
  }, [visibleCategories]);

  const renderSkeleton = () => (
    <li
      style={{
        width: "330px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div className="flex gap-5 items-end border-b pb-2">
        <div className="bg-gray-300 w-[300px] h-6 rounded animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-gray-300 w-full h-52 rounded animate-pulse"></div>
        <div className="bg-gray-300 h-4 w-[300px] rounded animate-pulse"></div>
        <div className="bg-gray-300 h-3 w-[300px] rounded animate-pulse"></div>
      </div>
    </li>
  );

  const isLoading = loadingCategories || loadingPosts;

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          display: "flex",
          gap: "20px",
          flexDirection: "row",
          flexWrap: "nowrap",
        }}
      >
        {isLoading
          ? Array(3)
              .fill(null)
              .map((_, index) => (
                <React.Fragment key={index}>{renderSkeleton()}</React.Fragment>
              ))
          : visibleCategories.map((cat) => {
              const posts = postsByCategory[cat.slug];
              if (!posts || posts.length === 0) {
                return null;
              }

              return (
                <li
                  key={cat.slug}
                  style={{
                    width: "330px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                    boxSizing: "border-box",
                  }}
                >
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
                          <Link
                            to={`/categories/${child.slug}`}
                            key={child.slug}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex mb-4 mt-4">
                    {posts.length > 0 ? (
                      <div className="flex flex-col w-full ">
                        {posts[0].image && (
                          <div className="flex-col mb-4 w-full">
                            <img
                              src={getFullImagePath(posts[0].image)}
                              alt={posts[0].title}
                              className="w-full h-52 mb-2"
                            />
                            <div className="flex-1 ml-2">
                              <h2 className="font-semibold text-base text-gray-800">
                                {posts[0].title}
                              </h2>
                              <p className="md:text-sm text-xs text-gray-600">
                                {posts[0].excerpt}
                              </p>
                            </div>
                          </div>
                        )}

                        {posts.length > 1 && (
                          <div className="mt-4 ml-2">
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

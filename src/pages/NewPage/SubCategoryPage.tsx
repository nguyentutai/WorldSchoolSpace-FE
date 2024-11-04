import { useParams, Link } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosConfig";
import { Category } from "../../components/interfaces/category";
import { Post } from "../../components/interfaces/post";
import SubCategoryPageSkeleton from "./SubCategoryPageSkeleton";
import axios from "axios";

const SubCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [subCategory, setSubCategory] = useState<Category | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [otherSubCategories, setOtherSubCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchSubCategoryAndPosts = async () => {
      setLoading(true);
      try {
        const { data: categories } = await axiosInstance.get("/category");
        if (!categories || categories.length === 0) {
          throw new Error("No categories found.");
        }

        const selectedSubCategory = categories
          .flatMap((cat: Category) =>
            cat.children
              ? cat.children.map((child) => ({ ...child, parent: cat }))
              : []
          )
          .find((child: Category) => child.slug === slug);

        if (!selectedSubCategory) {
          throw new Error("Danh mục con không tồn tại.");
        }

        setSubCategory(selectedSubCategory);

        const { data: postsResponse } = await axiosInstance.get(
          `/category/${selectedSubCategory.slug}/posts`
        );
        setPosts(postsResponse.posts);

        if (selectedSubCategory.parent) {
          const siblings =
            selectedSubCategory.parent.children?.filter(
              (child: Category) => child.slug !== selectedSubCategory.slug
            ) || [];

          const postsPromises = siblings.map(async (sibling: Category) => {
            const { data: siblingPostsResponse } = await axiosInstance.get(
              `/category/${sibling.slug}/posts`
            );
            return { sibling, posts: siblingPostsResponse.posts };
          });

          const siblingsWithPosts = await Promise.all(postsPromises);
          setOtherSubCategories(siblingsWithPosts);
        }
      } catch (err: unknown) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubCategoryAndPosts();
  }, [slug]);

  const handleError = (err: unknown) => {
    if (axios.isAxiosError(err)) {
      setError(err.message);
    } else if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Đã xảy ra lỗi không xác định");
    }
  };

  const getFullImagePath = (image: string) =>
    image.startsWith("http") ? image : `http://127.0.0.1:8000/storage/${image}`;

  if (loading) return <SubCategoryPageSkeleton />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-5xl mx-auto px-5 md:px-0">
      {subCategory && posts.length > 0 ? (
        <div>
          <div className="bg-white border-b border-gray-200">
            <div className="px-4 py-2 flex gap-5 items-center">
              {subCategory.parent && (
                <div className="md:text-xl text-lg font-semibold">
                  <Link
                    to={`/categories/${subCategory.parent.slug}`}
                    className={`md:text-2xl text-2xl font-semibold ${
                      window.location.pathname.includes(subCategory.parent.slug)
                        ? "underline decoration-red-500"
                        : ""
                    }`}
                  >
                    {subCategory.parent.name}
                  </Link>
                </div>
              )}
              {subCategory.parent?.children && (
                <ul className="flex space-x-4 text-sm px-4 py-2 mt-3">
                  {subCategory.parent.children.map((child: Category) => (
                    <Link to={`/categories/${child.slug}`} key={child.slug}>
                      <li
                        className={`font-semibold ${
                          window.location.pathname.includes(child.slug)
                            ? "underline decoration-red-500"
                            : ""
                        }`}
                      >
                        {child.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="flex mt-5">
            <div className="flex-1 mr-4">
              {posts.length > 0 && (
                <div className="md:col-span-8 col-span-12 flex bg-gray-100">
                  <img
                    src={getFullImagePath(posts[0].image)}
                    alt={posts[0].title}
                    className="max-w-[480px] h-auto"
                  />
                  <div className="ml-4 flex flex-col mt-5">
                    <Link
                      to={`/posts/${posts[0].slug}`}
                      className="font-semibold text-lg mb-2"
                    >
                      {posts[0].title}
                    </Link>
                    <span className="md:text-sm text-xs">
                      {posts[0].excerpt}
                    </span>
                  </div>
                </div>
              )}
              <div className="border-b border-gray-300 h-auto mt-5"></div>
              <div className="flex flex-col mb-5">
                <div className="md:col-span-8 col-span-12 w-full">
                  {posts.slice(1).map((item) => (
                    <div key={item.id} className="border-b py-4 w-full">
                      <Link
                        to={`/posts/${item.slug}`}
                        className="flex flex-col gap-2 w-full"
                      >
                        <h2 className="md:text-lg text-sm font-semibold">
                          {item.title}
                        </h2>
                        <div className="flex gap-2">
                          <img
                            src={getFullImagePath(item.image)}
                            alt={item.title}
                            className="max-w-44 w-full h-fit"
                          />
                          <div>
                            <span className="md:text-sm text-xs">
                              {item.excerpt}
                            </span>
                            <div className="flex items-center gap-2 text-gray-400">
                              <FaMessage className="size-3" />
                              <span className="text-xs">{item.views}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-l border-gray-300 h-[1010px] mx-4"></div>
            <div className="w-1/4">
              <div className="md:col-span-7 col-span-12">
                {otherSubCategories.length > 0 && (
                  <div>
                    {otherSubCategories.map(({ sibling, posts }) => (
                      <div key={sibling.slug} className="py-4">
                        <h4 className="md:text-xl text-lg font-semibold text-gray-800 border-b border-red-800">
                          {sibling.name}
                        </h4>
                        {posts && posts.length > 0 ? (
                          <div className="flex flex-col">
                            <div className="border-b py-2">
                              <img
                                src={getFullImagePath(posts[0].image)}
                                alt={posts[0].title}
                                className="w-full h-44 object-cover"
                              />
                              <div className="bg-gray-100 p-4">
                                <h5 className="text-sm font-semibold mb-3">
                                  {posts[0].title}
                                </h5>
                                <p className="text-xs">{posts[0].excerpt}</p>
                              </div>
                            </div>
                            {posts.slice(1, 3).map((subPost) => (
                              <Link
                                to={`/posts/${subPost.slug}`}
                                key={subPost.id}
                                className="flex flex-col gap-2 border-b py-2"
                              >
                                <h5 className="text-sm font-semibold">
                                  {subPost.title}
                                </h5>
                                <p className="text-xs">{subPost.excerpt}</p>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs">Không có bài viết nào khác.</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold">
            Không có bài viết nào trong danh mục này.
          </h2>
        </div>
      )}
    </div>
  );
};

export default SubCategoryPage;

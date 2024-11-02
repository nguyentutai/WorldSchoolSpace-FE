import { useParams } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosConfig";
import { Category } from "../../components/interfaces/category";
import { Post } from "../../components/interfaces/post";
import axios from "axios";

const NewPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [randomCategory, setRandomCategory] = useState<Category | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [subPosts, setSubPosts] = useState<{ [key: string]: Post[] }>({});

  useEffect(() => {
    const fetchCategoriesAndPosts = async () => {
      try {
        const categoriesResponse = await axiosInstance.get("/category");
        const categories = categoriesResponse.data;
        if (categories.length === 0) throw new Error("No categories found.");

        const selectedCategory = categories.find(
          (cat: Category) => cat.slug === slug
        );

        if (selectedCategory) {
          setRandomCategory(selectedCategory);

          const postsResponse = await axiosInstance.get(
            `/category/${selectedCategory.slug}/posts`
          );
          setPosts(postsResponse.data.posts);

          const subPostsData: { [key: string]: Post[] } = {};
          if (selectedCategory.children) {
            await Promise.all(
              selectedCategory.children.map(async (child: any) => {
                const childPostsResponse = await axiosInstance.get(
                  `/category/${child.slug}/posts`
                );
                subPostsData[child.slug] = childPostsResponse.data.posts;
              })
            );
          }
          setSubPosts(subPostsData);
        } else {
          setError("Danh mục không tồn tại.");
        }
      } catch (err: unknown) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoriesAndPosts();
  }, [slug]);

  const handleError = (err: unknown) => {
    if (axios.isAxiosError(err)) setError(err.message);
    else if (err instanceof Error) setError(err.message);
    else setError("Đã xảy ra lỗi không xác định");
  };

  const getFullImagePath = (image: string) =>
    image.startsWith("http") ? image : `http://127.0.0.1:8000/storage/${image}`;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-5xl mx-auto px-5 md:px-0">
      {randomCategory && posts.length > 0 && (
        <div key={randomCategory.slug}>
          <div className="bg-white border-b border-gray-200">
            <div className="px-4 py-2 flex gap-5 items-end">
              <div className="md:text-xl text-lg font-semibold">
                {randomCategory.name}
              </div>
              {randomCategory.children &&
                randomCategory.children.length > 0 && (
                  <ul className="flex space-x-4 text-sm">
                    {randomCategory.children.map((child) => (
                      <Link to={`/categories/${child.slug}`} key={child.slug}>
                        {child.name}
                      </Link>
                    ))}
                  </ul>
                )}
            </div>
          </div>

          <div className="px-4 py-6">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6">
              <div>
                <img
                  className="w-full h-full"
                  src={getFullImagePath(posts[0].image)}
                  alt=""
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold md:text-lg text-base">
                  {posts[0].title}
                </h2>
                <p>{posts[0].excerpt}</p>
                <div className="mt-2 flex items-center gap-2 text-gray-400">
                  <FaMessage className="size-4" />
                  <span className="text-sm">28</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 py-6">
              {posts.slice(1, 5).map((post) => (
                <div key={post.id} className="w-full flex flex-col gap-1">
                  <img
                    className="w-full"
                    src={getFullImagePath(post.image)}
                    alt={post.title}
                  />
                  <h3 className="line-clamp-2">{post.title}</h3>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="md:col-span-5 col-span-12">
                {posts.slice(0, 8).map((item) => (
                  <Link
                    to={`/posts/${item.slug}`}
                    key={item.id}
                    className="flex flex-col gap-2 border-b py-4"
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
                ))}
              </div>

              <div className="md:col-span-7 col-span-12">
                {randomCategory.children &&
                  randomCategory.children.length > 0 && (
                    <div>
                      {randomCategory.children.map((child) => (
                        <div key={child.slug} className="py-4">
                          <h4 className="md:text-xl text-lg font-semibold text-gray-800 border-b border-red-800 whitespace-nowrap w-auto">
                            {child.name}
                          </h4>

                          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
                            <div>
                              {subPosts[child.slug] &&
                                subPosts[child.slug].length > 0 && (
                                  <div className="flex-col gap-4 border-b py-2">
                                    <img
                                      src={getFullImagePath(
                                        subPosts[child.slug][0].image
                                      )}
                                      alt={subPosts[child.slug][0].title}
                                      className="w-full h-44 object-cover"
                                    />
                                    <div className="bg-gray-100 p-4">
                                      <h5 className="text-sm font-semibold mb-3">
                                        {subPosts[child.slug][0].title}
                                      </h5>
                                      <p className="text-xs">
                                        {subPosts[child.slug][0].excerpt}
                                      </p>
                                    </div>
                                  </div>
                                )}
                            </div>
                            <div>
                              <div className="flex flex-col">
                                {subPosts[child.slug] &&
                                subPosts[child.slug].length > 1 ? (
                                  subPosts[child.slug]
                                    .slice(1, 4)
                                    .map((subPost) => (
                                      <Link
                                        to={`/posts/${subPost.slug}`}
                                        key={subPost.id}
                                        className="flex flex-col gap-2 border-b py-2"
                                      >
                                        <h5 className="text-sm font-semibold">
                                          {subPost.title}
                                        </h5>
                                        <p className="text-xs">
                                          {subPost.excerpt}
                                        </p>
                                      </Link>
                                    ))
                                ) : (
                                  <p className="text-gray-500">
                                    Không có bài viết nào.
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewPage;

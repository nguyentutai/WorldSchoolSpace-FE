import { useParams } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosConfig";
import { Category } from "../../components/interfaces/category";
import { Post } from "../../components/interfaces/post";
import axios from "axios";

const SubCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [subCategory, setSubCategory] = useState<Category | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubCategoryAndPosts = async () => {
      try {
        const categoriesResponse = await axiosInstance.get("/category");
        const categories = categoriesResponse.data;
        if (categories.length === 0) throw new Error("No categories found.");

        const selectedSubCategory = categories.find((cat: Category) =>
          cat.children?.some((child) => child.slug === slug)
        );

        if (selectedSubCategory) {
          const childCategory = selectedSubCategory.children?.find(
            (child: any) => child.slug === slug
          );
          setSubCategory(childCategory || null);

          const postsResponse = await axiosInstance.get(
            `/category/${slug}/posts`
          );
          setPosts(postsResponse.data.posts);
        } else {
          setError("Danh mục con không tồn tại.");
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
      {subCategory && posts.length > 0 ? (
        <div key={subCategory.slug}>
          <div className="bg-white border-b border-gray-200">
            <div className="px-4 py-2 flex gap-5 items-end">
              <div className="md:text-xl text-lg font-semibold">
                {subCategory.name}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 py-6">
            <div className="md:col-span-8 col-span-12">
              {posts.map((item) => (
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
                      <span className="md:text-sm text-xs">{item.excerpt}</span>
                      <div className="flex items-center gap-2 text-gray-400">
                        <FaMessage className="size-3" />
                        <span className="text-xs">{item.views}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          Không có bài viết nào trong danh mục này.
        </div>
      )}
    </div>
  );
};

export default SubCategoryPage;

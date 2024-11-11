import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NewBlog from "../../components/shared/NewBlog";
import NewBlog2 from "../../components/shared/NewBlog2";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../config/axiosConfig";
import { Post } from "../../components/interfaces/post";
import PopularPosts from "./PopularPosts";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  const getFullImagePath = (image: string) => {
    if (!image.startsWith("http")) {
      return `http://127.0.0.1:8000/storage/${image}`;
    }
    return image;
  };

  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    const fetchCategoryId = async () => {
      const response = await axiosInstance.get("/category");
      setCategoryId(response.data[0].id);
    };

    fetchCategoryId();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/post");
        setPosts(response.data.data);
      } catch (error) {
        setError(error as Error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto md:px-0 px-5">
        <div className="py-5 grid grid-cols-12 gap-5">
          <PopularPosts />
          <div className="col-span-3 md:block hidden">
            <div className="skeleton h-52 bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="md:col-span-5 col-span-12">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex flex-col gap-2 border-b py-4">
                <div className="skeleton h-5 bg-gray-300 rounded mb-2"></div>
                <div className="flex gap-2">
                  <div className="skeleton h-24 w-24 bg-gray-300 rounded"></div>
                  <div className="flex-1">
                    <div className="skeleton h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <div className="skeleton h-5 w-5 bg-gray-300 rounded-full"></div>
                      <div className="skeleton h-4 bg-gray-300 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="md:col-span-7 col-span-12">
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
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 border-t py-5">
          {Array.from({ length: 3 }).map((_, index) => (
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
          ))}
        </div>
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-5xl mx-auto md:px-0 px-5">
      <div className="py-5 grid grid-cols-12 gap-5">
        <PopularPosts />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="md:col-span-5 col-span-12">
          {posts
            .sort(() => Math.random() - 0.5)
            .map((item) => (
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
        <div className="md:col-span-7 col-span-12">
          <NewBlog categoryId={categoryId} />
        </div>
      </div>
      <div className="">
        <NewBlog2 categoryId={categoryId} />
      </div>
    </div>
  );
};

export default Home;

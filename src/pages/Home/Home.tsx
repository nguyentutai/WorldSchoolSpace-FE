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
    // Giả sử bạn lấy ID danh mục từ một API hoặc một số nơi khác
    const fetchCategoryId = async () => {
      const response = await axiosInstance.get("/category"); // Gọi API lấy danh sách danh mục
      setCategoryId(response.data[0].id); // Giả sử bạn lấy ID của danh mục đầu tiên
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
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-5xl mx-auto md:px-0 px-5">
      <div className="py-5 grid grid-cols-12 gap-5">
        <PopularPosts />
        <div className="col-span-3 md:block hidden">
          <img
            src="https://tpc.googlesyndication.com/pagead/imgad?id=CICAgOD7ptrlhwEQARgBMgjHP8G7oPxcsQ"
            alt=""
          />
        </div>
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
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 border-t py-5">
        <NewBlog2 categoryId={categoryId} />
      </div>
    </div>
  );
};

export default Home;

import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { blogList } from "../../constants/common";
import NewBlog from "../../components/shared/NewBlog";
import NewBlog2 from "../../components/shared/NewBlog2";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../config/axiosConfig";
import { Post } from "../../components/interfaces/post";
const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  // Hàm để thêm URL đầy đủ cho đường dẫn ảnh
  const getFullImagePath = (image: string) => {
    // Kiểm tra xem ảnh có bắt đầu bằng http hay không
    if (!image.startsWith("http")) {
      return `http://127.0.0.1:8000/storage/${image}`; // Thêm đường dẫn cho ảnh
    }
    return image;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/post");
        console.log(response.data); // Kiểm tra cấu trúc dữ liệu
        setPosts(response.data.data); // Lưu dữ liệu bài viết từ response
      } catch (error) {
        setError(error as Error);
        setPosts([]); // Đảm bảo posts là một mảng
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(posts); // Kiểm tra trạng thái posts

  return (
    <div className="max-w-5xl mx-auto md:px-0 px-5">
      <div className="py-5 grid grid-cols-12 gap-5">
        <div className="md:col-span-9 col-span-12">
          <div className="grid grid-cols-12 gap-4">
            <div className="md:col-span-8 col-span-12">
              <img
                src="https://i1-kinhdoanh.vnecdn.net/2024/10/06/israel-1728192975-8011-1728193126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=_M0ezWPyGBZ-JLm0MDDUEA"
                alt=""
                className="md:max-w-[520px] max-w-full h-fit w-full"
              />
            </div>
            <div className="md:col-span-4 col-span-12">
              <h2 className="md:text-2xl text-xl font-semibold">
                Kinh tế Israel thiệt hại ra sao vì chiến sự
              </h2>
              <span className="md:text-sm text-xs py-2 block">
                Ngành công nghệ, nông nghiệp, xây dựng, du lịch của Israel đều
                bị kéo tụt vì cuộc chiến được đánh giá kéo dài và tốn kém nhất
                lịch sử nước này.
              </span>
              <span className="line-clamp-4 md:text-sm text-xs">
                Cuối tháng 9, khi xung đột tại Trung Đông kéo dài một năm và xếp
                hạng tín dụng của Israel tiếp tục bị hạ, Bộ trưởng Tài chính
                Bezalel Smotrich khẳng định nền kinh tế này đang chịu sức ép,
                nhưng vẫn đứng vững. "Kinh tế Israel đang gánh áp lực từ cuộc
                chiến dài nhất và tốn kém nhất lịch sử đất nước. Tuy nhiên,
                Israel là một nền kinh tế mạnh mẽ, thậm chí vẫn đang thu hút đầu
                tư", Smotrich nói hôm 28/9.
              </span>
              <div className="mt-2 flex items-center gap-2 text-gray-400">
                <FaMessage className="size-4" />
                <span className="text-sm">28</span>
              </div>
            </div>
          </div>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {posts.slice(0, 3).map((post) => (
                <div
                  key={post.id}
                  className="border-t mt-6 pt-3 flex flex-col items-center"
                >
                  <Link
                    to={""}
                    className="text-base font-semibold line-clamp-2"
                  >
                    {post.title}
                  </Link>
                  <img src={getFullImagePath(post.image)} alt={post.title} />
                </div>
              ))}
            </div>
          ) : (
            <div>No posts available.</div>
          )}
        </div>
        <div className="col-span-3 md:block hidden">
          <img
            src="https://tpc.googlesyndication.com/pagead/imgad?id=CICAgOD7ptrlhwEQARgBMgjHP8G7oPxcsQ"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="md:col-span-5 col-span-12">
          {posts.map((item) => (
            <Link
              to={`/posts/${item.slug}`}
              key={item.id}
              className="flex flex-col gap-2 border-b py-4"
            >
              <h2 className="md:text-lg text-sm font-semibold">{item.title}</h2>
              <div className="flex gap-2">
                <img
                  src={getFullImagePath(item.image)}
                  alt={item.title}
                  className="max-w-36 w-full h-fit"
                />
                <div>
                  <span className="md:text-sm text-xs">{item.excerpt}</span>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaMessage className="size-3" />
                    <span className="text-xs">{item.views} views</span>{" "}
                    {/* Display views count */}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="md:col-span-7 col-span-12">
          <NewBlog />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 border-t py-5">
        <NewBlog2 />
        <NewBlog2 />
        <NewBlog2 />
      </div>
    </div>
  );
};

export default Home;

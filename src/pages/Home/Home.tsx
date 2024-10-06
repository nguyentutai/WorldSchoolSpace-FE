import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { blogList } from "../../constants/common";
import NewBlog from "../../components/shared/NewBlog";
import NewBlog2 from "../../components/shared/NewBlog2";
const Home = () => {
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
          <div className="border-t mt-6 pt-3 grid grid-cols-12 gap-5">
            <div className="flex-col flex gap-4 md:col-span-4 col-span-12 justify-between">
              <Link to={""} className="text-base font-semibold line-clamp-2">
                Vùng cao Quảng Nam lo sạt lở
              </Link>
              <img
                src="https://i1-vnexpress.vnecdn.net/2024/10/05/IMG7691-1728113899-1529-1728117303.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=19vdZvC1SjoqngAg17-PbA"
                alt=""
                className="w-fit"
              />
            </div>
            <div className="flex-col flex gap-4 md:col-span-4 col-span-12 justify-between">
              <Link to={""} className="text-base font-semibold line-clamp-2">
                Israel tiến thoái lưỡng nan trong cuộc chiến với Hezbollah
              </Link>
              <img
                src="https://i1-vnexpress.vnecdn.net/2024/10/04/ap24277518475014-1728027291-3106-1728027602.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=6RTwXEpzi9hX6E2f3a4eHw"
                alt=""
                className="w-fit"
              />
            </div>
            <div className="flex-col flex gap-4 md:col-span-4 col-span-12 justify-between">
              <Link to={""} className="text-base font-semibold line-clamp-2">
                Vùng cao Quảng Nam lo sạt lở
              </Link>
              <img
                src="https://i1-vnexpress.vnecdn.net/2024/10/05/IMG7691-1728113899-1529-1728117303.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=19vdZvC1SjoqngAg17-PbA"
                alt=""
                className="w-fit"
              />
            </div>
          </div>
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
          {blogList.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="flex flex-col gap-2 border-b py-4"
            >
              <h2 className="md:text-lg text-sm font-semibold">{item.title}</h2>
              <div className="flex gap-2">
                <img
                  src={item.image}
                  alt=""
                  className="max-w-36 w-full h-fit"
                />
                <div>
                  <span className="md:text-sm text-xs">{item.content}</span>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaMessage className="size-3" />
                    <span className="text-xs">28</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="md:col-span-7 col-span-12">
          <NewBlog />
          <NewBlog />
          <NewBlog />
          <NewBlog />
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

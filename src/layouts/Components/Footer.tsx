import { Link } from "react-router-dom";
import config from "../../config";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto border-t-2 pt-10">
      <div className="grid grid-cols-12 px-5 gap-5">
        <div className="lg:col-span-8 col-span-12 grid md:grid-cols-5 grid-cols-1 gap-5">
          <div>
            <ul>
              <li className="*:block flex lg:text-base text-sm flex-col gap-2 hover:*:text-red-700 *:font-semibold">
                <Link to={config.routes.home}>Trang chủ</Link>
                <Link to={""}>Video</Link>
                <Link to={""}>Podcasts</Link>
                <Link to={""}>Ảnh</Link>
                <Link to={""}>Infographics</Link>
                <Link to={""}>Mới nhất</Link>
                <Link to={""}>Xem nhiều nhất</Link>
                <Link to={""}>Tin nóng</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="*:block flex lg:text-base text-sm flex-col gap-2 hover:*:text-red-700">
                <Link to={config.routes.home}>Trang chủ</Link>
                <Link to={""}>Video</Link>
                <Link to={""}>Podcasts</Link>
                <Link to={""}>Ảnh</Link>
                <Link to={""}>Infographics</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="*:block flex lg:text-base text-sm flex-col gap-2 hover:*:text-red-700">
                <Link to={config.routes.home}>Trang chủ</Link>
                <Link to={""}>Video</Link>
                <Link to={""}>Podcasts</Link>
                <Link to={""}>Ảnh</Link>
                <Link to={""}>Infographics</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="*:block flex lg:text-base text-sm flex-col gap-2 hover:*:text-red-700">
                <Link to={config.routes.home}>Trang chủ</Link>
                <Link to={""}>Video</Link>
                <Link to={""}>Podcasts</Link>
                <Link to={""}>Ảnh</Link>
                <Link to={""}>Infographics</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="*:block flex lg:text-base text-sm flex-col gap-2 hover:*:text-red-700">
                <Link to={config.routes.home}>Trang chủ</Link>
                <Link to={""}>Video</Link>
                <Link to={""}>Podcasts</Link>
                <Link to={""}>Ảnh</Link>
                <Link to={""}>Infographics</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <h4 className="text-base font-medium">Tải ứng dụng</h4>
          <div className="flex gap-2 mt-2">
            <Link to={""} className="flex gap-2 border w-fit px-2 py-1">
              <img src="../public/image/e.png" alt="" />
              <span>VnExpress</span>
            </Link>
            <Link to={""} className="flex gap-2 border w-fit px-2 py-1">
              <img src="../public/image/e.png" alt="" />
              <span>international</span>
            </Link>
          </div>
          <h4 className="text-base font-medium mt-2">Liên hệ</h4>
          <div className="border-b py-2 flex gap-10 items-center">
            <Link to={""} className="flex gap-2 items-center">
              <CiMail className="size-5" />
              <span>Gmail</span>
            </Link>
            <Link to={""} className="flex gap-2">
              <span>Quảng cáo</span>
            </Link>
          </div>
          <h4 className="text-base font-medium mt-2">Đường dây nóng</h4>
          <span className="font-semibold py-1 block">0485.304.534</span>
          <h4 className="text-base font-medium">
            Đừng bỏ lỡ tin tức quang trọng!
          </h4>
          <div className="flex gap-3 items-center mt-2">
            <p className="max-w-48">
              Nhận tóm tắt tin tức nổi bật, hấp dẫn nhất 24 giờ qua trên
              VnExpress.
            </p>
            <button className="bg-red-500 rounded-md px-3 py-1 text-sm text-white">
              Nhận bản tin
            </button>
          </div>
        </div>
      </div>
      <div className=" md:block hidden">
        <div className="py-3 border-b border-t flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h4 className="text-sm">Báo điện tử</h4>
            <img
              src="https://s1.vnecdn.net/vnexpress/restruct/i/v942/v2_2019/pc/graphics/logo.svg"
              alt=""
              className=""
            />
          </div>
          <div>
            <ul className="flex *:text-xs *:border-e *:px-2">
              <li>Điều khoản sử dụng</li>
              <li>Chính sách bảo mật</li>
              <li>Cookies</li>
              <li>RSS</li>
              <li className="border-none">Theo dõi VnExpress trên</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

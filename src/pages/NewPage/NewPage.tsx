import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import BlogActicle from "../../components/shared/BlogActicle";

const NewPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-0">
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-2 flex gap-5 items-end">
          <div className="md:text-xl text-lg font-semibold">Bất động sản</div>
          <ul className="flex space-x-4 *:text-sm">
            <li>
              <Link to="/" className="hover:text-blue-500">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/thị-trường" className="hover:text-blue-500">
                Thị trường
              </Link>
            </li>
            <li>
              <Link to="/kinh-doanh" className="hover:text-blue-500">
                Kinh doanh
              </Link>
            </li>
            <li>
              <Link to="/dự-án" className="hover:text-blue-500">
                Dự án
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 py-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6">
          <div>
            <img
              className="w-full h-full"
              src="https://i1-kinhdoanh.vnecdn.net/2024/10/06/israel-1728192975-8011-1728193126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=_M0ezWPyGBZ-JLm0MDDUEA"
              alt=""
            />
          </div>
          <div className="p-4">
            <h2 className="font-semibold md:text-lg text-base">
              Điểm tin 8h: Triệt phá đường dây có hoa hậu bán dâm; Elon Musk
              cảnh báo mối nguy hiểm về AI.
            </h2>
            <p>
              Điểm tin cùng bạn 8h ngày 15-9: Hoàn thành đấu giá 11 biển số siêu
              đẹp, dự thu lên tới trên 82 tỉ đồng; Nữ bệnh nhân 16 tuổi tố bị
              sàm sỡ ở Bệnh viện Việt Đức: đã mời công an xác minh; Thủ tướng
              Campuchia Hun Manet gặp Chủ tịch Trung Quốc...
            </p>
            <div className="mt-2 flex items-center gap-2 text-gray-400">
              <FaMessage className="size-4" />
              <span className="text-sm">28</span>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 py-6">
          <div className="w-full flex flex-col gap-1">
            <img
              className="w-full"
              src="https://i1-kinhdoanh.vnecdn.net/2024/10/06/israel-1728192975-8011-1728193126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=_M0ezWPyGBZ-JLm0MDDUEA"
              alt=""
            />
            <h3 className="line-clamp-2">
              Điểm tin 8h: Triệt phá đường dây có hoa hậu bán dâm...
            </h3>
            <p className="line-clamp-4 text-xs">
              Điểm tin cùng bạn 8h ngày 15-9: Hoàn thành đấu giá 11 biển số siêu
              đẹp, dự thu lên tới trên 82 tỉ đồng...
            </p>
          </div>
          <div className="w-full flex flex-col gap-1">
            <img
              className="w-full"
              src="https://i1-kinhdoanh.vnecdn.net/2024/10/06/israel-1728192975-8011-1728193126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=_M0ezWPyGBZ-JLm0MDDUEA"
              alt=""
            />
            <h3 className="line-clamp-2">
              Điểm tin 8h: Triệt phá đường dây có hoa hậu bán dâm...
            </h3>
            <p className="line-clamp-4 text-xs">
              Điểm tin cùng bạn 8h ngày 15-9: Hoàn thành đấu giá 11 biển số siêu
              đẹp, dự thu lên tới trên 82 tỉ đồng...
            </p>
          </div>
          <div className="w-full flex flex-col gap-1">
            <img
              className="w-full"
              src="https://i1-kinhdoanh.vnecdn.net/2024/10/06/israel-1728192975-8011-1728193126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=_M0ezWPyGBZ-JLm0MDDUEA"
              alt=""
            />
            <h3 className="line-clamp-2">
              Điểm tin 8h: Triệt phá đường dây có hoa hậu bán dâm...
            </h3>
            <p className="line-clamp-4 text-xs">
              Điểm tin cùng bạn 8h ngày 15-9: Hoàn thành đấu giá 11 biển số siêu
              đẹp, dự thu lên tới trên 82 tỉ đồng...
            </p>
          </div>
          <div className="w-full flex flex-col gap-1">
            <img
              className="w-full"
              src="https://i1-kinhdoanh.vnecdn.net/2024/10/06/israel-1728192975-8011-1728193126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=_M0ezWPyGBZ-JLm0MDDUEA"
              alt=""
            />
            <h3 className="line-clamp-2">
              Điểm tin 8h: Triệt phá đường dây có hoa hậu bán dâm...
            </h3>
            <p className="line-clamp-4 text-xs">
              Điểm tin cùng bạn 8h ngày 15-9: Hoàn thành đấu giá 11 biển số siêu
              đẹp, dự thu lên tới trên 82 tỉ đồng...
            </p>
          </div>
        </div>
        <div className="border-t border-b pt-5 pb-3">
          <h3 className="text-xl font-bold">Thị trường</h3>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 py-5">
          <div className="grid grid-cols-2">
            <h3 className="text-sm font-semibold">
              Thêm khách sạn Hội An được ngân hàng giao bán
            </h3>
            <img
              className="w-full"
              src="https://i1-kinhdoanh.vnecdn.net/2024/10/06/israel-1728192975-8011-1728193126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=_M0ezWPyGBZ-JLm0MDDUEA"
              alt=""
            />
          </div>
          <div className="grid grid-cols-2">
            <h3 className="text-sm font-semibold">
              Thêm khách sạn Hội An được ngân hàng giao bán
            </h3>
            <img
              className="w-full"
              src="https://i1-kinhdoanh.vnecdn.net/2024/10/06/israel-1728192975-8011-1728193126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=_M0ezWPyGBZ-JLm0MDDUEA"
              alt=""
            />
          </div>
          <div className="grid grid-cols-2">
            <h3 className="text-sm font-semibold">
              Thêm khách sạn Hội An được ngân hàng giao bán
            </h3>
            <img
              className="w-full"
              src="https://i1-kinhdoanh.vnecdn.net/2024/10/06/israel-1728192975-8011-1728193126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=_M0ezWPyGBZ-JLm0MDDUEA"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="md:col-span-8 col-span-12">
            <div className="border-t border-b pt-5 pb-3">
              <h3 className="text-xl font-bold">Tin khác</h3>
            </div>
            <BlogActicle />
            <BlogActicle />
            <BlogActicle />
            <BlogActicle />
            <BlogActicle />
            <BlogActicle />
          </div>
          <div className="md:col-span-4 col-span-12 mt-10 flex flex-col gap-10">
            <div className="border p-5">
              <div className="border-b pb-3">
                <h3 className="text-xl font-bold">Kinh doanh</h3>
              </div>
              <img
                className="w-full"
                src="https://i1-kinhdoanh.vnecdn.net/2024/10/06/israel-1728192975-8011-1728193126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=_M0ezWPyGBZ-JLm0MDDUEA"
                alt=""
              />
              <h2 className="font-bold text-md py-3">
                Liên danh ACC trúng gói thầu gần 6.300 tỷ đồng sân bay Long
                Thành
              </h2>
              <span className="border-t border-b block py-2 text-sm">
                Nhà nước sẽ can thiệp khi giá nhà đất tăng hơn 20% trong 3 tháng
              </span>
              <span className="border-t border-b block py-2 text-sm">
                Nhà nước sẽ can thiệp khi giá nhà đất tăng hơn 20% trong 3 tháng
              </span>
            </div>
            <div className="border p-5">
              <div className="border-b pb-3">
                <h3 className="text-xl font-bold">Tin dự án</h3>
              </div>
              <img
                className="w-full"
                src="https://i1-kinhdoanh.vnecdn.net/2024/10/06/israel-1728192975-8011-1728193126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=_M0ezWPyGBZ-JLm0MDDUEA"
                alt=""
              />
              <h2 className="font-bold text-md py-3">
                Liên danh ACC trúng gói thầu gần 6.300 tỷ đồng sân bay Long
                Thành
              </h2>
              <span className="border-t border-b block py-2 text-sm">
                Nhà nước sẽ can thiệp khi giá nhà đất tăng hơn 20% trong 3 tháng
              </span>
              <span className="border-t border-b block py-2 text-sm">
                Nhà nước sẽ can thiệp khi giá nhà đất tăng hơn 20% trong 3 tháng
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;

import { Link } from "react-router-dom";

const NewBlog = () => {
  return (
    <div className="p-4 border-b">
      <div className="flex gap-5 items-end border-b">
        <h1 className="md:text-xl text-lg font-semibold text-gray-800 border-b border-red-800 whitespace-nowrap">
          Bất động sản
        </h1>
        <div className="flex space-x-4 text-gray-600 md:*:text-sm *:text-xs whitespace-nowrap overflow-x-scroll scrollbar-hide">
          <Link to={""} className="hover:text-black">
            Chính sách
          </Link>
          <Link to={""} className="hover:text-black">
            Thị trường
          </Link>
          <Link to={""} className="hover:text-black">
            Dự án
          </Link>
          <Link to={""} className="hover:text-black">
            Không gian sống
          </Link>
          <Link to={""} className="hover:text-black">
            Tư vấn
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-4 py-4">
        <div className="">
          <img
            src="https://i1-vnexpress.vnecdn.net/2024/10/06/dji-0028-jpg-1728197266-172819-9522-9785-1728198088.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=--PQuqi3isrI7_0EgXg8Aw"
            alt="Main Article"
            className="w-full mb-2"
          />
        </div>
        <div className=" px-3">
          <h2 className="font-semibold text-base text-gray-800">
            Nguồn cung chung cư Hà Nội có thể tăng mạnh từ năm sau
          </h2>
          <p className="md:text-sm text-xs text-gray-600">
            Từ năm 2025, khoảng 110.000 căn chung cư có thể ra mắt thị trường,
            song phân khúc trung-cao cấp vẫn chiếm áp ...
          </p>
        </div>
        <div className="md:border-l px-3">
          <h2 className="font-semibold text-base text-gray-800">
            Gần 4,4 tỷ USD vốn ngoại đổ vào bất động sản
          </h2>
          <p className="md:text-sm text-xs text-gray-600">
            9 tháng đầu năm, các doanh nghiệp nước ngoài đã đầu tư gần 4,4 tỷ
            USD vào bất động sản, tăng hơn 2,2 lần so với cùng kỳ năm ngoái.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div className="border-t pt-2">
          <h3 className="md:text-md text-sm font-semibold text-gray-800 list-item ms-5">
            Tập đoàn Ecopark đề xuất đầu tư dự án tại Cam Lâm
          </h3>
        </div>
        <div className="border-t pt-2">
          <h3 className="md:text-md text-sm font-semibold text-gray-800 list-item ms-5">
            Giao dịch đất đai nghẽn khiến TP HCM thu ngân sách giảm
          </h3>
        </div>
        <div className="border-t pt-2">
          <h3 className="md:text-md text-sm font-semibold text-gray-800 list-item ms-5">
            Hủy hoại đất đai bị phạt đến 1 tỷ đồng
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;

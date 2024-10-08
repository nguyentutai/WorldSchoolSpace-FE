import { IoSearchOutline } from "react-icons/io5";
import BlogActicle from "../../components/shared/BlogActicle";

const SearchBlog = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 mt-8">
      <div className="mb-4 flex flex-col gap-3">
        <h2 className="font-bold text-xl">Tìm Kiếm</h2>
        <div className="relative z-10">
          <input
            type="text"
            placeholder="Từ khóa"
            className="border border-gray-300 py-2 px-5 w-full z-10 rounded-md outline-none"
          />
          <IoSearchOutline className="absolute top-1/2 -translate-y-1/2 right-3 size-6" />
        </div>
        <div className="flex md:flex-row flex-col gap-2">
          <div className="md:max-w-56 w-full">
            <label className="block mb-2 text-gray-700">Chuyên mục</label>
            <select className="border w-full border-gray-300 p-2 rounded-md outline-none">
              <option>Tất cả</option>
              <option value="">1</option> <option value="">2</option>
            </select>
          </div>
          <div className="md:max-w-56 w-full">
            <label className="block mb-2 text-gray-700">Dạng bài</label>
            <select className="border w-full outline-none border-gray-300 p-2 rounded-lg">
              <option>Tất cả</option>
              <option value="">1</option> <option value="">2</option>
            </select>
          </div>
          <div className="md:max-w-56 w-full">
            <label className="block mb-2 text-gray-700">Thời gian</label>
            <select className="border w-full outline-none border-gray-300 p-2 rounded-lg">
              <option>Tất cả</option>
              <option value="">1</option> <option value="">2</option>
            </select>
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-4">138 kết quả phù hợp</p>

      <div>
        <BlogActicle />
        <BlogActicle />
        <BlogActicle />
        <BlogActicle />
        <BlogActicle />
      </div>
    </div>
  );
};

export default SearchBlog;

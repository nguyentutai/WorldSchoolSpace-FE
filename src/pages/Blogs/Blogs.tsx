import {
  AiOutlineArrowLeft,
  AiOutlineSmile,
  AiFillLike,
  AiFillFlag,
} from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { GoReply } from "react-icons/go";
const Blogs = () => {
  return (
    <>
      <div className="bg-slate-600 text-white text-center p-5 mb-5">
        Đây là header
      </div>
      <div className="max-w-[1400px] bg-g mx-auto p-4">
        <div className="flex space-x-5">
          <div className="flex-1">
            <div className="flex justify-between mb-3">
              <p>Giáo dục / du học</p>
              <p>Chủ nhật, 15/9/2024, 23:22 (GMT+7)</p>
            </div>
            <h1 className="text-3xl font-semibold mb-3 tracking-wider">
              6 lý do khiến Australia từ chối cấp visa du học
            </h1>
            <div className="flex flex-col space-y-4 justify-start">
              <p>
                Có 6 lý do phổ biến khiến thị thực (visa) du học bị từ chối,
                nhiều nhất là những trường hợp không trung thực về mục đích du
                học, theo Bộ Nội vụ Australia.
              </p>
              <p>
                Thông tin được bà Katherine Tranter, cán bộ cấp cao phụ trách
                thị thực du học thuộc Bộ Nội vụ Australia, nêu tại triển lãm du
                học bang New South Wales ở TP HCM, chiều 14/9.
              </p>
              <p>
                Bà cho biết sau đại dịch Covid-19, số người xin visa du học
                Australia tăng. Việt Nam thuộc top 6 quốc gia đứng đầu về lượng
                hồ sơ, tăng từ 18.700 trong năm học 2022-2023 lên hơn 24.400 vào
                năm sau. Tuy nhiên, tỷ lệ chấp thuận lại giảm, từ 91% còn 76%,
                thấp nhất 18 năm qua.
              </p>
              <p>
                Đây là tình hình chung, bởi tỷ lệ này giảm ở hầu hết quốc gia
                trong top 10 về số sinh viên quốc tế tại Australia.
              </p>
            </div>
            <img
              src="../image/vne4955jpg17239602799813172396-6586-7669-1727606911.jpg"
              alt=""
              className="px-20 py-10"
            />
            <div className="flex flex-col space-y-4 justify-start">
              <p>
                Có 6 lý do phổ biến khiến thị thực (visa) du học bị từ chối,
                nhiều nhất là những trường hợp không trung thực về mục đích du
                học, theo Bộ Nội vụ Australia.
              </p>
            </div>
            <div className="flex justify-end text-xl font-medium mt-8 mb-8">
              Học học
            </div>
          </div>
          <div className="flex-none w-1/3">
            <div>
              <img
                src="../image/11387739191389445629.jfif"
                alt=""
                className="mb-5"
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-5">
          <div className="flex-1">
            <div className="border border-gray-300 p-5 mb-5">
              <div className="flex space-x-5 mb-5 ">
                <img
                  src="../image/vne4955jpg17239602799813172396-6586-7669-1727606911.jpg"
                  alt=""
                  className="w-44 "
                />
                <div>
                  <span className="text-xl font-medium">
                    Tỷ lệ du học sinh Việt đậu thị thực Australia thấp nhất 18
                    năm
                  </span>
                  <p className="mt-2 text-gray-500">
                    12.600 du học sinh Việt được cấp thị thực trong 10 tháng,
                    chiếm khoảng 78,7% số đăng ký, là tỷ lệ thấp nhất trong 18
                    năm qua. 
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-300 my-4 mx-5"></div>
              <div className="flex space-x-5">
                <img
                  src="../image/vne4955jpg17239602799813172396-6586-7669-1727606911.jpg"
                  alt=""
                  className="w-44 "
                />
                <div>
                  <span className="text-xl font-medium ">
                    Tỷ lệ du học sinh Việt đậu thị thực Australia thấp nhất 18
                    năm
                  </span>
                  <p className="mt-2 text-gray-500">
                    12.600 du học sinh Việt được cấp thị thực trong 10 tháng,
                    chiếm khoảng 78,7% số đăng ký, là tỷ lệ thấp nhất trong 18
                    năm qua. 
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border border-gray-300 rounded-lg w-[850px] mx-auto p-4 mb-5  ">
              <div className="flex-none w-[400px]">
                <div className="flex font-semibold space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M2 3h20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                    <path d="M2 5l10 7 10-7" />
                  </svg>
                  <p> Đừng bỏ lỡ tin tức quan trọng!</p>
                </div>
                <p className=" ml-9 ">
                  Nhận tóm tắt tin tức nổi bật, hấp dẫn nhất 24 giờ qua trên
                  VnExpress.
                </p>
              </div>
              <div className="flex-1 ml-10 text-center">
                <div className="flex font-semibold space-x-3 bg-rose-800 p-2 text-white rounded-lg justify-center text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M2 3h20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                    <path d="M2 5l10 7 10-7" />
                  </svg>
                  <p> Nhận VnExpress Newsletters</p>
                </div>
                <p className="text-black text-xs font-medium ">
                  *Khi đăng ký, bạn đồng ý điều khoản của VnExpress
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-5">
                <div className="border border-gray-300 rounded-lg p-2 w-14 text-3xl ">
                  <AiOutlineArrowLeft />
                </div>
                <div className="border flex border-gray-300 rounded-lg p-2 w-28 text-2xl ">
                  <IoBookmarkOutline className="text-4xl text-blue-600" />{" "}
                  <p>Lưu</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-facebook border-gray-400 rounded-full bg-white">
                  <FaFacebookF className="text-facebook" />
                </div>
                <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-400  rounded-full bg-white">
                  <MdEmail />
                </div>
                <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-400  rounded-full bg-white">
                  <FaLink />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none w-1/3">
            <h1 className="text-2xl font-semibold underline">Xem Nhiều</h1>
            <div className="mt-5">
              <div className="flex space-x-5 mb-5 ">
                <img
                  src="../image/vne4955jpg17239602799813172396-6586-7669-1727606911.jpg"
                  alt=""
                  className="w-44 h-20 "
                />
                <div>
                  <span className="text-xl font-medium">
                    Tỷ lệ du học sinh Việt đậu thị thực Australia thấp nhất 18
                    năm
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex space-x-5 mb-5 ">
                <img
                  src="../image/vne4955jpg17239602799813172396-6586-7669-1727606911.jpg"
                  alt=""
                  className="w-44 h-20 "
                />
                <div>
                  <span className="text-xl font-medium">
                    Tỷ lệ du học sinh Việt đậu thị thực Australia thấp nhất 18
                    năm
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex space-x-5 mb-5 ">
                <img
                  src="../image/vne4955jpg17239602799813172396-6586-7669-1727606911.jpg"
                  alt=""
                  className="w-44 h-20 "
                />
                <div>
                  <span className="text-xl font-medium">
                    Tỷ lệ du học sinh Việt đậu thị thực Australia thấp nhất 18
                    năm
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex space-x-5 mb-5 ">
                <img
                  src="../image/vne4955jpg17239602799813172396-6586-7669-1727606911.jpg"
                  alt=""
                  className="w-44 h-20 "
                />
                <div>
                  <span className="text-xl font-medium">
                    Tỷ lệ du học sinh Việt đậu thị thực Australia thấp nhất 18
                    năm
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 my-4"></div>
        <div className="flex space-x-5">
          <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-5">Ý Kiến</h1>
            <div className="flex justify-between border rounded-xl border-gray-300 p-2 w-[870px]">
              <p className="text-xl">Chia sẻ ý kiến của bạn</p>
              <AiOutlineSmile className="text-2xl" />
            </div>
            <div className="p-3">
              <ul className="flex space-x-4">
                <li className="relative">
                  <a href="#" className="text-red-600 relative mb-5 text-xl">
                    Quan tâm nhất
                  </a>
                  <span className="block h-0.5 w-44 bg-red-600 absolute bottom-0 top-7 -left-1"></span>{" "}
                </li>
                <li className="relative">
                  <a href="#" className="mb-5 text-xl">
                    Mới Nhất
                  </a>
                  <span className="block h-0.5 w-[700px] bg-gray-500 absolute bottom-0 top-7 -left-3"></span>{" "}
                </li>
              </ul>
            </div>
            <div>
              <div className="flex space-x-2 mb-2">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-400  rounded-full bg-white">
                  C
                </div>
                <div>
                  <div className="flex space-x-2">
                    <p className="text-xl font-medium">Cherish</p>
                    <p className="w-[730px]">
                      Nước MỸ đang rất cần những người như TRUMP 
                    </p>
                  </div>
                  <div className="flex space-x-8 text-gray-300">
                    <div className="flex space-x-1">
                      <AiFillLike className="mt-1" />
                      <p>Thích</p>
                    </div>
                    <div className="flex space-x-1">
                      <div className="mt-1 flex">
                        <AiFillLike className=" text-gray-500 bg-red-200 rounded-lg " />
                        <AiOutlineSmile className="-ml-1 text-black bg-red-200 rounded-lg" />
                      </div>
                      <p>123</p>
                    </div>
                    <div className="flex space-x-1">
                      <p>Trả lời</p>
                      <AiFillFlag className="mt-1" />
                    </div>
                  </div>
                  <div className="flex text-gray-300">
                    <div className="flex space-x-1">
                      <div className="transform rotate-180">
                        <GoReply />
                      </div>
                      <p>4 trả lời</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 mb-2">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-400  rounded-full bg-white">
                  C
                </div>
                <div>
                  <div className="flex space-x-2">
                    <p className="text-xl font-medium">Cherish</p>
                    <p className="w-[730px]">
                      thanglong07026 Tranh luận với ông Trump không đưa ra được
                      một đường lối chính sách nào rõ ràng, nhưng phần chọc tức
                      ông Trump thì rất hay, nhờ vào những buổi tập dợt rất kỹ,
                      người dân Mỹ sẽ rất sáng suốt để bầu cho người xứng đáng
                    </p>
                  </div>
                  <div className="flex space-x-8 text-gray-300">
                    <div className="flex space-x-1">
                      <AiFillLike className="mt-1" />
                      <p>Thích</p>
                    </div>
                    <div className="flex space-x-1">
                      <div className="mt-1 flex">
                        <AiFillLike className=" text-gray-500 bg-red-200 rounded-lg " />
                        <AiOutlineSmile className="-ml-1 text-black bg-red-200 rounded-lg" />
                      </div>
                      <p>123</p>
                    </div>
                    <div className="flex space-x-1">
                      <p>Trả lời</p>
                      <AiFillFlag className="mt-1" />
                    </div>
                  </div>
                  <div className="flex text-gray-300">
                    <div className="flex space-x-1">
                      <div className="transform rotate-180">
                        <GoReply />
                      </div>
                      <p>4 trả lời</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center border rounded-xl border-gray-300 p-2 w-[830px] mx-auto  ">
              <p className="text-xl text-gray-400">
                Đăng nhập để xem thêm ý kiến
              </p>
            </div>
            <div className="flex mt-5 space-x-3">
              <p className="text-xl font-medium">Tags: </p>
              <div className="flex space-x-5  ">
                <p className="text-lg text-gray-400">visa du hoc</p>
                <p> /</p>
                <p className="text-lg text-gray-400">du học Australia</p>
                <p> /</p>
                <p className="text-lg text-gray-400 underline">
                  Bộ Nội vụ Australia
                </p>
                <p> /</p>
                <p className="text-lg text-gray-400 underline">
                  siết thị thực du học
                </p>
              </div>
            </div>
            <div className="border-t border-gray-300 my-3 w-full"></div>
            <h1 className="text-2xl font-semibold underline mb-5">
              Cùng chuyên mục
            </h1>
            <div>
              <div className="flex space-x-5 mb-5 ">
                <img
                  src="../image/vne4955jpg17239602799813172396-6586-7669-1727606911.jpg"
                  alt=""
                  className="w-48 "
                />
                <div>
                  <span className="text-xl font-medium">
                    Tỷ lệ du học sinh Việt đậu thị thực Australia thấp nhất 18
                    năm
                  </span>
                  <p className="mt-2 text-gray-500">
                    12.600 du học sinh Việt được cấp thị thực trong 10 tháng,
                    chiếm khoảng 78,7% số đăng ký, là tỷ lệ thấp nhất trong 18
                    năm qua. 
                  </p>
                  <div className="mt-2 flex space-x-5 text-gray-500">
                    <p>2 giờ trước</p>
                    <p>tin tức</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex space-x-5">
                <img
                  src="../image/vne4955jpg17239602799813172396-6586-7669-1727606911.jpg"
                  alt=""
                  className="w-48 "
                />
                <div>
                  <span className="text-xl font-medium">
                    Tỷ lệ du học sinh Việt đậu thị thực Australia thấp nhất 18
                    năm
                  </span>
                  <p className="mt-2 text-gray-500">
                    12.600 du học sinh Việt được cấp thị thực trong 10 tháng,
                    chiếm khoảng 78,7% số đăng ký, là tỷ lệ thấp nhất trong 18
                    năm qua. 
                  </p>
                  <div className="mt-2 flex space-x-5 text-gray-500">
                    <p>2 giờ trước</p>
                    <p>tin tức</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex space-x-5">
                <img
                  src="../image/vne4955jpg17239602799813172396-6586-7669-1727606911.jpg"
                  alt=""
                  className="w-48 "
                />
                <div>
                  <span className="text-xl font-medium">
                    Tỷ lệ du học sinh Việt đậu thị thực Australia thấp nhất 18
                    năm
                  </span>
                  <p className="mt-2 text-gray-500">
                    12.600 du học sinh Việt được cấp thị thực trong 10 tháng,
                    chiếm khoảng 78,7% số đăng ký, là tỷ lệ thấp nhất trong 18
                    năm qua. 
                  </p>
                  <div className="mt-2 flex space-x-5 text-gray-500">
                    <p>2 giờ trước</p>
                    <p>tin tức</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex justify-center border rounded-xl border-gray-300 p-2 ">
                <p className="text-xl text-gray-400">Xem thêm</p>
              </div>
            </div>
          </div>
          <div className="border-l border-gray-300 mx-2 -left-3"></div>
          <div className="flex">
            <div>
              <img
                src="../image/11387739191389445629.jfif"
                alt=""
                className="mb-5 h-40 w-[500px]"
              />
              <div className="border p-5 bg-slate-300 rounded-md mb-5">
                <h1 className="text-2xl font-semibold underline mb-5">
                  Tin tài trợ
                </h1>
                <img
                  src="../image/11387739191389445629.jfif"
                  alt=""
                  className="mb-5 h-48 w-[500px]"
                />
                <div>
                  <p className="text-xl font-medium">
                    Gói vay với lãi suất 6,5% cố định trong 12 tháng đầu tiên
                  </p>
                  <p>
                    Vay trả nợ trước hạn lãi suất thấp tại VPBank, không cần
                    chuẩn bị tiền tất toán khoản vay cũ.
                  </p>
                </div>
              </div>
              <div className="border p-5 bg-slate-300 rounded-md">
                <h1 className="text-2xl font-semibold underline mb-5">
                  Tin tài trợ
                </h1>
                <img
                  src="../image/11387739191389445629.jfif"
                  alt=""
                  className="mb-5 h-48 w-[500px]"
                />
                <div>
                  <p className="text-xl font-medium">
                    Gói vay với lãi suất 6,5% cố định trong 12 tháng đầu tiên
                  </p>
                  <p>
                    Vay trả nợ trước hạn lãi suất thấp tại VPBank, không cần
                    chuẩn bị tiền tất toán khoản vay cũ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-600 text-white text-center p-5 mt-5">
        Đây là Footer
      </div>
    </>
  );
};

export default Blogs;

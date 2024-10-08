import { useEffect, useState } from "react";
import { daysOfWeek } from "../../constants/common";
import { Link } from "react-router-dom";
import { IoHome, IoSearchOutline } from "react-icons/io5";
import { HiMiniBars3, HiOutlineBell, HiUserPlus } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import config from "../../config";

const Header = () => {
  const [currentDate, setCurrentDate] = useState<string>("");
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  const handleIconClick = () => {
    setIsInputVisible(true);
  };
  useEffect(() => {
    const date = new Date();
    const dayName = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${dayName}, ${day}/${month}/${year}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="flex justify-between h-[50px] items-center max-w-5xl mx-auto px-5">
        <div className="flex items-center gap-4">
          <div className="lg:hidden block">
            {!toggleMenu ? (
              <HiMiniBars3
                className="size-5 cursor-pointer"
                onClick={handleToggleMenu}
              />
            ) : (
              <HiOutlineX
                className="size-5 cursor-pointer"
                onClick={handleToggleMenu}
              />
            )}
          </div>
          <Link to={config.routes.home}>
            <img
              src="https://s1.vnecdn.net/vnexpress/restruct/i/v942/v2_2019/pc/graphics/logo.svg"
              alt=""
            />
          </Link>
          <div className="border-s px-3 lg:block hidden">
            <span className="text-xs">{currentDate}</span>
          </div>
        </div>
        <div>
          <nav>
            <ul className="flex *:text-sm *:font-normal items-center">
              <li className="border-e px-3">
                <Link to={""}>Mới nhất</Link>
              </li>
              <li className="border-e px-3 hidden lg:block">
                <Link to={""}>Tin theo khu vực</Link>
              </li>
              <li className="flex gap-2 items-center border-e px-3">
                <img src="../public/image/e.png" alt="" />
                <Link to={""}>International</Link>
              </li>
              <li className="ps-3 pe-1">
                <form action="" className="relative">
                  <input
                    type="search"
                    className={`border outline-none rounded-md py-1.5 px-2 text-xs transition-all duration-300 ease-in-out ${
                      isInputVisible ? "w-40 opacity-100" : "w-0 opacity-0"
                    }`}
                    placeholder="Tìm kiếm"
                    style={{
                      visibility: isInputVisible ? "visible" : "hidden",
                    }}
                  />
                  <IoSearchOutline
                    className="absolute top-1/2 -translate-y-1/2 right-1 size-5 cursor-pointer"
                    onClick={handleIconClick}
                  />
                </form>
              </li>
              <li>
                <Link
                  to={config.routes.Signin}
                  className="flex gap-1 border-s px-3"
                >
                  <HiUserPlus className="size-5" />
                  <span className="hidden lg:block">Đăng nhập</span>
                </Link>
              </li>
              <li className="ps-3 border-s">
                <Link to={""}>
                  <HiOutlineBell className="size-5" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`lg:sticky absolute z-50 lg:min-h-fit min-h-screen w-full max-w-[75vw] bg-white transition-transform duration-500 md:max-w-[50vw] lg:max-w-full ${
          toggleMenu ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <nav className="lg:px-5 px-3 border-t lg:border-b py-3 *:text-sm">
          <ul className="flex lg:flex-row flex-col lg:gap-5 gap-4 hover:*:text-red-700 *:duration-500 *:border-b *:lg:border-none *:px-4 *:lg:px-2 *:pb-3 *:lg:pb-0">
            <li>
              <Link to={config.routes.home} className="flex gap-2 items-center">
                <IoHome className="size-5" />
                <span className="lg:hidden block">Trang chủ</span>
              </Link>
            </li>
            <li>
              <Link to={""}>Thời sự</Link>
            </li>
            <li>
              <Link to={""}>Góc nhìn</Link>
            </li>
            <li>
              <Link to={""}>Thế giới</Link>
            </li>
            <li>
              <Link to={""}>Video</Link>
            </li>
            <li>
              <Link to={""}>Podcasts</Link>
            </li>
            <li>
              <Link to={""}>Kinh doanh</Link>
            </li>
            <li>
              <Link to={""}>Bất động sản</Link>
            </li>
            <li>
              <Link to={""}>Khoa học</Link>
            </li>
            <li>
              <Link to={""}>Giải trí</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

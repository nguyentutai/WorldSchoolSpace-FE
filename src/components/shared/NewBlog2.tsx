import { Link } from "react-router-dom";

const NewBlog2 = () => {
  return (
    <div>
      <div className="flex space-x-4 text-gray-600 border-b pb-2 mb-2 *:text-sm">
        <Link to="/thoi-su" className="hover:text-black font-semibold">
          Thời sự
        </Link>
        <Link to="/chinh-tri" className="hover:text-black">
          Chính trị
        </Link>
        <Link to="/lao-dong" className="hover:text-black">
          Lao động - việc làm
        </Link>
        <Link to="/dan-sinh" className="hover:text-black">
          Dân sinh
        </Link>
      </div>

      <div className="mb-6">
        <img
          src="https://i1-vnexpress.vnecdn.net/2024/10/03/HUY-6816-5103-1719486266-8433-1727957972.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=SXcs3kNIO4lc7TPHVQ5iYw"
          alt="Main Article"
          className="w-full mb-4"
        />
        <Link
          to="/article-1"
          className="block text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600"
        >
          Thủ tướng bật khóc khi nói về mất mát do bão Yagi gây ra
        </Link>
        <p className="text-sm text-gray-600">
          Thủ tướng Phạm Minh Chính nhiều lần nghẹn giọng, bật khóc khi nói về
          những mất mát của người dân do bão Yagi gây ra và khẳng định quyết tâm
          khắc phục hậu quả của cơn bão lịch sử này.
        </p>
      </div>

      <div className="border-t pt-4">
        <Link
          to="/article-2"
          className="block text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600"
        >
          Thủ tướng bật khóc khi nói về mất mát do bão Yagi gây ra
        </Link>
        <p className="text-sm text-gray-600">
          Thủ tướng Phạm Minh Chính nhiều lần nghẹn giọng, bật khóc khi nói về
          những mất mát của người dân do bão Yagi gây ra và khẳng định quyết tâm
          khắc phục hậu quả của cơn bão lịch sử này.
        </p>
      </div>
    </div>
  );
};

export default NewBlog2;

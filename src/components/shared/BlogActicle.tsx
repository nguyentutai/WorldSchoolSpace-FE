const BlogActicle = () => {
  return (
    <div className="flex gap-5 md:p-6 p-4 border-t">
      <img
        src="https://i1-kinhdoanh.vnecdn.net/2024/10/06/israel-1728192975-8011-1728193126.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=_M0ezWPyGBZ-JLm0MDDUEA"
        className="max-w-48 w-full"
        alt=""
      />
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold md:text-lg text-sm">
          Điểm tin 8h: Triệt phá đường dây có hoa hậu bán dâm; Elon Musk cảnh
          báo mối nguy hiểm về AI.
        </h2>
        <p className="line-clamp-4 text-xs">
          Điểm tin cùng bạn 8h ngày 15-9: Hoàn thành đấu giá 11 biển số siêu
          đẹp, dự thu lên tới trên 82 tỉ đồng; Nữ bệnh nhân 16 tuổi tố bị sàm sỡ
          ở Bệnh viện Việt Đức: đã mời công an xác minh; Thủ tướng Campuchia Hun
          Manet gặp Chủ tịch Trung Quốc...
        </p>
      </div>
    </div>
  );
};

export default BlogActicle;

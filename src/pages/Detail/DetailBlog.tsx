import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { message, Popconfirm, Button } from "antd";
import { getDetailPost } from "../../services/Post";
import { postComment, getComment, deleteComment } from "../../services/Comment";
import { MdDelete } from "react-icons/md";

import { IPost, IGetComment } from "../../types/IBlogDetail";

const DetailBlog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<IPost>();
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<string>();
  const [comment, setComment] = useState<IGetComment[]>();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getDetailPost(slug!);
      setLoading(false);
      setBlog(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (blog?.id) {
        const data = await getComment(blog?.id!);
        setComment(data);
      }
    })();
  }, [blog?.id]);

  const handleComment = async () => {
    const data = await postComment(blog?.id!, {
      user_id: 1,
      content: content!,
    });
    setComment([...comment!, data.data]);
    setContent("");
    message.success("Thêm bình luận thành công");
  };

  const handleDelete = async (id: number) => {
    await deleteComment(id);
    setComment(comment?.filter((item) => item.id != id));
    message.success("Xóa bình luận thành công");
  };

  if (loading)
    return (
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-10">
        <PacmanLoader speedMultiplier={3} color="#c10d0d" />
      </div>
    );

  return (
    <div>
      <div className="bg-gray-100">
        <div className="flex gap-2 items-center px-5 max-w-5xl mx-auto py-1 text-sm">
          <Link to={""} className="font-medium">
            Trang chủ
          </Link>{" "}
          {"->"} <span>Chi tiết bài viết</span>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-xl font-semibold pt-2">{blog?.title}</h2>
        <div className="py-2 flex gap-2">
          {blog?.tags.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 w-fit px-2 py-1 rounded-md text-red-500 text-sm"
            >
              {item.name}
            </div>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog?.content || "" }} />
        <div className="py-4">
          <h2 className="text-xl font-semibold">Bình luận</h2>
          <form action="">
            <textarea
              name=""
              value={content}
              onChange={(e) => setContent(e.target.value)}
              id=""
              className="border outline-none w-full my-2 min-h-[150px] p-4 text-sm rounded-md"
              placeholder="Thêm bình luận"
            ></textarea>
            <Button
              onClick={handleComment}
              className="bg-blue-500 px-4 py-2 rounded-md text-white hover:opacity-90 duration-200"
            >
              Gửi bình luận
            </Button>
          </form>
        </div>

        <div className="pt-5 pb-10">
          <h2 className="text-xl font-semibold py-1">Danh sách bình luận</h2>
          <div className="flex flex-col gap-4">
            {comment && comment.length > 0 ? (
              comment?.map((item, index) => {
                const isoDate = new Date(item.created_at);
                const formattedDate = isoDate.toLocaleDateString("vi-VN", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                });
                return (
                  <div
                    key={index}
                    className="border rounded-md py-3 flex justify-between items-center px-4"
                  >
                    <div className="flex flex-col gap-2 max-w-[95%] w-full">
                      <div className="flex gap-2 items-center">
                        <h2 className="font-medium">{item.user.name}</h2>
                        <span className="text-xs">{formattedDate}</span>
                      </div>
                      <div className="text-sm text-[#636363] break-words w-full">
                        {item.content}
                      </div>
                    </div>
                    <div>
                      <Popconfirm
                        title="Xóa bình luận"
                        description="Bạn có chắc chắn muốn xóa không"
                        onConfirm={() => handleDelete(item.id)}
                        okText="Xác nhận"
                        cancelText="Hủy"
                      >
                        <MdDelete className="size-4 text-red-500 cursor-pointer hover:opacity-90" />
                      </Popconfirm>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>Không có bình luận</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;

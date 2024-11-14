import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config/axiosConfig";
import { Post } from "../../components/interfaces/post";
import { FaMessage } from "react-icons/fa6";
import { Skeleton } from "antd";

const PopularPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [commentCounts, setCommentCounts] = useState<{ [key: string]: number }>(
    {}
  );

  const getFullImagePath = (image: string) => {
    return image.startsWith("http")
      ? image
      : `http://127.0.0.1:8000/storage/${image}`;
  };

  const shufflePosts = (posts: Post[]) => {
    return posts.sort(() => Math.random() - 0.5);
  };

  const fetchCommentCount = async (postId: string | number) => {
    try {
      const response = await axiosInstance.get(`/post/${postId}/comments`);
      console.log("Comment count response:", response.data);
      const count = response.data?.count;
      if (count !== undefined) {
        setCommentCounts((prevCounts) => ({
          ...prevCounts,
          [String(postId)]: count,
        }));
      }
    } catch (error) {
      console.error("Error fetching comment count for post:", postId, error);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get("/posts/popular");
        const filteredPosts = response.data.data.filter(
          (post: Post) => post.views > 0
        );
        const shuffledPosts = shufflePosts(filteredPosts);
        setPosts(shuffledPosts);

        // Lấy số bình luận cho mỗi bài viết
        shuffledPosts.forEach((post) => {
          fetchCommentCount(post.id);
        });
      } catch (error) {
        console.error("Error fetching popular posts", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="md:col-span-9 col-span-12">
        <Skeleton active />
      </div>
    );
  }

  if (posts.length === 0) return null;

  const mainPost = posts[0];
  const otherPosts = posts.slice(1, 4);

  return (
    <div className="md:col-span-9 col-span-12">
      <div className="grid grid-cols-12 gap-4">
        {/* Main Post */}
        <div className="md:col-span-8 col-span-12">
          <img
            src={getFullImagePath(mainPost.image)}
            alt={mainPost.title}
            className="md:max-w-[520px] max-w-full h-fit w-full"
          />
        </div>
        <div className="md:col-span-4 col-span-12">
          <Link
            to={`/posts/${mainPost.slug}`}
            className="md:text-2xl text-xl font-semibold"
          >
            {mainPost.title}
          </Link>
          <span className="md:text-sm text-xs py-2 block">
            {mainPost.excerpt}
          </span>
          {/* <div className="flex items-center gap-2 text-gray-400">
            <FaMessage className="size-3" />
            <span className="text-sm">
              {commentCounts[String(mainPost.id)] ?? 0} Comments
            </span>
          </div> */}
        </div>
      </div>

      <div className="border-t mt-6 pt-3 grid grid-cols-12 gap-5">
        {otherPosts.map((post, index) => (
          <div
            key={index}
            className="flex-col flex gap-4 md:col-span-4 col-span-12 justify-between"
          >
            <Link
              to={`/post/${post.id}`}
              className="text-base font-semibold line-clamp-2"
            >
              {post.title}
            </Link>
            <img
              src={getFullImagePath(post.image)}
              alt={post.title}
              className="w-56 h-32"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;

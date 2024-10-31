import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config/axiosConfig";
import { Post } from "../../components/interfaces/post";
import { FaMessage } from "react-icons/fa6";

const PopularPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getFullImagePath = (image: string) => {
    if (!image.startsWith("http")) {
      return `http://127.0.0.1:8000/storage/${image}`;
    }
    return image;
  };

  const shufflePosts = (posts: Post[]) => {
    return posts.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get("/post/popular");

        const filteredPosts = response.data.data.filter(
          (post: Post) => post.views > 0
        );
        const shuffledPosts = shufflePosts(filteredPosts);

        setPosts(shuffledPosts);
      } catch (error) {
        console.error("Error fetching popular posts", error);
      }
    };
    fetchPosts();
  }, []);

  if (posts.length === 0) return null;

  const mainPost = posts[0];
  const otherPosts = posts.slice(1, 4);

  return (
    <div className="md:col-span-9 col-span-12">
      <div className="grid grid-cols-12 gap-4">
        {/* Bài viết chính */}
        <div className="md:col-span-8 col-span-12">
          <img
            src={getFullImagePath(mainPost.image)}
            alt={mainPost.title}
            className="md:max-w-[520px] max-w-full h-fit w-full"
          />
        </div>
        <div className="md:col-span-4 col-span-12">
          <h2 className="md:text-2xl text-xl font-semibold">
            {mainPost.title}
          </h2>
          <span className="md:text-sm text-xs py-2 block">
            {mainPost.excerpt}
          </span>
          <div className="flex items-center gap-2 text-gray-400">
            <FaMessage className="size-3" />
            <span className="text-xs">{mainPost.views}</span>
          </div>
        </div>
      </div>

      {/* Bài viết phụ */}
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
              className="w-fit"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;

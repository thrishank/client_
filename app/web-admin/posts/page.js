"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Menu from "../_components/Menu";

function page() {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const handleDelete = async (url) => {
    try {
      const response = await fetch(
        `${NEXT_PUBLIC_BACKEND_URL}/posts-delete/${url}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      alert("Post deleted successfully");
      //reload page
      window.location.reload();

      // Assuming the post is removed from the UI after successful deletion
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const [postTitles, setPostTitles] = useState([]);

  useEffect(() => {
    fetch(`${NEXT_PUBLIC_BACKEND_URL}/posts/titles`)
      .then((response) => response.json())
      .then((data) => setPostTitles(data))
      .catch((error) => console.error("Error fetching post titles:", error));
  }, []);

  return (
    <div className=" ">
      <div className="bg-black w-full h-[100px]"></div>
      <div className=" grid grid-cols-12">
        <Menu></Menu>
        <div className="col-span-10 overflow-y-scroll">
          <div className=" p-8">
            <div className=" flex justify-between">
              <h2 className=" text-3xl ">Posts</h2>
              <Link href={"/web-admin/posts/new-post"}>
                <button className=" py-2 px-6 bg-blue-500 text-white ">
                  New Post
                </button>
              </Link>
            </div>
            <div className=" mt-4  ">
              {postTitles.map((post, index) => (
                <div
                  className="flex flex-col md:flex-row gap-4 my-8"
                  key={index}
                >
                  <div className=" md:w-3/4">
                    {" "}
                    <p className="text-[18px] font-semibold col-span-6">
                      {post.category}
                    </p>
                  </div>
                  <div className=" flex flex-row gap-4">
                    {/* <p className="text-[18px] col-span-6">{post.category}</p> */}
                    <div className="gap-4">
                      <Link href={`/blogs/${post.url}`}>
                        <button className="py-2 px-6 bg-blue-500 text-white">
                          View
                        </button>
                      </Link>
                      <Link href={`/web-admin/posts/edit/${post.url}`}>
                        <button className="py-2 px-6 bg-red-500 text-white">
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(post.url)}
                        className="py-2 px-6 bg-red-500 text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

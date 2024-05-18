"use client";
import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function Section1({ dimg, titile }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${dimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="   "
      >
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="  mb-2  pt-32 md:pt-40 pb-20   sm:max-w-xl md:max-w-full lg:max-w-screen-2xl ">
            <div className="   ">
              <div className=" mb-6">
                <h2
                  style={{ lineHeight: "1.4" }}
                  className="mb-6  text-4xl font-bold text-center tracking-tight md:text-6xl text-[#fff] "
                >
                  {titile}
                </h2>
                <p className=" text-[20px] text-white text-center">
                  Insights, Ideas, and Inspiration for Thoughtful Minds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ title, description, image, link = "/", category }) {
  return (
    <>
      <div className="p-4 rounded-[26px] bg-white">
        <div className="flex justify-center items-center relative rounded-[26px] overflow-hidden">
          <img
            src={image}
            className="w-[413px] h-[212px]  object-cover"
            alt=""
          />
        </div>
        <div>
          <div className="  items-center bg-white p-2.5 rounded-lg">
            <div className="flex flex-col justify-start items-start">
              <div className=" text-neutral-500 text-sm font-semibold  ">
                By {category}
              </div>
              <div className="flex  text-xs font-medium items-center  "></div>
            </div>
            <h3 className="text-zinc-800 text-2xl font-semibold leading-[29.52px] my-2 line-clamp-2">
              {title}
            </h3>
            <p className="text-neutral-500 text-base font-normal leading-[25.18px] line-clamp-3">
              {description && description.substring(0, 120) + `...`}
            </p>
            <div className="text-[#5236FF] text-base font-semibold pt-3 underline">
              <Link href={`/blogs/${link}`}> Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function page() {
  const [blogs, setBlogs] = useState([]);
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    fetch(`${NEXT_PUBLIC_BACKEND_URL}/posts-all`)
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching post details:", error));
  }, []);

  return (
    <div>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4JEVQXM0B7"
      ></Script>
      <Script>
        {`
         window.dataLayer = window.dataLayer || []; function gtag()
         {dataLayer.push(arguments)}
         gtag('js', new Date()); gtag('config', 'G-4JEVQXM0B7');`}
      </Script>

      <Section1 titile={"Blogs"} dimg={"/blog1.png"}></Section1>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              title={blog.category}
              description={blog.summary}
              image={blog.image_url}
              link={`/${blog.url}`}
              category={blog.author}
            />
          ))}
        </div>
        <div className=" flex justify-center mt-10">
          <button className="gap-3 bg-[#FF5948]  shadow-md text-white text-base md:text-lg font-semibold  rounded-full px-12 py-3 flex justify-center items-center hover:bg-[#0085F2] hover:text-white transition-all duration-200 hover:scale-95 hover:font-normal ">
            <span>Load More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;

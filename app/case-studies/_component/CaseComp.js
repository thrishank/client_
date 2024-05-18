"use client";
import ContactForm from "@/components/Home/ContactForm";
import BlueButton from "@/components/ui/BlueButton";
import Link from "next/link";
// import Blog from "@/app/blogs/[post]/_components/blog";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useRouter } from "next/navigation";

async function getPost(post) {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const response = await fetch(
    `${NEXT_PUBLIC_BACKEND_URL}/case-studies-find/${post}`
  );
  const data = await response.json();
  return data;
}

function Hero({
  titile,
  paragraph,
  dimg,
  imgs,
  altText,
  link = "/",
  btn = "Explore More",
}) {
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
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid grid-col-1  md:grid-cols-3 lg:grid-cols-3 items-center   mb-2 justify-evenly pt-32 md:pt-44 pb-20    mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-2xl ">
            <div className="relative col-span-2 mb-16 lg:mb-0 z-10 pb-10 w-full md:w-full max-w-2xl lg:w-full  ">
              <div className=" mb-6">
                <h2
                  style={{ lineHeight: "1.4" }}
                  className="mb-6  text-4xl font-bold tracking-tight md:text-5xl text-[#fff] "
                  dangerouslySetInnerHTML={{ __html: titile }}
                >
                  {/* {titile} */}
                </h2>
                <p className="text-2xl text-[#fff]  md:text-start">
                  {paragraph}
                </p>
              </div>
            </div>
            <div>
              <img src={imgs} alt={altText} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CaseComp({ postDetail }) {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);
  return (
    <div>
      <div className="relative"></div>

      <div className="">
        <div className=" ">
          <div>
            {postDetail ? (
              <div>
                <>
                  <Hero
                    titile={postDetail.category}
                    paragraph={postDetail.summary}
                    dimg={"/blogbg.png"}
                    imgs={postDetail.coverImage}
                    altText={postDetail.altText?.cover_image}
                  ></Hero>

                  <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 py-10  my-10">
                    <p className="text-3xl md:text-5xl text-center text-[#ff5948] my-8 font-bold">
                      Client Requirements
                    </p>
                    <div
                      className="text-base text-left text-[#797979] my-6"
                      dangerouslySetInnerHTML={{ __html: postDetail.content }}
                    />

                    <p className="text-3xl md:text-5xl text-center text-[#ff5948] my-10 py-4 font-bold">
                      Project Goals
                    </p>
                    <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
                      <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="relative p-5 bg-white rounded-sm">
                          <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-[#0085F2] lg:mb-0">
                              <svg
                                className="w-8 h-8 text-white"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                              >
                                <polygon
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  fill="none"
                                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                              </svg>
                            </div>
                          </div>
                          <p className="text-base  text-[#797979] mt-2">
                            {postDetail.goal1}
                          </p>
                        </div>
                      </div>
                      <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="relative p-5 bg-white rounded-sm">
                          <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-[#0085F2] lg:mb-0">
                              <svg
                                className="w-8 h-8 text-white"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                              >
                                <polygon
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  fill="none"
                                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                              </svg>
                            </div>
                          </div>
                          <p className="text-base  text-[#797979] mt-2">
                            {postDetail.goal2}
                          </p>
                        </div>
                      </div>
                      <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="relative p-5 bg-white rounded-sm">
                          <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-[#0085F2] lg:mb-0">
                              <svg
                                className="w-8 h-8 text-white"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                              >
                                <polygon
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  fill="none"
                                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                              </svg>
                            </div>
                          </div>
                          <p className="text-base  text-[#797979] mt-2">
                            {postDetail.goal3}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-3xl md:text-5xl font-bold text-center text-[#ff5948] my-12 py-4">
                      Features
                    </p>
                    <div className=" flex flex-col gap-4 my-8">
                      {postDetail.features.length > 0 &&
                        postDetail.features.map((items, index) => {
                          return (
                            <div
                              key={items.titile}
                              className={`flex flex-col justify-start items-start overflow-hidden gap-2.5 px-6 py-[22px] rounded-2xl bg-white w-fit ${
                                index % 2 === 1 ? "md:ml-auto" : ""
                              }`}
                              style={{
                                boxShadow: "0px 4px 8px 0 rgba(4,2,34,0.1)",
                              }}
                            >
                              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                                <p
                                  className={`flex-grow-0 flex-shrink-0  text-xl font-medium text-left text-[#0085f2]`}
                                >
                                  {items.title}
                                </p>
                                <p className="flex-grow-0 flex-shrink-0  md:w-[552px] text-base text-left text-[#797979]">
                                  {items.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                    </div>

                    <p className="text-3xl md:text-5xl font-bold text-center text-[#ff5948] my-12 py-4">
                      More Screens
                    </p>
                    <div className=" grid grid-cols-2 md:grid-cols-3">
                      {postDetail.screenshots?.map((items, index) => {
                        return (
                          <img
                            src={items}
                            className="w-[80%] md:mx-10 p-2 m-2"
                            alt={postDetail.altText?.moreScreen_image[index]}
                          />
                        );
                      })}
                    </div>

                    <p className="text-3xl md:text-5xl font-bold text-center my-12 py-4 text-[#ff5948]">
                      Technology we Used
                    </p>

                    <p className=" text-base text-center text-[#797979]">
                      {postDetail.stackDesc}
                    </p>
                    <div className="flex justify-center items-center">
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-10 md:gap-28 ">
                        {postDetail.stackImages?.map((items, index) => {
                          return (
                            <img
                              src={items}
                              className=" h-28 w-28"
                              alt={postDetail.altText?.stack_image[index]}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </>

                {/* <Blog postDetail={postDetail}></Blog> */}
              </div>
            ) : (
              <>
                <div className="bg-black w-full h-24"></div>
                <div class="w-full max-w-md mx-auto animate-pulse p-9">
                  <h1 class="h-2 bg-gray-300 rounded-lg w-52 "></h1>

                  <p class="w-48 h-2 mt-6 bg-gray-200 rounded-lg "></p>
                  <p class="w-full h-2 mt-4 bg-gray-200 rounded-lg"></p>
                  <p class="w-64 h-2 mt-4 bg-gray-200 rounded-lg "></p>
                  <p class="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg "></p>
                </div>
              </>
            )}

            <div className="px-4  mx-auto sm:max-w-xl md:max-w-[850px] md:px-36  pb-6 py-10 bg-[#112049] my-10">
              <div className=" md:flex md:justify-center md:items-center text-center">
                <div className="  px-6">
                  <span className=" text-5xl font-medium text-center text-white">
                    Want to Maximize Your App's Success?
                  </span>
                  <p className=" text-xl text-center text-[#e2e2e2] my-4">
                    Our Dedicated Team Always Here to Assist You!
                  </p>
                  <Link href={"/contact-us"}>
                    <button className=" my-4 px-12 py-4 rounded-[30px] bg-[#ff5948] text-white text-lg font-medium">
                      Contact us
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseComp;

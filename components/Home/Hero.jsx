import Image from "next/image";
import React from "react";
import WhiteButton from "../ui/WhiteButton";

function Hero({
  titile,
  paragraph,
  dimg,
  mimg,
  link = "/",
  btn = "Explore More",
}) {
  return (
    <>
      <div className="hidden md:block   ">
        <Image
          src={dimg}
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid grid-col-1  md:grid-cols-3 lg:grid-cols-3 items-center   mb-2 justify-evenly pt-32 md:pt-44 pb-20   h-screen mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-2xl ">
            <div className="relative col-span-2 mb-16 lg:mb-0 z-10 pb-10 w-full md:w-full max-w-2xl lg:w-full  ">
              <div className=" mb-6">
                <h1
                  style={{ lineHeight: "1.4" }}
                  className="mb-6  text-4xl font-bold tracking-tight md:text-5xl text-[#fff] "
                  dangerouslySetInnerHTML={{ __html: titile }}
                ></h1>
                <p className="text-2xl text-[#fff]  md:text-start">
                  {paragraph}
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center text-center md:text-start mt-14">
                <WhiteButton text={btn} link={link}></WhiteButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block  ">
        <Image
          src={mimg}
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="grid grid-col-1  md:grid-cols-3 lg:grid-cols-3 items-center px-4 md:px-12 mb-2 justify-evenly pt-32 md:pt-44 pb-20   h-screen mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-2xl ">
          <div className="relative col-span-2 mb-16 lg:mb-0 z-10 pb-10 w-full md:w-full max-w-2xl lg:w-full  ">
            <div className=" mb-6">
              <h2
                className="mb-6 text-center  text-4xl font-bold tracking-tight md:text-6xl text-[#fff] "
                dangerouslySetInnerHTML={{ __html: titile }}
              ></h2>
              <p className="text-2xl text-[#fff]  text-center md:text-start">
                {paragraph}
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center text-center md:text-start mt-5">
              <WhiteButton text={btn} link={link}></WhiteButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

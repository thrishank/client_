import React from "react";

function Section5() {
  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-4 -mb-10 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Industries We Serve
        </h2>
        <div className=" flex justify-center text-center md:px-56 py-6 ">
          {" "}
          <p className="text-base text-[#797979] md:text-lg">
            We specialize in Flutter app development, serving industries across
            the <br /> board with tailored solutions for digital transformation.
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-6 gap-8  ">
        <div className=" flex flex-col justify-center items-center">
          <img src="/svg/40.svg" alt="" />
          <p className=" py-4 font-medium text-[22px] text-[#040222]">Food </p>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <img src="/svg/41.svg" alt="" />
          <p className=" py-4 font-medium text-[22px] text-[#040222]">
            Ecommerce{" "}
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <img src="/svg/42.svg" alt="" />
          <p className=" py-4 font-medium text-[22px] text-[#040222]">
            {" "}
            Sports
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <img src="/svg/43.svg" alt="" />
          <p className=" py-4 font-medium text-[22px] text-[#040222]">
            {" "}
            Marketplace
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <img src="/svg/44.svg" alt="" />
          <p className=" py-4 font-medium text-[22px] text-[#040222]">
            {" "}
            Education
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <img src="/svg/45.svg" alt="" />
          <p className=" py-4 font-medium text-[22px] text-[#040222]">
            {" "}
            Real Estate
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <img src="/svg/46.svg" alt="" />
          <p className=" py-4 font-medium text-[22px] text-[#040222]">
            {" "}
            Tourism
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <img src="/svg/47.svg" alt="" />
          <p className=" py-4 font-medium text-[22px] text-[#040222]">
            {" "}
            Dating
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <img src="/svg/48.svg" alt="" />
          <p className=" py-4 font-medium text-[22px] text-[#040222]">
            {" "}
            Logistics
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <img src="/svg/51.svg" alt="" />
          <p className=" py-4 font-medium text-[22px] text-[#040222]">
            {" "}
            Healthcare
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <img src="/svg/49.svg" alt="" />
          <p className=" py-4 font-medium text-[22px] text-[#040222]">
            {" "}
            Fitness
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <img src="/svg/50.svg" alt="" />
          <p className=" py-4 font-medium text-[22px] text-[#040222]">
            {" "}
            Entertainment
          </p>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row justify-between md:px-10 py-6"></div>

      <div className=" flex flex-col md:flex-row justify-between  md:px-10 py-6"></div>
    </div>
  );
}

export default Section5;

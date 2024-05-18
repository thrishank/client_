import React from "react";

const leftData = [
  {
    title: "Food Delivery App",
    image: "/svg/26.svg",
    color: "FCEDF5",
  },
  {
    title: "Dating App",
    image: "/svg/27.svg",
    color: "EAF6FF",
  },
  {
    title: "Hotel Booking App",
    image: "/svg/28.svg",
    color: "FFEFBE",
  },
  {
    title: "Ecommerce App",
    image: "/svg/29.svg",
    color: "D9DCFF",
  },
];

const rightData = [
  {
    title: "Taxi Booking App",
    image: "/svg/30.svg",
    color: "#FCEDF5",
  },
  {
    title: "Fitness App",
    image: "/svg/31.svg",
    color: "#EAF6FF",
  },
  {
    title: "Travel App",
    image: "/svg/32.svg",
    color: "#FFEFBE",
  },
  {
    title: "Video/Chat App",
    image: "/svg/33.svg",
    color: "#D9DCFF",
  },
];

function Card({ title, image, color }) {
  return (
    <div className="  flex gap-4 items-center  bg-white p-2.5 rounded-lg">
      <div
        className={`w-[60px] h-[60px] bg-[#${color}] rounded-lg flex items-center justify-center`}
      >
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col justify-start items-start">
        <div className=" text-slate-950 text-[22px] font-medium  ">{title}</div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 py-10 mb-10 ">
      <div className=" mb-8">
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          On Demand App Solutions{" "}
        </h2>
        <div className=" flex justify-center text-center md:px-56 py-6 ">
          {" "}
          <p className="text-base text-[#797979] md:text-lg">
            Our on-demand mobile app design, strategically crafted to meet{" "}
            <br /> the evolving needs of today's dynamic market.
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <div className="  flex gap-4 items-center  bg-white p-2.5 rounded-lg">
            <div
              className={`w-[60px] h-[60px] bg-[#FCEDF5] rounded-lg flex items-center justify-center`}
            >
              <img src={leftData[0].image} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className=" text-slate-950 text-[22px] font-medium  ">
                {leftData[0].title}
              </div>
            </div>
          </div>

          <div className="  flex gap-4 items-center  bg-white p-2.5 rounded-lg">
            <div
              className={`w-[60px] h-[60px] bg-[#EAF6FF] rounded-lg flex items-center justify-center`}
            >
              <img src={leftData[1].image} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className=" text-slate-950 text-[22px] font-medium  ">
                {leftData[1].title}
              </div>
            </div>
          </div>

          <div className="  flex gap-4 items-center  bg-white p-2.5 rounded-lg">
            <div
              className={`w-[60px] h-[60px] bg-[#FFEFBE] rounded-lg flex items-center justify-center`}
            >
              <img src={leftData[2].image} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className=" text-slate-950 text-[22px] font-medium  ">
                {leftData[2].title}
              </div>
            </div>
          </div>

          <div className="  flex gap-4 items-center  bg-white p-2.5 rounded-lg">
            <div
              className={`w-[60px] h-[60px] bg-[#D9DCFF] rounded-lg flex items-center justify-center`}
            >
              <img src={leftData[3].image} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className=" text-slate-950 text-[22px] font-medium  ">
                {leftData[3].title}
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/services2.png"
            className=" w-full h-full"
            alt="a person sitting on the floor with a laptop"
          />
        </div>
        <div className="md:ml-8">
          <div className="  flex gap-4 items-center  bg-white p-2.5 rounded-lg">
            <div
              className={`w-[60px] h-[60px] bg-[#FFF0B4] rounded-lg flex items-center justify-center`}
            >
              <img src={rightData[0].image} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className=" text-slate-950 text-[22px] font-medium  ">
                {rightData[0].title}
              </div>
            </div>
          </div>
          <div className="  flex gap-4 items-center  bg-white p-2.5 rounded-lg">
            <div
              className={`w-[60px] h-[60px] bg-[#B5F6D3] rounded-lg flex items-center justify-center`}
            >
              <img src={rightData[1].image} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className=" text-slate-950 text-[22px] font-medium  ">
                {rightData[1].title}
              </div>
            </div>
          </div>

          <div className="  flex gap-4 items-center  bg-white p-2.5 rounded-lg">
            <div
              className={`w-[60px] h-[60px] bg-[#CFFFB1] rounded-lg flex items-center justify-center`}
            >
              <img src={rightData[2].image} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className=" text-slate-950 text-[22px] font-medium  ">
                {rightData[2].title}
              </div>
            </div>
          </div>

          <div className="  flex gap-4 items-center  bg-white p-2.5 rounded-lg">
            <div
              className={`w-[60px] h-[60px] bg-[#FEE2C9] rounded-lg flex items-center justify-center`}
            >
              <img src={rightData[3].image} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className=" text-slate-950 text-[22px] font-medium  ">
                {rightData[3].title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;

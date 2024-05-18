import React from "react";

function Section3() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-8 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Key Features of Sports App
        </h2>
        <p className=" text-center mt-2 text-base text-[#797979] md:text-lg">
          With the top sports app development business, discover all the
          essential elements of our sports app solution.
        </p>
      </div>
      <div>
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
          <div className=" col-span-2 mt-10  md:hidden">
            {" "}
            <div className=" flex flex-col justify-center items-center">
              {" "}
              <img
                src="/svg/sporti3.svg"
                className=""
                alt="a person climbing a pole"
              />
            </div>
          </div>
          <div>
            <div className=" flex flex-col gap-4 py-6">
              <div className=" flex flex-col items-center  ">
                <div className=" p-3   rounded-full w-fit">
                  <img src="/svg/spi1.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">
                  Easy Navigation
                </p>
              </div>

              <div className=" flex flex-col items-center  ">
                <div className=" p-3   rounded-full w-fit">
                  <img src="/svg/spi2.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">User Account</p>
              </div>

              <div className=" flex flex-col items-center  ">
                <div className=" p-3   rounded-full w-fit">
                  <img src="/svg/spi3.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">
                  In-App Purchase
                </p>
              </div>

              <div className=" flex flex-col items-center  ">
                <div className=" p-3   rounded-full w-fit">
                  <img src="/svg/spi4.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">Notifications</p>
              </div>

              <div className=" flex flex-col items-center  ">
                <div className=" p-3   rounded-full w-fit">
                  <img src="/svg/spi5.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">Live Feed</p>
              </div>
            </div>
          </div>

          <div className=" hidden md:block">
            {" "}
            <div className=" flex flex-col justify-center items-center">
              {" "}
              <img src="/svg/sporti3.svg" className="" alt="" />
            </div>
          </div>
          <div className=" ">
            <div className=" flex flex-col gap-4 py-6">
              <div className=" flex flex-col items-center  ">
                <div className=" p-3   rounded-full w-fit">
                  <img src="/svg/spi6.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">Easy Payment</p>
              </div>

              <div className=" flex flex-col items-center  ">
                <div className=" p-3   rounded-full w-fit">
                  <img src="/svg/spi7.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">
                  Customer Support
                </p>
              </div>

              <div className=" flex flex-col items-center  ">
                <div className=" p-3   rounded-full w-fit">
                  <img src="/svg/spi8.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">
                  Schedule Option
                </p>
              </div>

              <div className=" flex flex-col items-center  ">
                <div className=" p-3   rounded-full w-fit">
                  <img src="/svg/spi9.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">
                  User Management
                </p>
              </div>

              <div className=" flex flex-col items-center  ">
                <div className=" p-3   rounded-full w-fit">
                  <img src="/svg/spi10.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">Betting Tips</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;

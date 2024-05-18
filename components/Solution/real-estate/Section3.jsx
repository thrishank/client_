import React from "react";

function Section3() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-8 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Key Features of Real Estate App
        </h2>
        <p className=" text-center mt-2 text-base text-[#797979] md:text-lg">
          Partnering with the leading real estate app development company,
          discover the comprehensive <br /> elements of our cutting-edge
          technology.
        </p>
      </div>
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="/svg/real3.svg"
            className=" mx-auto"
            alt="a phone screen with a house and boxes inside phone screen
"
          />
          <div className=" flex gap-10 md:ml-[100px]">
            <div>
              <div className=" flex flex-col gap-4 py-6">
                <div className=" flex flex-col items-center  ">
                  <div className=" p-3 bg-[#606B78] rounded-full w-fit">
                    <img src="/svg/reali1.svg" alt="" />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">
                    Account Setting
                  </p>
                </div>

                <div className=" flex flex-col items-center  ">
                  <div className=" p-3 bg-[#606B78] rounded-full w-fit">
                    <img src="/svg/reali2.svg" alt="" />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">Location</p>
                </div>

                <div className=" flex flex-col items-center  ">
                  <div className=" p-3 bg-[#606B78] rounded-full w-fit">
                    <img src="/svg/reali3.svg" alt="" />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">
                    Personalizations
                  </p>
                </div>

                <div className=" flex flex-col items-center  ">
                  <div className=" p-3 bg-[#606B78] rounded-full w-fit">
                    <img src="/svg/reali4.svg" alt="" />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">
                    Push Notifications
                  </p>
                </div>
              </div>
            </div>
            <div className=" md:mt-20">
              <div className=" flex flex-col gap-4 py-6">
                <div className=" flex flex-col items-center  ">
                  <div className=" p-3 bg-[#606B78] rounded-full w-fit">
                    <img src="/svg/reali5.svg" alt="" />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">
                    Direct communication
                  </p>
                </div>

                <div className=" flex flex-col items-center  ">
                  <div className=" p-3 bg-[#606B78] rounded-full w-fit">
                    <img src="/svg/reali6.svg" alt="" />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">Chat Option</p>
                </div>

                <div className=" flex flex-col items-center  ">
                  <div className=" p-3 bg-[#606B78] rounded-full w-fit">
                    <img src="/svg/reali7.svg" alt="" />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">
                    Search Filters
                  </p>
                </div>

                <div className=" flex flex-col items-center  ">
                  <div className=" p-3 bg-[#606B78] rounded-full w-fit">
                    <img src="/svg/reali8.svg" alt="" />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">Login</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;

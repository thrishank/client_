import React from "react";

function Section3() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-8 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Key Features of Dating App
        </h2>
        <p className=" text-center mt-2 text-base text-[#797979] md:text-lg">
          To find out more about all the components that make up our dating app
          solution, get in contact <br /> with the leading dating app
          development company.
        </p>
      </div>
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img src="/svg/dating4.svg" className=" mx-auto" alt="" />
          <div className=" flex gap-10 md:ml-[100px]">
            <div>
              <div className=" flex flex-col gap-4 py-6">
                <div className=" flex flex-col items-center  ">
                  <div className=" p-3  rounded-full w-fit">
                    <img src="/svg/datingi1.svg" alt="" />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">
                    Registration Login
                  </p>
                </div>

                <div className=" flex flex-col items-center  ">
                  <div className=" p-3  rounded-full w-fit">
                    <img src="/svg/datingi2.svg" alt="" />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">Geo Location</p>
                </div>

                <div className=" flex flex-col items-center  ">
                  <div className=" p-3  rounded-full w-fit">
                    <img src="/svg/datingi3.svg" alt="" />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">Chat</p>
                </div>

                <div className=" flex flex-col items-center  ">
                  <div className=" p-3  rounded-full w-fit">
                    <img src="/svg/datingi4.svg" alt="" />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">
                    Search And Swipe
                  </p>
                </div>
              </div>
            </div>
            <div className=" md:mt-20">
              <div className=" flex flex-col gap-4 py-6">
                <div className=" flex flex-col items-center  ">
                  <div className=" p-3  rounded-full w-fit">
                    <img
                      src="/svg/datingi5.svg"
                      alt="a person and person standing next to a cellphone
"
                    />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">Voice Mails</p>
                </div>

                <div className=" flex flex-col items-center  ">
                  <div className=" p-3 rounded-full w-fit">
                    <img src="/svg/datingi6.svg" alt="" />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">
                    Safety and Privacy
                  </p>
                </div>

                <div className=" flex flex-col items-center  ">
                  <div className=" p-3 rounded-full w-fit">
                    <img src="/svg/datingi7.svg" alt="" />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">Video Calls</p>
                </div>

                <div className=" flex flex-col items-center  ">
                  <div className=" p-3  rounded-full w-fit">
                    <img src="/svg/datingi8.svg" alt="" />
                  </div>
                  <p className=" text-[15px] font-medium mt-4 ">
                    Real-Time Alerts
                  </p>
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

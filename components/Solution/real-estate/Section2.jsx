import React from "react";

function Section2() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6  ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Let's Redefine Real Estate Together!
        </h2>
        <p className=" text-center mt-2 text-base text-[#797979] md:text-lg">
          Whether you're a real estate agency, property management company, or
          individual agent, Overninja is your trusted partner for real estate
          app development. Let's collaborate and create a game-changing app that
          connects buyers and sellers, drives property transactions, and propels
          your real estate business to success. Contact us today to get started
          on your real estate app journey!
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-5">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 md:w-[260px] overflow-hidden gap-6 px-6 py-8 rounded-[10px] bg-[#FFAA63] "
            style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
          >
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                65%
              </p>
              <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
              </div>
              <p className="self-stretch flex-grow-0 flex-shrink-0 md:w-[212px] text-base text-center text-white">
                of users find a property on the application
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 md:w-[260px] overflow-hidden gap-2.5 px-6 py-8 rounded-[10px] bg-[#C45454] border border-[#e1e4ed]"
            style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
          >
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                70%
              </p>
              <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
              </div>
              <p className="self-stretch flex-grow-0 flex-shrink-0 md:w-[212px] text-base text-center text-white">
                of daily traffic on these apps
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 md:md:w-[260px] overflow-hidden gap-6 px-6 py-8 rounded-[10px] bg-[#6DD6FF] border border-[#e1e4ed] "
            style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
          >
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                41%
              </p>
              <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
              </div>
              <p className="self-stretch flex-grow-0 flex-shrink-0 md:w-[212px] text-base text-center text-white">
                of people buy property from real estate
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 md:w-[260px] overflow-hidden gap-2.5 px-6 py-8 rounded-[10px] bg-[#00D471] border border-[#e1e4ed]"
            style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
          >
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                66%
              </p>
              <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
              </div>
              <p className="self-stretch flex-grow-0 flex-shrink-0 md:w-[212px] text-base text-center text-white">
                of but property in the first watch
              </p>
            </div>
          </div>
        </div>

        <div className=" p-5">
          <img
            src="/svg/real-estatei5.svg"
            alt="a house with a garage and a car inside phone screen
"
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;

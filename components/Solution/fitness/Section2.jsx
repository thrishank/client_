import React from "react";

function Section2() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Let's Empower Fitness Together!
        </h2>
        <p className=" text-center mt-2 text-base text-[#797979] md:text-lg">
          Whether you're a fitness professional, gym owner, health enthusiast,
          or wellness startup, Overninja is your trusted partner for fitness app
          development. Let's collaborate and create a game-changing app that
          inspires, motivates, and transforms lives. Contact us today to get
          started on your fitness app journey!
        </p>
      </div>
      <div className=" mt-10 ">
        <div className=" grid grid-cols-1 md:grid-cols-3  gap-8 ">
          <div className=" flex flex-col gap-8 justify-center items-center">
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[260px] overflow-hidden gap-6 px-6 py-8 rounded-[10px] bg-[#74679E] "
              style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
            >
              <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                  22%
                </p>
                <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                  <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
                </div>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[212px] text-base text-center text-white">
                  of CAGR is by fitness app
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[260px] overflow-hidden gap-2.5 px-6 py-8 rounded-[10px] bg-[#FF5065] border border-[#e1e4ed]"
              style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
            >
              <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                  66%
                </p>
                <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                  <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
                </div>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[212px] text-base text-center text-white">
                  of growth in fitness apps in the past two years
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className=" flex flex-col gap-8 justify-center items-center">
            <img
              src="/svg/fitness2.svg"
              alt="a person running with a smart watch
"
            />
          </div>
          <div className=" flex flex-col gap-8 justify-center items-center">
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 md:w-[260px] overflow-hidden gap-6 px-6 py-8 rounded-[10px] bg-[#23DFFE] border border-[#e1e4ed] "
              style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
            >
              <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                  24%
                </p>
                <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                  <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
                </div>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[212px] text-base text-center text-white">
                  of growth every year in this industry
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[260px] overflow-hidden gap-2.5 px-6 py-8 rounded-[10px] bg-[#FF28BC] border border-[#e1e4ed]"
              style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
            >
              <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                  38%
                </p>
                <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                  <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
                </div>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[212px] text-base text-center text-white">
                  daily active users on the fitness app
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;

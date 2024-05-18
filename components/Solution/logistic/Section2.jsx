import React from "react";

function Section2() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6  ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Let's Optimize Your Logistics Operations Together!
        </h2>
        <p className=" text-center mt-2 text-base text-[#797979] md:text-lg">
          Whether you're a logistics company, e-commerce retailer, or supply{" "}
          chain manager, Overninja is your trusted partner for logistics app{" "}
          development. Let's collaborate and create a logistics solution that{" "}
          streamlines operations, improves efficiency, and drives success in the{" "}
          dynamic world of logistics. Contact us today to get started on your
          logistics app journey!
        </p>
      </div>
      <div className=" mt-10 ">
        <div className=" grid grid-cols-1 md:grid-cols-3  gap-8 ">
          <div className=" flex flex-col gap-8 justify-center items-center">
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[260px] overflow-hidden gap-6 px-6 py-8 rounded-[10px] bg-[#FFAA63] "
              style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
            >
              <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                  45%
                </p>
                <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                  <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
                </div>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[212px] text-base text-center text-white">
                  Pay Additional Money for Fast Home Delivery
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[260px] overflow-hidden gap-2.5 px-6 py-8 rounded-[10px] bg-[#6DD6FF] border border-[#e1e4ed]"
              style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
            >
              <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                  12%
                </p>
                <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                  <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
                </div>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[212px] text-base text-center text-white">
                  CAGR has been growth in this business.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className=" flex flex-col gap-8 justify-center items-center">
            <img
              src="/svg/logi9.svg"
              alt="a person riding a scooter on a tablet"
            />
          </div>
          <div className=" flex flex-col gap-8 justify-center items-center">
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 md:w-[260px] overflow-hidden gap-6 px-6 py-8 rounded-[10px] bg-[#C45454] border border-[#e1e4ed] "
              style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
            >
              <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                  40%
                </p>
                <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                  <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
                </div>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[212px] text-base text-center text-white">
                  Receive And Send Parcel Each Day
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[260px] overflow-hidden gap-2.5 px-6 py-8 rounded-[10px] bg-[#00D471] border border-[#e1e4ed]"
              style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
            >
              <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                  28%
                </p>
                <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                  <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
                </div>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[212px] text-base text-center text-white">
                  Company Give Easy discount on delivers
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

import React from "react";

function Section2() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex flex-col justify-start items-start relative">
            <p className="flex-grow-0 flex-shrink-0  text-4xl font-semibold text-left text-[#040222]">
              Let's Transform Healthcare Together!
            </p>

            <p className="flex-grow-0 flex-shrink-0 my-4 text-base text-left text-[#797979]">
              Whether you're a healthcare provider, medical professional, or
              healthcare entrepreneur, Overninja is your trusted partner for
              healthcare app development. Let's collaborate and create a
              healthcare solution that improves patient care, enhances medical
              services, and revolutionizes the way healthcare is delivered.
              Contact us today to get started on your healthcare app journey!
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 md:w-[260px] overflow-hidden gap-6 px-6 py-8 rounded-[10px] bg-[#f85959] md:mt-10"
            style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
          >
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                21%
              </p>
              <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
              </div>
              <p className="self-stretch flex-grow-0 flex-shrink-0 md:w-[212px] text-base text-center text-white">
                of Appointment are taken by mobile app
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 md:w-[260px] overflow-hidden gap-2.5 px-6 py-8 rounded-[10px] bg-[#ffb20e] border border-[#e1e4ed]"
            style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
          >
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                11%
              </p>
              <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
              </div>
              <p className="self-stretch flex-grow-0 flex-shrink-0 md:w-[212px] text-base text-center text-white">
                of Hospitals provide an online appointment feature
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 md:md:w-[260px] overflow-hidden gap-6 px-6 py-8 rounded-[10px] bg-[#1cb598] border border-[#e1e4ed] "
            style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
          >
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                40%
              </p>
              <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
              </div>
              <p className="self-stretch flex-grow-0 flex-shrink-0 md:w-[212px] text-base text-center text-white">
                of people search for doctors online
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 md:w-[260px] overflow-hidden gap-2.5 px-6 py-8 rounded-[10px] bg-[#6768e7] border border-[#e1e4ed]"
            style={{ boxShadow: "0px 1px 4px 0 rgba(25,33,61,0.08)" }}
          >
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-white">
                75%
              </p>
              <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative opacity-0">
                <div className="w-4 h-4 absolute left-[-1px] top-[-1px] bg-[#f1f3f7] border border-[#6d758f]" />
              </div>
              <p className="self-stretch flex-grow-0 flex-shrink-0 md:w-[212px] text-base text-center text-white">
                of doctors give online health updates to patient
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;

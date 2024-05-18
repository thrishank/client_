import React from "react";

function Section3() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-8 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Key Features of Marketplace App
        </h2>
        <p className=" text-center mt-2 text-base text-[#797979] md:text-lg">
          Find out all of the key components of our marketplace app solution
          with <br /> the best marketplace app development company.
        </p>
      </div>
      <div>
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
          <div className=" col-span-2 mt-10  md:hidden">
            {" "}
            <div className=" flex flex-col justify-center items-center">
              {" "}
              <img
                src="/svg/market4.svg"
                className=""
                alt="a person standing next to a large cellphone
"
              />
            </div>
          </div>
          <div>
            <div className=" flex flex-col gap-4 py-6">
              <div className=" flex flex-col items-center  ">
                <div className=" p-3  rounded-full w-fit">
                  <img src="/svg/marketi1.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">
                  Account Linking
                </p>
              </div>

              <div className=" flex flex-col items-center  ">
                <div className=" p-3  rounded-full w-fit">
                  <img src="/svg/marketi2.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">Registration</p>
              </div>

              <div className=" flex flex-col items-center  ">
                <div className=" p-3  rounded-full w-fit">
                  <img src="/svg/marketi3.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">
                  Profile Management
                </p>
              </div>

              <div className=" flex flex-col items-center  ">
                <div className=" p-3  rounded-full w-fit">
                  <img src="/svg/marketi7.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">Safe Payment</p>
              </div>
            </div>
          </div>

          <div className=" hidden md:block">
            {" "}
            <div className=" flex flex-col justify-center items-center">
              {" "}
              <img src="/svg/market4.svg" className="" alt="" />
            </div>
          </div>
          <div className=" ">
            <div className=" flex flex-col gap-4 py-6">
              <div className=" flex flex-col items-center  ">
                <div className=" p-3  rounded-full w-fit">
                  <img src="/svg/marketi4.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">
                  Review and Ratings
                </p>
              </div>

              <div className=" flex flex-col items-center  ">
                <div className=" p-3  rounded-full w-fit">
                  <img src="/svg/marketi5.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">
                  Receive Notifications
                </p>
              </div>

              <div className=" flex flex-col items-center  ">
                <div className=" p-3  rounded-full w-fit">
                  <img src="/svg/marketi6.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">
                  Money Management
                </p>
              </div>

              <div className=" flex flex-col items-center  ">
                <div className=" p-3  rounded-full w-fit">
                  <img src="/svg/marketi8.svg" alt="" />
                </div>
                <p className=" text-[15px] font-medium mt-4 ">
                  Safety and Privacy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;

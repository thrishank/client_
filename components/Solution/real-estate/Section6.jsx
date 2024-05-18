import BlueButton from "@/components/ui/BlueButton";
import React from "react";

function Section6() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className=" px-6 py-8  rounded-md">
          <h2 className=" text-3xl md:text-5xl font-semibold">
            Real Estate <br /> App Development Cost
          </h2>
          <p className=" text-[#797979] text-lg py-5">
            Building a simple app with all the required parts could be less
            expensive than creating a complex app with lots of features. The
            cost of developing a real estate app varies depending on a number of
            variables. To arrange a free phone consultation, please contact us.
          </p>
          <BlueButton text={"Contact Us"}></BlueButton>
        </div>

        <div className=" p-5 ml-auto w-full md:w-[600px]">
          <img
            src="/svg/real5.svg"
            alt="two persons standing next to a large cellphone dealing for property for sale"
          />
        </div>
      </div>
    </div>
  );
}

export default Section6;

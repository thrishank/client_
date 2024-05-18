import BlueButton from "@/components/ui/BlueButton";
import React from "react";

function Section6() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className=" px-6 py-8  rounded-md flex flex-col justify-center">
          <h2 className=" text-3xl md:text-5xl font-semibold">
            Dating App <br /> Development Cost
          </h2>
          <p className=" text-[#797979] text-lg py-5">
            Designing a simple app with all the necessary parts will be less
            expensive than designing a sophisticated app with several features.
            The cost of developing a dating application is influenced by
            numerous factors. For a free phone consultation, get in touch with
            us.
          </p>
          <BlueButton text={"Contact Us"} link="/contact-us"></BlueButton>
        </div>

        <div className=" p-5 ml-auto">
          <img
            src="/svg/dating5.svg"
            alt="a person and person using their phones"
          />
        </div>
      </div>
    </div>
  );
}

export default Section6;

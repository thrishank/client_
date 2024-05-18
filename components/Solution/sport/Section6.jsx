import BlueButton from "@/components/ui/BlueButton";
import React from "react";

function Section6() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className=" p-5">
          <img
            src="/svg/sporti5.svg"
            alt="a person running next to a cell phone"
          />
        </div>
        <div className=" px-6 py-8  rounded-md">
          <h2 className=" text-3xl md:text-5xl font-semibold">
            Sports App <br /> Development Cost
          </h2>
          <p className=" text-[#797979] text-lg py-5">
            The cost of developing a sports app varies based on a number of
            factors; an app that is basic and has all the necessary components
            may be less expensive to produce than one that has many features and
            complex functionalities. Get in touch with us to set up a free phone
            consultation.
          </p>
          <BlueButton text={"Contact Us"} link="/contact-us"></BlueButton>
        </div>
      </div>
    </div>
  );
}

export default Section6;

import BlueButton from "@/components/ui/BlueButton";
import React from "react";

function Section6() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <div className=" p-5">
          <img
            src="/svg/market6.svg"
            alt="two persons sitting next to a large cellphone"
          />
        </div>
        <div className=" px-6 py-8  rounded-md  flex flex-col justify-center">
          <h2 className=" text-3xl md:text-5xl font-semibold">
            Marketplace App <br /> Development Cost
          </h2>
          <p className=" text-[#797979] text-lg py-5">
            An app that is basic and has all the required components may be less
            expensive to construct than one that has numerous features and
            complicated functionalities. The cost of developing a marketplace
            app varies depending on a number of things. To arrange a free phone
            consultation, contact us.
          </p>
          <BlueButton text={"Contact Us"}></BlueButton>
        </div>
      </div>
    </div>
  );
}

export default Section6;

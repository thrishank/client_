import BlueButton from "@/components/ui/BlueButton";
import React from "react";

function Section6() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className=" p-5">
          <img
            src="/svg/ecom5.svg"
            alt="a person standing next to a computer screen"
          />
        </div>
        <div className=" px-4 py-8  rounded-md">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Ecommerce App <br /> Development Cost
          </h2>
          <p className=" text-[#797979] text-lg py-5">
            An ecommerce app's development cost varies depending on several
            things; a basic app with all the elements it requires can be less
            expensive than one with a ton of features and sophisticated
            functionalities. Contact us to arrange a free consultation over the
            phone.
          </p>
          <BlueButton text={"Contact Us"} link="/contact-us"></BlueButton>
        </div>
      </div>
    </div>
  );
}

export default Section6;

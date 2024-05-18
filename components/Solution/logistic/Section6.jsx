import BlueButton from "@/components/ui/BlueButton";
import React from "react";

function Section6() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className=" p-5">
          <img src="/svg/logistic5.svg" alt="a truck with boxes and a globe" />
        </div>
        <div className=" px-6 py-8  rounded-md">
          <h2 className=" text-3xl md:text-5xl font-semibold">
            Logistics App <br /> Development Cost
          </h2>
          <p className=" text-[#797979] text-lg py-5">
            It will be less expensive to build a basic app with all the
            components than a complex app with multiple features. Many factors
            affect the cost for creating a logistics application. Contact us for
            a free consultation over the phone.
          </p>
          <BlueButton text={"Contact Us"}></BlueButton>
        </div>
      </div>
    </div>
  );
}

export default Section6;

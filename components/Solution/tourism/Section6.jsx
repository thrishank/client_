import BlueButton from "@/components/ui/BlueButton";
import React from "react";

function Section6() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className=" px-6 py-8  rounded-md">
          <h2 className=" text-3xl md:text-5xl font-semibold">
            Tourism App
            <br /> Development Cost
          </h2>
          <p className=" text-[#797979] text-lg py-5">
            It will be cheaper expensive to design a basic app with all the
            components needed than a complex app with several functionalities.
            Many factors influence how much it costs to build a tourism
            application. Reach out to us for a complimentary phone consultation.
          </p>
          <BlueButton text={"Contact Us"}></BlueButton>
        </div>

        <div className=" flex items-center justify-center p-5 ">
          <img
            src="/svg/tourism2.svg"
            alt="a person sitting cross legged with a map and luggage"
          />
        </div>
      </div>
    </div>
  );
}

export default Section6;

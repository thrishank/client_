import BlueButton from "@/components/ui/BlueButton";
import React from "react";

function Section6() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 mb-10">
        <div className=" p-5  col-span-1">
          <img
            src="/svg/fitness4.svg"
            className="w-full md:w-[500px]"
            alt="a person sitting on a mat with his hands behind his head"
          />
        </div>
        <div className=" flex flex-col justify-center px-6 py-8  rounded-md">
          <h2 className=" text-3xl md:text-5xl font-semibold">
            Fitness App <br /> Development Cost
          </h2>
          <p className=" text-[#797979] text-lg py-5">
            Developing a basic app with all the necessary components could be
            less expensive than developing a complicated app with several
            features. The cost of designing a fitness app is determined by a
            number of things. To arrange a free phone consultation, please
            contact us.
          </p>
          <BlueButton text={"Contact Us"} link="/contact-us"></BlueButton>
        </div>
      </div>
    </div>
  );
}

export default Section6;

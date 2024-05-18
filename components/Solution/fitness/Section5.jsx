import WhiteButton from "@/components/ui/WhiteButton";
import React from "react";

function Section5() {
  return (
    <div className="bg-[#4C3C82] ">
      <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-8  ">
        <div className=" grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2 flex flex-col justify-center ">
            <p className=" text-[36px] text-white font-bold mb-10">
              {" "}
              Elevate Your Fitness Journey With Our Premier Fitness App
              Development Company.
            </p>
            <WhiteButton text={"Get in Touch"} link="/contact-us"></WhiteButton>
          </div>

          <div className="  py-8 ml-auto ]">
            <img src="/svg/fitness5.svg" alt="a person walking with a phone" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;

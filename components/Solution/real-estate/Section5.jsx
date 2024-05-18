import WhiteButton from "@/components/ui/WhiteButton";
import React from "react";

function Section5() {
  return (
    <div className="bg-[#FF5948]">
      <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-8  ">
        <div className=" grid grid-cols-1 md:grid-cols-3">
          <div className=" px-4 py-8">
            <img
              src="/svg/real4.svg"
              className=" w-full md:w-[400px]"
              alt="a person standing next to a phone showing house on rent
"
            />
          </div>
          <div className="md:col-span-2 flex flex-col justify-center ">
            <p className=" text-[36px] text-white font-bold mb-10">
              {" "}
              Turn your vision into reality with our premier real estate app
              development company.
            </p>
            <WhiteButton text={"Get in Touch"} link="/contact-us"></WhiteButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;

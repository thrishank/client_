import WhiteButton from "@/components/ui/WhiteButton";
import React from "react";

function Section5() {
  return (
    <div className="bg-[#4C3C82] ">
      <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-8  ">
        <div className=" grid grid-cols-1 md:grid-cols-3">
          <div className=" flex flex-col justify-center md:col-span-2 ">
            <p className=" text-[36px] text-white font-bold mb-10">
              {" "}
              Streamline your operations with our top-tier logistics app
              development company.
            </p>
            <WhiteButton text={"Get in Touch"}></WhiteButton>
          </div>

          <div className="  py-8 ml-auto">
            <img
              src="/svg/logistic4.svg"
              alt="a person holding a box and pointing at a large screen"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;

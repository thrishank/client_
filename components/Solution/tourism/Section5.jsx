import WhiteButton from "@/components/ui/WhiteButton";
import React from "react";

function Section5() {
  return (
    <div className="bg-[#FF5948]">
      <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-8  ">
        <div className=" grid grid-cols-1 md:grid-cols-3">
          <div className=" md:col-span-1 px-4 py-8">
            <img
              src="/svg/tourism3.svg"
              alt="a backpack with a camera and a map"
            />
          </div>
          <div className="md:col-span-2 flex flex-col  justify-center ">
            <p className=" text-[36px] text-white font-bold mb-10">
              {" "}
              Embark on unforgettable adventures with our premier tourism app
              development company.
            </p>
            <WhiteButton text={"Get in Touch"}></WhiteButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;

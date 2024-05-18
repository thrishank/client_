import WhiteButton from "@/components/ui/WhiteButton";
import React from "react";

function Section5() {
  return (
    <div className="bg-[#FF5948]">
      <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-8  ">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className=" px-4 py-8">
            <div className="mr-auto">
              <img
                src="/svg/enteri5.svg"
                alt="a person holding a phone and playing music app
"
              />
            </div>
          </div>
          <div className=" flex flex-col justify-center md:col-span-2 ">
            <p className=" text-[36px] text-white font-bold mb-10">
              {" "}
              Spark joy and captivate audiences with our leading entertainment
              app development company.
            </p>
            <WhiteButton text={"Get in Touch"}></WhiteButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;

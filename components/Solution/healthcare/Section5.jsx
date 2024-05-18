import WhiteButton from "@/components/ui/WhiteButton";
import React from "react";

function Section5() {
  return (
    <div className="bg-[#0085F2]">
      <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-10 ">
        <div className=" grid grid-cols-1 md:grid-cols-10  ">
          <div className=" md:col-span-7 px-10 md:px-20 py-10 flex flex-col justify-center ">
            <h2 className=" text-white text-[36px] font-semibold leading-[40px]">
              Transform healthcare delivery with our premier healthcare app
              development company.
            </h2>
            <div className=" md:my-10 mt-10">
              <WhiteButton
                text={"Get in Touch"}
                link="/contact-us"
              ></WhiteButton>
            </div>
          </div>
          <div className="  md:col-span-3  py-10">
            <img
              src="/svg/health-carei5.svg"
              alt="a hand holding a phone with a person on it
"
            />
          </div>
          <div className=" md:col-span-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Section5;

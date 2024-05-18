import WhiteButton from "@/components/ui/WhiteButton";
import React from "react";

function Section5() {
  return (
    <div className="bg-[#0085F2]">
      <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-10 ">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 ">
          <div className=" md:col-span-2 px-10 md:px-10 py-10 flex flex-col justify-center ">
            <h2 className=" text-white text-[36px] font-semibold leading-[40px]">
              Empower learners & educators alike with our top-tier education app
              development company.
            </h2>
            <div className=" md:my-10 mt-10">
              <WhiteButton
                text={"Get in Touch"}
                link="/contac-us"
              ></WhiteButton>
            </div>
          </div>
          <div className="  md:col-span-1  ">
            <img
              src="/svg/educationi5.svg"
              alt="a cartoon of a person standing in front of a cellphone
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

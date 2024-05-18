import React from "react";

function Section4({
  paragraph = " Step into the future with our Hybrid App Development Services <br/> with our   cutting-edge technologies.",
}) {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-8 mb-12 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Technologies We Work On
        </h2>
        <div className=" flex justify-center text-center md:px-56 py-6 ">
          {" "}
          <p
            className="text-base text-[#797979] md:text-lg"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          ></p>
        </div>
      </div>

      <div className="flex flex-row gap-8 md:flex-col justify-center gap-16 ">
        <div className="md:inline-flex justify-evenly gap-8">
          <img src="/svg/i1.svg" alt="" />
          <img src="/svg/i2.svg" alt="" />
          <img src="/svg/i3.svg" alt="" />
          <img src="/svg/i4.svg" alt="" />
          <img src="/svg/i5.svg" alt="" />
        </div>

        <div className="md:inline-flex justify-evenly md:mt-10 gap-10">
          <img src="/svg/i6.svg" alt="" />
          <img src="/svg/i7.svg" alt="" />
          <img src="/svg/i8.svg" alt="" />
          <img src="/svg/i9.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section4;

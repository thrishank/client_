import React from "react";

function Section5() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-4  ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Industries We Serve
        </h2>
        <div className=" flex justify-center text-center md:px-56 ">
          {" "}
          <p className="text-base text-[#797979] md:text-lg">
            We cater to a multitude of industries with our hybrid app
            development <br /> expertise, delivering versatile solutions.
          </p>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row justify-between md:px-20">
        <img
          src="/hybrid2.png"
          className=" w-full h-full"
          alt="a blue and red triangle with icons"
        />
      </div>
    </div>
  );
}

export default Section5;

import React from "react";

function Section5() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-6 pb-10 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Industries We Serve
        </h2>
        <div className=" flex justify-center text-center md:px-56 py-6 ">
          {" "}
          <p className="text-base text-[#797979] md:text-lg">
            We excel in React Native app development, serving a wide array of
            <br />
            industries with customized solutions.
          </p>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row justify-between md:px-20 py-6">
        <img
          src="/ios2.png"
          className=" w-full h-full"
          alt="Different types of business icons: a shopping cart for retail, a handshake for partnerships, a gear for manufacturing."
        />
      </div>
    </div>
  );
}

export default Section5;

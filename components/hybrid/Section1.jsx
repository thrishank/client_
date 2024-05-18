import React from "react";
import Form from "../android/Form";

function Section1() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 pt-10 ">
      <div className=" mt-10 mb-16">
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Mastering Excellence in Hybrid App Development
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-12  gap-10 ">
        <div className=" md:col-span-7 ">
          <p className=" text-[20px] text-gray-500">
            Are you seeking the ideal combo of versatility and performance in
            your app? Look no further! At Overninja, we specialize in Hybrid App
            Development, offering a seamless integration of cross-platform
            capabilities and native-like experience.
            <br />
            <br />
            <span className=" font-bold my-4 text-[#040222]">
              Your First Choice for Hybrid App Development
            </span>
            <br />
            <br />
            <span className=" font-bold my-4 text-[#040222]">
              Cross-Platform Brilliance
            </span>
            <br />
            <br />
            Our Hybrid App Development services leverage frameworks like Flutter
            and React Native, presenting you with a single codebase that
            effortlessly caters to both iOS and Android platforms.
            <br />
            <br />
            <span className=" font-bold my-4 text-[#040222]">
              Cost-Effective Solutions
            </span>
            <br />
            <br />
            Save resources without compromising quality. Our hybrid approach
            allows for efficient development, lowering expenses even as ensuring
            your app reaches a broader target audience.
            <br />
            <br />
          </p>
        </div>
        <div className=" md:col-span-5">
          <Form></Form>
        </div>
      </div>
      <div>
        <p className=" text-[20px] text-gray-500">
          <span className=" font-bold my-4 text-[#040222]">
            Native-Like Performance
          </span>
          <br />
          <br />
          Experience the first-class of both worlds. Our hybrid apps are
          designed to deliver a native-like overall performance, offering users
          with an easy and responsive interface.
          <br />
          <br />
          <span className=" font-bold my-4 text-[#040222]">
            Rapid Development
          </span>
          <br />
          <br />
          Speed matters. With our Hybrid App Development, we make sure faster
          development cycles, enabling you to release your app quickly and stay
          beforehand within the competitive digital panorama.
        </p>
      </div>
    </div>
  );
}

export default Section1;

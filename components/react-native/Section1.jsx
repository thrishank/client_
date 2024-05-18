import React from "react";
import Form from "../android/Form";

function Section1() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 pt-10 ">
      <div className=" mt-10 mb-16">
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Innovative React Native App Development Company
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-12  gap-10 ">
        <div className=" md:col-span-7 ">
          <p className=" text-[20px] text-gray-500">
            Are you prepared to elevate your mobile app presence with modern-day
            era? Look no further! We're your trusted React Native app
            development company. Explore the seamless fusion of efficiency and
            innovation as we craft cross-platform packages that redefine person
            stories.
            <br />
            <br />
            <span className=" font-bold my-4 text-[#040222]">
              Your Trusted React Native App Development Company
            </span>
            <br />
            <br />
            <span className=" font-bold my-4 text-[#040222]">
              Cross-Platform Excellence
            </span>
            <br />
            <br />
            Our React Native App development company provide a unified codebase,
            making sure your app performs seamlessly on both iOS and Android
            platforms, saving time and assets.
            <br />
            <br />
            <span className=" font-bold my-4 text-[#040222]">
              Innovation on the Core
            </span>
            <br />
            <br />
            As innovators within the field, we harness the electricity of React
            Native to create dynamic, feature-rich apps that no longer simplest
            meet but exceed the expectancies of latest tech-savvy users.
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
          {" "}
          <span className=" font-bold my-4 text-[#040222]">
            User-Centric Design
          </span>
          <br />
          <br />
          Our UI/UX designers are devoted to developing captivating interfaces,
          ensuring your React Native app not best features perfectly but also
          provides an intuitive and visually appealing user experience.
          <br />
          <br />
          <span className=" font-bold my-4 text-[#040222]">
            Rapid Development Cycles
          </span>
          <br />
          <br />
          With React Native's hot reload function, we make sure fast development
          cycles, making an allowance for fast iterations, efficient debugging,
          and a faster time-to-market for your app.
        </p>
      </div>
    </div>
  );
}

export default Section1;

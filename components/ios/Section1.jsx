import React from "react";
import Form from "../android/Form";

function Section1() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 pt-10 ">
      <div className=" mt-10 mb-16">
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          We Pioneer Excellence in iOS App Development
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-12  gap-10 ">
        <div className=" md:col-span-7 ">
          <p className=" text-[20px] text-gray-500">
            Are you prepared to elevate your brand in the iOS environment? Look
            no further! At Overninja, we specialize in iOS App Development,
            bringing innovation and understanding to the forefront of your
            virtual journey.
            <br />
            <br />
            <span className=" font-bold my-4 text-[#040222]">
              Your ideal partner for iOS app development
            </span>
            <br />
            <br />
            <span className=" font-bold my-4 text-[#040222]">iOS Mastery</span>
            <br />
            <br />
            With a seasoned group of iOS developers, we possess an in-intensity
            information of the iOS platform, ensuring your app is tailored for
            best overall performance on iPhones and iPads.
            <br />
            <br />
            <span className=" font-bold my-4 text-[#040222]">
              Tailored Solutions
            </span>
            <br />
            <br />
            Our iOS app development offerings are designed to fulfill the
            particular necessities of your commercial enterprise. Whether you
            are a startup or an established agency, we customise solutions to
            ensure an ideal fit for your customer base.
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
            Design Elegance
          </span>
          <br />
          <br />
          Our UI/UX designers are dedicated to creating visually beautiful and
          intuitive interfaces, ensuring your iOS app now not most effective
          adheres to Apple's design principles but stands proud for its elegance
          and consumer-centric approach.
          <br />
          <br />
          <span className=" font-bold my-4 text-[#040222]">
            Cutting-Edge Technologies
          </span>
          <br />
          <br />
          Staying ahead of the curve, we leverage the today's iOS technology and
          frameworks to develop apps that aren't just current but future-proof.
        </p>
      </div>
    </div>
  );
}

export default Section1;

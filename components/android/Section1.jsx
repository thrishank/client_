import React from "react";
import Form from "./Form";

function Section1() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 pt-10 ">
      <div className=" mt-10 mb-16">
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Your Trusted Android App Development Partner
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-12  gap-10 ">
        <div className=" md:col-span-7 ">
          <p className=" text-[20px] text-gray-500">
            Are you prepared to revolutionize your commercial enterprise with an
            effective Android app? Look no further! At Overninja, we focus on
            creating modern-day Android apps tailored to fulfill your precise
            commercial enterprise needs. As an Android App Development Company,
            we are devoted to handing over pinnacle-notch solutions that propel
            your business to new heights in the digital landscape.
            <br />
            <br />
            <span className=" font-bold my-4 text-[#040222]">
              Why choose us?
            </span>
            <br />
            <br />
            <span className=" font-bold my-4 text-[#040222]">Expert Team</span>
            <br />
            <br />
            Our seasoned team of Android app developers possesses a wealth of
            enjoy in creating sturdy, scalable, and function-wealthy packages.
            From idea to execution, we make sure every issue of your app is
            crafted with precision.
            <br />
            <br />
            <span className=" font-bold my-4 text-[#040222]">
              Customized Solutions
            </span>
            <br />
            <br />
            We recognize that each business is unique. That's why we don't agree
            with in one-solution-fits-all businesses. Our Android app
            development procedure is enormously flexible, permitting us to
            tailor our offerings in your particular requirements.
          </p>
        </div>
        <div className=" md:col-span-5">
          <Form></Form>
        </div>
      </div>
      <div>
        <p className="text-[20px] text-gray-500">
          <br />
          <br />
          <span className=" font-bold my-4 text-[#040222]">
            Cutting-Edge Technologies
          </span>
          <br />
          <br />
          Staying advance in the dynamic global era is essential. Our developers
          are properly-versed within the state-of-the-art Android technologies,
          ensuring your app isn't always just contemporary however equipped for
          the destiny.
          <br />
          <br />
          <span className=" font-bold my-4 text-[#040222]">
            User-Centric Design
          </span>
          <br />
          <br />
          A visually appealing and intuitive layout is the key to user
          engagement. Our designer's attention on creating consumer-pleasant
          interfaces that beautify the general person revel in, making your app
          stand out within the crowded marketplace.
          <br />
          <br />
          <span className=" font-bold my-4 text-[#040222]">
            Seamless Integration
          </span>
          <br />
          <br />
          Our Android apps seamlessly combine with various devices and
          structures, ensuring a constant consumer experience across all
          smartphones, tablets, and other gadgets.
        </p>
      </div>
    </div>
  );
}

export default Section1;

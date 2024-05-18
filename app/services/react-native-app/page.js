import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import Hero from "@/components/Home/Hero";
import Section4 from "@/components/hybrid/Section4";
import { Faq } from "@/components/react-native/Faq";
import Reviews from "@/components/react-native/Reviews";
import Section1 from "@/components/react-native/Section1";
import Section2 from "@/components/react-native/Section2";
import Section3 from "@/components/react-native/Section3";

import Section5 from "@/components/react-native/Section5";
import LeftSec from "@/components/react-native/left";
import RightSec from "@/components/react-native/right";
import Script from "next/script";
import React from "react";

function page() {
  return (
    <div>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4JEVQXM0B7"
      ></Script>
      <Script>
        {`
      window.dataLayer = window.dataLayer || []; function gtag()
      {dataLayer.push(arguments)}
      gtag('js', new Date()); gtag('config', 'G-4JEVQXM0B7');`}
      </Script>
      <Hero
        titile={"React Native App <br/> Development Company"}
        paragraph={
          "Combining expertise and innovation to craft cross-platform applications."
        }
        dimg={"/react-native1.png"}
        mimg={"/react-nativem1.png"}
        btn="Get in Touch"
        link="/contact-us"
      ></Hero>
      <Section1></Section1>
      <Section2></Section2>
      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-6  ">
        <div>
          <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
            Development Process
          </h2>
          <div className=" flex justify-center text-center md:px-56  ">
            {" "}
            <p className="text-base text-[#797979] md:text-lg">
              Precision to transform your ideas into a versatile and
              <br />
              high-performing cross-platform application.
            </p>
          </div>
          <div className=" block md:hidden">
            <div className="grid gap-4 md:mx-4 sm:grid-cols-12 mt-5">
              <div className="relative col-span-6 md:px-4 space-y-6">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-[#1A8B91]">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                    <h3 className="text-2xl font-medium tracking">Planning </h3>

                    <p className="mt-3 text-[#797979]">
                      Collaborative sessions to understand your goals and
                      requirements, laying the groundwork for a comprehensive
                      app development.
                    </p>
                  </div>

                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                    <h3 className="text-2xl font-medium tracking">
                      UI/UX Design{" "}
                    </h3>

                    <p className="mt-3 text-[#797979]">
                      Our design experts create visually stunning and intuitive
                      interfaces, ensuring a seamless and delightful user
                      experience.
                    </p>
                  </div>

                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                    <h3 className="text-2xl font-medium tracking">
                      App Development{" "}
                    </h3>

                    <p className="mt-3 text-[#797979]">
                      Our developers bring your vision to life with efficient
                      coding, creating a cross-platform application that meets
                      your functional requirements.{" "}
                    </p>
                  </div>

                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                    <h3 className="text-2xl font-medium tracking">
                      Quality Assurance{" "}
                    </h3>
                    <p className="mt-3 text-[#797979]">
                      Rigorous testing at every stage to identify and address
                      any issues, ensuring a bug-free and reliable React Native
                      app development.
                    </p>{" "}
                  </div>

                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                    <h3 className="text-2xl font-medium tracking">
                      Deployment{" "}
                    </h3>
                    <p className="mt-3 text-[#797979]">
                      Efficient deployment of your React Native app to the
                      desired platforms, with best practices to ensure a smooth
                      and successful launch.
                    </p>{" "}
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                    <h3 className="text-2xl font-medium tracking">Support </h3>
                    <p className="mt-3 text-[#797979]">
                      Beyond the launch, our support and maintenance services
                      ensure your React Native app remains up-to-date for peak
                      performance.
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div className="col-span-6 px-4 flex flex-col justify-center items-center ">
                <img
                  src="/react-native3.png"
                  alt="a person and person standing next to each other
"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden md:block">
        <div className="flex flex-col md:flex-row gap-20 justify-center items-center">
          <LeftSec></LeftSec>
          <div>
            {" "}
            <img
              src="/react-native3.png"
              alt="A group of professionals collaborating on a project in a well-lit office space."
            />
          </div>
          <RightSec></RightSec>
        </div>
      </div>
      <Section4 paragraph="We leverage a diverse spectrum of cutting-edge technologies to architect, <br/>develop, and deploy innovative solutions."></Section4>
      <Section5></Section5>
      <CaseStudies paragraph="Our compelling case studies highlight our proficiency in React Native app development across multiple industries."></CaseStudies>
      <Reviews></Reviews>
      <Faq></Faq>
      <ContactForm></ContactForm>
    </div>
  );
}

export default page;

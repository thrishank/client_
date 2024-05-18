import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import Hero from "@/components/Home/Hero";
import { Faq } from "@/components/hybrid/Faq";
import Reviews from "@/components/hybrid/Reviews";
import Section1 from "@/components/hybrid/Section1";
import Section3 from "@/components/hybrid/Section3";
import Section4 from "@/components/hybrid/Section4";
import Section5 from "@/components/hybrid/Section5";
import LeftSec from "@/components/hybrid/left";
import RightSec from "@/components/hybrid/right";
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
        titile={"Hybrid App Development Company"}
        paragraph={"Elevating Ideas with Swift and Seamless Hybrid Solutions."}
        dimg={"/hybrid1.png"}
        mimg={"/hybridm1.png"}
        btn="Get in Touch"
        link="/contact-us"
      ></Hero>
      <Section1></Section1>
      <Section3></Section3>

      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-6 ">
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
        </div>
        <div className=" block md:hidden">
          <div className="grid gap-4 md:mx-4 sm:grid-cols-12 mt-5">
            <div className="relative col-span-6 md:px-4 space-y-6">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-[#1A8B91]">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                  <h3 className="text-2xl font-medium tracking">
                    Project Discovery{" "}
                  </h3>

                  <p className="mt-3 text-[#797979]">
                    Outline the app's features, functionality, and technical
                    requirements. Develop a project timeline and budget.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                  <h3 className="text-2xl font-medium tracking">
                    UI/UX Design{" "}
                  </h3>

                  <p className="mt-3 text-[#797979]">
                    Create wireframes and prototypes to visualize the app's
                    layout and flow. Design the UI & UX elements.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                  <h3 className="text-2xl font-medium tracking">
                    Development{" "}
                  </h3>

                  <p className="mt-3 text-[#797979]">
                    Write code for the app's features and functionalities.
                    Utilize Hybrid's hot reload for quick iteration and testing.{" "}
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                  <h3 className="text-2xl font-medium tracking">
                    Quality Assurance{" "}
                  </h3>
                  <p className="mt-3 text-[#797979]">
                    Identify and address any bugs or issues. Gather feedback and
                    make necessary improvements.
                  </p>{" "}
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                  <h3 className="text-2xl font-medium tracking">Deployment </h3>
                  <p className="mt-3 text-[#797979]">
                    Generate necessary certificates and keys for code signing.
                    Release the app to the respective stores.
                  </p>{" "}
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                  <h3 className="text-2xl font-medium tracking">
                    Optimization{" "}
                  </h3>
                  <p className="mt-3 text-[#797979]">
                    Regularly update dependencies and ensure compatibility with
                    the latest Hybrid versions.
                  </p>{" "}
                </div>
              </div>
            </div>
            <div className="col-span-6 px-4 flex flex-col justify-center items-center ">
              <img
                src="/hybrid3.png"
                alt="a person and person standing next to each other
"
                className="w-full"
              />
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
              src="/hybrid3.png"
              alt="People collaborating on a purple blueprint, discussing and strategizing together to achieve their goals."
            />
          </div>
          <RightSec></RightSec>
        </div>
      </div>
      <Section4></Section4>

      <Section5></Section5>
      <CaseStudies paragraph="Our case studies illustrate our proficiency in hybrid app development across a spectrum of industries."></CaseStudies>
      <Reviews></Reviews>
      <Faq></Faq>
      <ContactForm></ContactForm>
    </div>
  );
}

export default page;

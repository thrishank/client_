import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import Hero from "@/components/Home/Hero";
import { Faq } from "@/components/ios/Faq";
import Reviews from "@/components/ios/Reviews";
import Section1 from "@/components/ios/Section1";
import Section2 from "@/components/ios/Section2";
import Section3 from "@/components/ios/Section3";
import Section4 from "@/components/ios/Section4";
import Section5 from "@/components/ios/Section5";
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
        titile={"iOS App <br/> Development Company"}
        paragraph={
          "iOS App Dev Solutions: Code, Create, Innovate, Thrive, Succeed."
        }
        dimg={"/ios1.png"}
        mimg={"/iosm1.png"}
        btn="Get in Touch"
        link="/contact-us"
      ></Hero>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <CaseStudies paragraph="We showcase our success stories across various industries through comprehensive case studies."></CaseStudies>
      <Reviews></Reviews>
      <Faq></Faq>
      <ContactForm></ContactForm>
    </div>
  );
}

export default page;

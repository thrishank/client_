import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import Hero from "@/components/Home/Hero";
import { Faq } from "@/components/Solution/food/FAQ";
import Reviews from "@/components/Solution/food/Reviews";
import Section1 from "@/components/Solution/food/Section1";
import Section2 from "@/components/Solution/food/Section2";
import Section3 from "@/components/Solution/food/Section3";
import Section5 from "@/components/Solution/food/Section5";
import Section6 from "@/components/Solution/food/Section6";
import Section4 from "@/components/hybrid/Section4";
import Script from "next/script";
import React from "react";

function page() {
  return (
    <>
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
        titile={"#1 Food Delivery App Development Company"}
        paragraph={
          "Creating delightful food app solutions to enhance dining experiences and culinary exploration."
        }
        dimg={"/food1.png"}
        mimg={"/foodm1.png"}
        btn="Get in Touch"
        link="/contact-us"
      ></Hero>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4 paragraph="We utilize encompasses cutting-edge frameworks   at our food <br/> delivery app development company."></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <CaseStudies paragraph="Explore our case studies to discover real-world examples of successful food app development."></CaseStudies>
      <Reviews></Reviews>
      <Faq></Faq>
      <ContactForm></ContactForm>
    </>
  );
}

export default page;

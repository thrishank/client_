import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import Hero from "@/components/Home/Hero";
import { Faq } from "@/components/Solution/healthcare/FAQ";
import Reviews from "@/components/Solution/healthcare/Reviews";
import Section1 from "@/components/Solution/healthcare/Section1";
import Section2 from "@/components/Solution/healthcare/Section2";
import Section3 from "@/components/Solution/healthcare/Section3";
import Section5 from "@/components/Solution/healthcare/Section5";
import Section6 from "@/components/Solution/healthcare/Section6";
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
        titile={"#1 Healthcare App Development Company"}
        paragraph={
          "Building transformative healthcare app solutions to revolutionize patient care and wellness."
        }
        dimg={"/healthcare1.png"}
        mimg={"/healthcarem1.png"}
        btn="Get in Touch"
        link="/contact-us"
      ></Hero>

      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4 paragraph="With the use of our cutting-edge technology,  we convert your  <br/> idea to reality for a healthcare app."></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <CaseStudies paragraph="Explore our collection of case studies to see how our expertise in healthcare app development."></CaseStudies>
      <Reviews></Reviews>
      <Faq></Faq>
      <ContactForm></ContactForm>
    </>
  );
}

export default page;

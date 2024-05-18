import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import Hero from "@/components/Home/Hero";
import { Faq } from "@/components/Solution/real-estate/FAQ";
import Reviews from "@/components/Solution/food/Reviews";

import Section1 from "@/components/Solution/real-estate/Section1";
import Section2 from "@/components/Solution/real-estate/Section2";
import Section3 from "@/components/Solution/real-estate/Section3";
import Section5 from "@/components/Solution/real-estate/Section5";
import Section6 from "@/components/Solution/real-estate/Section6";
import Section4 from "@/components/hybrid/Section4";
import React from "react";
import Script from "next/script";

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
        titile={"#1 Real Estate App Development Company"}
        paragraph={
          "Designing intuitive real estate app solutions to redefine property search and transactions. "
        }
        dimg={"/real-estate1.png"}
        mimg={"/real-estatem1.png"}
        btn="Get in Touch"
        link="/contact-us"
      ></Hero>

      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4 paragraph="To bring your real estate app vision to life, we leverage state-of-the-art  <br/> technologies for immersive experiences."></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <CaseStudies></CaseStudies>
      <Reviews></Reviews>
      <Faq></Faq>
      <ContactForm></ContactForm>
    </>
  );
}

export default page;

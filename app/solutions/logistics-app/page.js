import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import Hero from "@/components/Home/Hero";
import { Faq } from "@/components/Solution/logistic/FAQ";
import Reviews from "@/components/Solution/food/Reviews";

import Section1 from "@/components/Solution/logistic/Section1";
import Section2 from "@/components/Solution/logistic/Section2";
import Section3 from "@/components/Solution/logistic/Section3";
import Section5 from "@/components/Solution/logistic/Section5";
import Section6 from "@/components/Solution/logistic/Section6";
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
        titile={"#1 Logistics App Development Company"}
        paragraph={
          "Developing efficient logistics app solutions to streamline operations and enhance productivity."
        }
        dimg={"/logistic1.png"}
        mimg={"/logisticm1.png"}
        btn="Get in Touch"
        link="/contact-us"
      ></Hero>

      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4 paragraph="Our state-of-the-art technology enabling your logistics  <br/> app  idea to become a reality."></Section4>
      <Section5></Section5>
      <Section6></Section6>

      <CaseStudies paragraph="Our expertise in logistics app development has transformed businesses and optimized supply chain operations."></CaseStudies>
      <Reviews></Reviews>
      <Faq></Faq>
      <ContactForm></ContactForm>
    </>
  );
}

export default page;

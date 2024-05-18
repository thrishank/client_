import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import Hero from "@/components/Home/Hero";
import { Faq } from "@/components/Solution/sport/FAQ";
import Reviews from "@/components/Solution/food/Reviews";

import Section1 from "@/components/Solution/sport/Section1";
import Section2 from "@/components/Solution/sport/Section2";
import Section3 from "@/components/Solution/sport/Section3";
import Section5 from "@/components/Solution/sport/Section5";
import Section6 from "@/components/Solution/sport/Section6";
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
        titile={"#1 Sports App Development Company"}
        paragraph={
          "Engineer immersive sports app solutions to elevate fan engagement and athlete performance. "
        }
        dimg={"/sport1.png"}
        mimg={"/sportm1.png"}
        btn="Get in Touch"
        link="/contact-us"
      ></Hero>

      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4 paragraph="We utilize encompasses cutting-edge technologies to bring <br/> your sports app vision to life."></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <CaseStudies paragraph="Explore our compelling case studies showcasing successful sports app development."></CaseStudies>
      <Reviews></Reviews>
      <Faq></Faq>
      <ContactForm></ContactForm>
    </>
  );
}

export default page;

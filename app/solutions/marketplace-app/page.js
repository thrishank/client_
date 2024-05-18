import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import Hero from "@/components/Home/Hero";
import { Faq } from "@/components/Solution/marketplace/FAQ";
import Reviews from "@/components/Solution/food/Reviews";

import Section1 from "@/components/Solution/marketplace/Section1";
import Section2 from "@/components/Solution/marketplace/Section2";
import Section3 from "@/components/Solution/marketplace/Section3";
import Section5 from "@/components/Solution/marketplace/Section5";
import Section6 from "@/components/Solution/marketplace/Section6";
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
        titile={"#1 Marketplace App Development Company"}
        paragraph={
          "Architecting dynamic marketplace app solutions to revolutionize online commerce experiences. "
        }
        dimg={"/marketplace1.png"}
        mimg={"/marketplacem1.png"}
        btn="Get in Touch"
        link="/contact-us"
      ></Hero>

      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4 paragraph="To realize your marketplace app idea, we employ state-of-the-art  <br/> technologies to craft smooth experiences."></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <CaseStudies paragraph="Explore our marketplace app development case studies to witness real-world examples and innovative solutions."></CaseStudies>
      <Reviews></Reviews>
      <Faq></Faq>
      <ContactForm></ContactForm>
    </>
  );
}

export default page;

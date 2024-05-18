import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import Hero from "@/components/Home/Hero";
import { Faq } from "@/components/Solution/tourism/FAQ";
import Reviews from "@/components/Solution/food/Reviews";

import Section1 from "@/components/Solution/tourism/Section1";
import Section2 from "@/components/Solution/tourism/Section2";
import Section3 from "@/components/Solution/tourism/Section3";
import Section5 from "@/components/Solution/tourism/Section5";
import Section6 from "@/components/Solution/tourism/Section6";
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
        titile={"#1 Tourism App Development Company"}
        paragraph={
          "Creating immersive tourism app solutions to enrich travel experiences and inspire exploration."
        }
        dimg={"/tourism1.png"}
        mimg={"/tourismm1.png"}
        btn="Get in Touch"
        link="/contact-us"
      ></Hero>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4 paragraph="We implement state-of-the-art technologies   in order to bring <br/> your tourism app idea to life."></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <CaseStudies paragraph="Explore our collection of case studies to witness our expertise in tourism app development."></CaseStudies>
      <Reviews></Reviews>
      <Faq></Faq>
      <ContactForm></ContactForm>
    </>
  );
}

export default page;

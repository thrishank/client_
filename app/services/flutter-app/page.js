import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import Hero from "@/components/Home/Hero";
import { Faq } from "@/components/flutter/FAQ";
import Reviews from "@/components/flutter/Reviews";
import Section1 from "@/components/flutter/Section1";
import Section2 from "@/components/flutter/Section2";
import Section3 from "@/components/flutter/Section3";

import Section5 from "@/components/flutter/Section5";
import Section4 from "@/components/hybrid/Section4";
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
        titile={"Flutter App <br/> Development Company"}
        paragraph={"From Concept to Code, We Power Your Flutter Dreams."}
        dimg={"/flutter1.png"}
        mimg={"/flutterm1.png"}
        btn="Get in Touch"
        link="/contact-us"
      ></Hero>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4 paragraph="We harness the latest and most innovative technologies to <br /> bring your app vision to life."></Section4>
      <Section5></Section5>
      <CaseStudies paragraph="Our diverse case studies demonstrate our prowess in Flutter app development across various industries."></CaseStudies>
      <Reviews></Reviews>
      <Faq></Faq>
      <ContactForm></ContactForm>
    </div>
  );
}

export default page;

import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import Hero from "@/components/Home/Hero";
import { Faq } from "@/components/android/FAQ";
import Reviews from "@/components/android/Reviews";
import Section1 from "@/components/android/Section1";
import Section2 from "@/components/android/Section2";
import Section3 from "@/components/android/Section3";
import Section4 from "@/components/android/Section4";
import Section5 from "@/components/android/Section5";
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
      <div>
        <Hero
          titile={"Android App <br/> Development Company"}
          paragraph={"From Concept to Code, We Power Your Android Dreams."}
          dimg={"/android1.png"}
          mimg={"/androidm1.png"}
          btn="Get in Touch"
          link="/contact-us"
        ></Hero>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
        <CaseStudies></CaseStudies>
        <Reviews></Reviews>
        <Faq></Faq>
        <ContactForm></ContactForm>
      </div>
    </>
  );
}

export default page;

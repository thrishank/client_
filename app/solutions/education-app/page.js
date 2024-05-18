import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import Hero from "@/components/Home/Hero";
import { Faq } from "@/components/Solution/education/FAQ";
import Reviews from "@/components/Solution/education/Reviews";
import Section1 from "@/components/Solution/education/Section1";
import Section2 from "@/components/Solution/education/Section2";
import Section3 from "@/components/Solution/education/Section3";
import Section5 from "@/components/Solution/education/Section5";
import Section6 from "@/components/Solution/education/Section6";
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
        titile={"#1 Education App Development Company"}
        paragraph={
          "Creating transformative education app solutions to redefine the learning journey. "
        }
        dimg={"/education1.png"}
        mimg={"/educationm1.png"}
        btn="Get in Touch"
        link="/contact-us"
      ></Hero>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4 paragraph="To realize your education app idea, we employ state-of-the-art  <br/>technologies for engaging experiences."></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <CaseStudies paragraph="Explore our education app development case studies to witness real-world examples of our expertise."></CaseStudies>
      <Reviews></Reviews>
      <Faq></Faq>
      <ContactForm></ContactForm>
    </>
  );
}

export default page;

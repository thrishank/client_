import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import OtherHome from "@/components/OtherHome";
import { Faq } from "@/components/Solution/Faq";
import Reviews from "@/components/Solution/Reviews";
import Section1 from "@/components/Solution/Section1";
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
      <OtherHome titile={"Solutions"} dimg={"solution1.png"}></OtherHome>
      <Section1></Section1>

      <CaseStudies></CaseStudies>
      <Reviews></Reviews>
      <Faq></Faq>
      <ContactForm></ContactForm>
    </>
  );
}

export default page;

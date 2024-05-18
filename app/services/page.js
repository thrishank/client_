import CaseStudies from "@/components/Home/CaseStudies";
import ContactForm from "@/components/Home/ContactForm";
import OtherHome from "@/components/OtherHome";
import Section1 from "@/components/Services/Section1";
import Section2 from "@/components/Services/Section2";
import Section3 from "@/components/Services/Section3";
import Section4 from "@/components/Services/Section4";
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
      <OtherHome titile={"Services"} dimg={"services1.png"}></OtherHome>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <CaseStudies paragraph="We deliver innovative solutions and tangible results for a diverse range of clients across industries."></CaseStudies>
      <ContactForm></ContactForm>
    </>
  );
}

export default page;

"use client";
import ChooseUs from "@/components/About/ChooseUs";
import Expertise from "@/components/About/Expertise";
import Review from "@/components/About/Review";
import Section1 from "@/components/About/Section1";
import Section2 from "@/components/About/Section2";
import Section3 from "@/components/About/Section3";
import Section4 from "@/components/About/Section4";

import ContactForm from "@/components/Home/ContactForm";
import OtherHome from "@/components/OtherHome";
import Head from "next/head";
import React from "react";
import { Metadata } from "next";
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
      <OtherHome titile={"About Us"} dimg={"about1.png"}></OtherHome>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <ChooseUs></ChooseUs>
      <Expertise></Expertise>
      <Review></Review>
      <ContactForm></ContactForm>
    </>
  );
}

export default page;

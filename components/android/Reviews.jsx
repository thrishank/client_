"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper/modules";
import Link from "next/link";
import BlueButton from "../ui/BlueButton";

const caseStudiesData = [
  {
    title: "MedConnect360 Medical App",
    image:
      "https://s3-alpha-sig.figma.com/img/12ba/4376/d396b575c522c8b2614782bfa46bac5c?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=davr9bs~b2BO1ZTYlQ~g-Dl2HKJGdobYaeM7heFnkAeXS7ZS1Lxqt535MwruiToNPTqpTWy3RztkGE5w4Abj2y28iS9OJExoaMurhmNUIiDD9-hf2X35hiwYbjhGrzbropKaPjfHKDpBI2WBtfOy7dyhOlIgBNeGG0HPIYM5Nx5nctMi9Y~IVA3pGrUpd6Yu9VgCu09Kbig8Rw-SqFfUS5k3K-SKtmZACrmuwgq~HKzqX0VTLM~aSotqXsl2QXZj9Bs76YLGGnZro~n2GXN-Bid~g-pjGoAiSL5IRJd06o5TyIvR0h8IffY6GzNEzMJ~OfmMh69AKRz7l-d2nugo3A__",
    link: "/case-study-1",
  },
  {
    title: "Green Wallet Shopping App",
    image:
      "https://s3-alpha-sig.figma.com/img/1272/ca29/ca96b7422fc577ee4f000a1900362297?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e6YH42AQ26UsJGTmc54t3EdWF~RqhLjYT9xC4MmExbqbJVjyvQnnglAFIbx-J1ZzNpvaF5k8vqfTIa8jzcKmv0HFTGC~GQNixlBWMQC6iWVsVUQfuqNntD8KebaiXs1EtwLLDe3YryZR4FLR1X1gnQvn0X5B3EifoF1yAP0FmTUodgbIElvCdkXAdvKGRiFxufPQKm7EKr28FfsaRspR4p5Y2uZyfpEOlFX4hQ2ujgZQ-v1LQ8JWGWW28vaqpN82R3k9hsVWVBMI-jUBYJt7nxPPDjuaW50w6fR2DWBdBF3-e0XbOrzLqsXBsrt9z5kcbPoiOrWFnNcjSAqJGMGkvw__",
    link: "/case-study-2",
  },
  {
    title: "SkillSync- Skills Development App",
    image:
      "https://s3-alpha-sig.figma.com/img/f570/adc3/8726a54f2feb59b04924591b0e5d25f3?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dySyxlrclPjfSrN4JIlLyBFhN5DGFBU-1SAhd5uEuDY2uPhOcEzuhNOcjECUndTWE8NO4lJpW9AhX-jA7I0ymkAKsWvlZx9lyLHdmkarrBG0ZB6EaR7jYvSFtLmawENlmlpqiQMdxrmRZfc9vs92WFhZmWvb4cBG2vnOMgtLG6cwMrUd5-DN2kw7s2c8b7a1cRS0vvPJiwSpBgSIF9Bph57CCiD0TnmqWdZ54XDCjBBsarNpdg4W5X787JOeikBveOPAjC066kSIixZHbmg5yWoGKv4gAhaajJjlgrhxSyBQlp8zuEj7ARPEP3VDmOgH2eaECYSQW-zzk5~xdY-KsA__",
    link: "/case-study-2",
  },
];

function Card({ name, review, position }) {
  return (
    // "https://via.placeholder.com/360x500"
    <>
      <div className="w-full md:px-24 bg-white border relative shadow flex-col  ">
        <div>
          <p className=" text-[16px] text-[#797979] text-center py-10">
            Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce
            egestas risus purus suspendisse turpis volutpat onare imperdiet
            bibendum eleifend quam.
          </p>
          <h3 className=" text-[#042222] font-medium text-xl text-center">
            Brian Clark
          </h3>
          <p className=" text-sm text-[#797979] text-center py-6">
            Doxy.co Founder
          </p>
        </div>
      </div>
    </>
  );
}

function Reviews() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 mt-10 mb-8 ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 text-center text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Reviews
        </h2>
      </div>
      <div className=" hidden md:block">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper3"
        >
          {caseStudiesData.map((caseStudy, index) => (
            <SwiperSlide key={index}>
              <Card
                title={caseStudy.title}
                image={caseStudy.image}
                link={caseStudy.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" block md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          //   modules={[Pagination]}
          className="mySwiper"
        >
          {caseStudiesData.map((caseStudy, index) => (
            <SwiperSlide key={index}>
              <Card
                title={caseStudy.title}
                image={caseStudy.image}
                link={caseStudy.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Reviews;

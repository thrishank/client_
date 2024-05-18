"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../style.css";

// import required modules
import { Navigation } from "swiper/modules";

const caseStudiesData = [
  {
    name: "Brian Clark",
    review:
      "Exceptional creativity and user-centric designs! This mobile app design company surpassed our expectations, delivering a seamless and visually stunning application. Their attention to detail and commitment to user experience set them apart.",
    position: "Co-Founder, TWOS",
  },

  {
    name: "Juliet Elliot",
    review:
      "Working with this mobile app design firm was a pleasure. They brought our vision to life with precision and flair. The team's responsiveness and ability to incorporate feedback seamlessly into the design process were impressive.",
    position: "CEO, Veranda",
  },
  {
    name: "Balba Chahal",
    review:
      "Incredible commitment to timelines! This app design company delivered our project on schedule without compromising quality. Their efficient project management and skilled design team make them a reliable partner.",
    position: "Founder, Weather Wise",
  },
];

function Card({ name, review, position }) {
  return (
    // "https://via.placeholder.com/360x500"
    <>
      <div className="w-full md:px-24 bg-white border relative shadow flex-col  ">
        <div>
          <p className=" text-[16px] text-[#797979] text-center py-10">
            {review}
          </p>
          <h3 className=" text-[#042222] font-medium text-xl text-center">
            {name}
          </h3>
          <p className=" text-sm text-[#797979] text-center py-6">{position}</p>
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
                name={caseStudy.name}
                review={caseStudy.review}
                position={caseStudy.position}
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
                name={caseStudy.name}
                review={caseStudy.review}
                position={caseStudy.position}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Reviews;

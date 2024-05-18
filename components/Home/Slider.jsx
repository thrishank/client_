"use client";
import React from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero from "./Hero";

function Slider() {
  return (
    <div>
      <Swiper
        navigation={false}
        pagination={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <Hero
            titile={"Android App <br/> Development Services"}
            titlem={"Android App  Development Services"}
            paragraph={
              "Empowering Your Business with Next-Level Android App Development Services. "
            }
            dimg={"/hero1.png"}
            mimg={"/herom1.png"}
            link="services/android-app"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            titile={"iOS App <br/> Development Services"}
            titlem={"iOS App  Development Services"}
            paragraph={
              "User-Centric and Visually Stunning iOS App Development Services for start-ups."
            }
            dimg={"/hero2.png"}
            mimg={"/herom2.png"}
            link="services/ios-app"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            titile={"Hybrid App <br/> Development Services"}
            titlem={"Hybrid App  Development Services"}
            paragraph={
              "Quality Hybrid App Development Services at Affordable Cost for Small Businesses."
            }
            dimg={"/hero3.png"}
            mimg={"/herom3.png"}
            link="services/hybrid-app"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;

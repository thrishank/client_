"use client";
import React, { useEffect } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

// SwiperCore.use([Navigation, Pagination]);

function Slider() {
  useEffect(() => {
    const swiper = new SwiperCore(".swiper", {
      direction: "horizontal",
      loop: true,
      autoHeight: false,
      centeredSlides: true,
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []); // Ensure the effect runs only once

  return (
    <>
      <div className="wrapper">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="content-wrapper">
                <div className="content">
                  <p>
                    "Exceptional creativity and user-centric designs! This
                    mobile app design company surpassed our expectations,
                    delivering a seamless and visually stunning application.
                    Their attention to detail and commitment to user experience
                    set them apart."
                  </p>

                  <p className="cite mt-5"> Brian Clark</p>
                  <p className=" text-[#797979] text-sm mt-2">
                    Co-Founder, TWOS
                  </p>
                </div>
              </div>
            </div>

            <div className="swiper-slide ">
              <div className="content-wrapper">
                <div className="content">
                  <p>
                    " Working with this mobile app design firm was a pleasure.
                    They brought our vision to life with precision and flair.
                    The team's responsiveness and ability to incorporate
                    feedback seamlessly into the design process were
                    impressive."
                  </p>

                  <p className="cite mt-5">Juliet Elliott</p>
                  <p className=" text-[#797979] text-sm mt-2">CEO, Veranda</p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="content-wrapper">
                <div className="content">
                  <p>
                    " Incredible commitment to timelines! This app design
                    company delivered our project on schedule without
                    compromising quality. Their efficient project management and
                    skilled design team make them a reliable partner."
                  </p>

                  <p className="cite mt-5">Balba Chahal</p>
                  <p className=" text-[#797979] text-sm mt-2">
                    Founder, Weather Wise
                  </p>
                </div>
              </div>
            </div>

            {/* Additional slides go here */}
          </div>
          {/* <div className="swiper-nav-wrapper">
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Slider;

import React from "react";
import Slider from "./Slider";

function Review() {
  return (
    <div className="px-4  mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8   pt-16 ">
      <div className=" mt-2 mb-14">
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Review
        </h2>
        <div className=" flex justify-center text-center md:px-56 "> </div>
        <div className="md: -mb-[100px]">
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
}

export default Review;

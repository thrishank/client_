import React from "react";

function Card({ title, paragraph, num, color }) {
  return (
    <>
      <div className=" bg-white shadow-md rounded-lg px-4 py-6 border">
        <div
          key={title}
          className=" flex justify-center items-center my-2 w-full"
        >
          <span className=" font-semibold text-[60px] text-[#797979]">
            {num}{" "}
          </span>
        </div>
        <div className=" pb-6 text-center">
          <div className=" ">
            <h3 className=" text-[24px] font-medium text-[#040222]">{title}</h3>
          </div>
          <p className=" text-[#797979] font-normal text-[16px] leading-[24px]">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
}

function Section3() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 py-8 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Development Process
        </h2>
        <div className=" flex justify-center text-center md:px-56 py-6 ">
          {" "}
          <p className="text-base text-[#797979] md:text-lg">
            Ensuring innovation, transparency, and timely delivery at every
            stage of our Android app development process.
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-1  md:grid-cols-3 gap-5">
        <Card
          title={"Idea & Conceptualization"}
          paragraph={
            "Transform your imaginative and prescient into reality with our meticulous idea and conceptualization method."
          }
          num={"01"}
        ></Card>
        <Card
          title={"Market Analysis & Planning"}
          paragraph={
            "Our strategic insights and meticulous planning converge to carve a path for your success in the competitive panorama."
          }
          num={"02"}
        ></Card>
        <Card
          title={"Wireframing & Design"}
          paragraph={
            "Breathe life into your Android app's vision through our meticulous wireframing and design process for user delight."
          }
          num={"03"}
        ></Card>
        <Card
          title={"Prototyping & Development"}
          paragraph={
            "Bring your Android app to life with accuracy and speed through our expert prototyping and development process."
          }
          num={"04"}
        ></Card>
        <Card
          title={"Testing"}
          paragraph={
            "Elevate the reliability of your Android app with our rigorous testing process, where precision meets performance."
          }
          num={"05"}
        ></Card>
        <Card
          title={"Deployment"}
          paragraph={
            "Embark on the digital frontier of your Android app's journey with our streamlined deployment process."
          }
          num={"06"}
        ></Card>
      </div>
    </div>
  );
}

export default Section3;

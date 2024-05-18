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
          Flutter App Development Process
        </h2>
        <div className=" flex justify-center text-center md:px-56 py-6 ">
          {" "}
          <p className="text-base text-[#797979] md:text-lg">
            Ensuring innovation, transparency, and timely delivery at every
            stage of <br /> our Flutter app development process.
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-1  md:grid-cols-3 gap-5">
        <Card
          title={"Discovery & Planning"}
          paragraph={
            "Collaborative sessions to understand your vision, target audience, and business objectives for a Flutter app development strategy."
          }
          num={"01"}
        ></Card>
        <Card
          title={"Architecture Design"}
          paragraph={
            "Defining the architecture of your Flutter app and outlining the structure to ensure scalability, efficiency, and optimal performance."
          }
          num={"02"}
        ></Card>
        <Card
          title={"Flutter App Development"}
          paragraph={
            "Leveraging the power of Flutter, our developers bring your vision to life with efficient coding, creating a cross-platform application."
          }
          num={"03"}
        ></Card>
        <Card
          title={"Quality Assurance & Testing"}
          paragraph={
            "Rigorous testing at every stage, including unit testing, integration testing, and user acceptance testing, to identify and address any issues."
          }
          num={"04"}
        ></Card>
        <Card
          title={"Deployment"}
          paragraph={
            "Efficient deployment of your Flutter app to the desired platforms, with careful consideration of app store guidelines and best practices."
          }
          num={"05"}
        ></Card>
        <Card
          title={"Post-Launch Support"}
          paragraph={
            "Beyond the launch, our support and maintenance services ensure your Flutter app remains up-to-date, secure, and optimized."
          }
          num={"06"}
        ></Card>
      </div>
    </div>
  );
}

export default Section3;

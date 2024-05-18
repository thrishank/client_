import React from "react";

function Card({ title, paragraph, image, color }) {
  return (
    <>
      <div className=" bg-white shadow-md rounded-lg px-4 py-6">
        <div
          key={title}
          className=" grid grid-cols-6 gap-10 items-center my-2 w-full"
        >
          <div
            style={{ background: color }}
            className={` col-span-1  w-[60px] h-[60px]  rounded-lg flex items-center justify-center`}
          >
            <img src={image} alt="" />
          </div>
          <div className=" col-span-5 ml-4">
            <h3 className=" text-[24px] font-medium text-[#040222]">{title}</h3>
          </div>
        </div>
        <div className=" pb-6">
          <p className=" text-[#797979] font-normal text-[16px] leading-[24px]">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
}

function Section2() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 py-8 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Flutter App Development Services
        </h2>
        <div className=" flex justify-center text-center md:px-56 py-6 ">
          {" "}
          <p className="text-base text-[#797979] md:text-lg">
            Unlock innovation and efficiency with our Flutter App <br />
            Development Services.
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-1  md:grid-cols-3 gap-5">
        <Card
          title={"Custom Flutter App Development"}
          paragraph={
            "Tailored solutions to meet your unique business needs, ensuring a bespoke Flutter app that aligns perfectly with your vision."
          }
          image={"/svg/fi6.svg"}
          color={"#FFD266"}
        ></Card>
        <Card
          title={"Cross-Platform Excellence"}
          paragraph={
            "Leverage the power of Flutter for cross-platform development, ensuring a unified and consistent app experience all devices."
          }
          image={"/svg/fi1.svg"}
          color={"#BEC7FF"}
        ></Card>
        <Card
          title={"Rapid Development"}
          paragraph={
            "Experience faster development cycles with Flutter's hot reload feature, allowing quick iterations and efficient deployment."
          }
          image={"/svg/fi2.svg"}
          color={"#B1FFD5"}
        ></Card>
        <Card
          title={"Flutter Widget Development"}
          paragraph={
            "Unlock the full potential of Flutter's rich set of customizable widgets, tailored to create dynamic and engaging user interfaces."
          }
          image={"/svg/fi4.svg"}
          color={"#80FF8C"}
        ></Card>
        <Card
          title={"Native Performance"}
          paragraph={
            "Harness the native-like performance capabilities of Flutter, ensuring your app stands out with exceptional speed and responsiveness."
          }
          image={"/svg/fi5.svg"}
          color={"#FFE9C0"}
        ></Card>
        <Card
          title={"Quality Assurance and Testing"}
          paragraph={
            "Ensure the robustness of your Flutter app with our rigorous quality assurance and testing processes to deliver a flawless user experience."
          }
          image={"/svg/fi3.svg"}
          color={"#FFAFCD"}
        ></Card>
      </div>
    </div>
  );
}

export default Section2;

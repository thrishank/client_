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
          Services We Offer
        </h2>
        <div className=" flex justify-center text-center md:px-56 py-6 ">
          {" "}
          <p className="text-base text-[#797979] md:text-lg">
            Our Android app development services are designed to elevate your{" "}
            <br />
            business to the next level.
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-1  md:grid-cols-3 gap-5">
        <Card
          title={"Custom Android App Development"}
          paragraph={
            "Elevate your business with our bespoke Android app development, tailored to your particular desires and aspirations."
          }
          image={"/svg/34.svg"}
          color={"#FFEEBC"}
        ></Card>
        <Card
          title={"Android UI/UX Design"}
          paragraph={
            "Transform your Android app into an immersive and intuitive experience with our professional UI/UX design."
          }
          image={"/svg/35.svg"}
          color={"#E3F2FF"}
        ></Card>
        <Card
          title={"Enterprise Android App Development"}
          paragraph={
            "Navigate the needs of modern business with confidence through our enterprise-focused Android app development."
          }
          image={"/svg/36.svg"}
          color={"#E9ECFF"}
        ></Card>
        <Card
          title={"Android App Testing"}
          paragraph={
            "Ensure perfect performance and user satisfaction with our meticulous Android app testing offerings."
          }
          image={"/svg/37.svg"}
          color={"#FFE6CE"}
        ></Card>
        <Card
          title={"Maintenance and Support"}
          paragraph={
            "Safeguard the longevity and most suitable performance of your Android app with our committed help offerings."
          }
          image={"/svg/38.svg"}
          color={"#FFE9C0"}
        ></Card>
        <Card
          title={"M-commerce Solutions"}
          paragraph={
            "Our comprehensive M-commerce solutions to provide a secure and user-friendly mobile shopping experience."
          }
          image={"/svg/39.svg"}
          color={"#C5FFCB"}
        ></Card>
      </div>
    </div>
  );
}

export default Section2;

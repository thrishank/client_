import React from "react";

function Card({ title, paragraph, image, color }) {
  return (
    <>
      <div className="  md:col-span-6 grid  md:grid-cols-4 gap-x-8 gap-y-4 md:my-6 bg-white p-2.5 rounded-lg px-5">
        <div
          style={{
            background: color,
          }}
          className={`w-full h-full rounded-lg flex items-center justify-center px-8 py-3 md:items-center`}
        >
          <img
            src={`${image}`}
            className="w-10 h-10  md:w-full md:h-full"
            alt=""
          />
        </div>
        <div className="col-span-3 flex flex-col md:justify-start md:items-start ">
          <p className="text-zinc-800 text-[27px] font-medium  md:text-start">
            {title}
          </p>

          <p className="text-neutral-500 text-lg font-normal leading-[30.65px]  md:text-start">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
}

function Card2({ title, paragraph, image, color }) {
  return (
    <div className=" flex flex-col justify-center items-center  my-6">
      <div
        style={{
          background: color,
        }}
        className={`w-1/2 h-full rounded-lg flex items-center justify-center  py-5 md:items-center`}
      >
        <img
          src={`${image}`}
          className="w-10 h-10  md:w-full md:h-full"
          alt=""
        />
      </div>
      <p className="text-zinc-800 text-[27px] font-medium text-center md:text-start">
        {title}
      </p>

      <p className="text-neutral-500 text-lg font-normal leading-[30.65px] text-center md:text-start">
        {paragraph}
      </p>
    </div>
  );
}

function Section2() {
  return (
    <div className="px-4 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl py-0 md:px-24 lg:px-8 pb-6  ">
      <div className=" mt-10 mb-8">
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          iOS App Development Services
        </h2>
        <div className=" flex justify-center text-center md:px-56 py-6 ">
          {" "}
          <p className="text-base text-[#797979] md:text-lg md:px-20">
            Empower your business with our bespoke iOS App Development <br />{" "}
            Services, where innovation meets precision.
          </p>
        </div>
      </div>
      <div className=" hidden md:block">
        <div className=" grid grid-cols-1 md:grid-cols-12   gap-10 ">
          <div className="md:col-span-6 flex flex-col gap-3 border  rounded-lg p-5">
            <Card
              image={"/svg/iosi1.svg"}
              title={"iOS APP DEVELOPMENT"}
              paragraph={
                "Developing native iOS apps using Swift or Objective-C, Custom iOS app development for iPhone and iPad."
              }
              color={"#FFE29B"}
            ></Card>

            <Card
              image={"/svg/iosi2.svg"}
              title={"TESTING AND QUALITY"}
              paragraph={
                "Comprehensive testing services to ensure the functionality, performance, and security of the  app."
              }
              color={"#BAE0FF"}
            ></Card>

            <Card
              image={"/svg/iosi3.svg"}
              title={"CUSTOM SOLUTIONS"}
              paragraph={
                "Developing tailor-made solutions based on specific industry needs and user requirements."
              }
              color={"#CCFCAA"}
            ></Card>
          </div>
          <div className="md:col-span-6 flex flex-col gap-3 border  rounded-lg p-5">
            <Card
              image={"/svg/iosi4.svg"}
              title={"UI/UX DESIGN"}
              paragraph={
                "Designing an intuitive and visually appealing user interface and user experience design for iOS applications."
              }
              color={"#C3B8FF"}
            ></Card>

            <Card
              image={"/svg/iosi5.svg"}
              title={"MAINTENANCE & SUPPORT"}
              paragraph={
                "Providing ongoing support for updates, bug fixes, and improvements after the app is launched."
              }
              color={"#FFCAAF"}
            ></Card>
            <Card
              image={"/svg/iosi6.svg"}
              title={"SECURITY IMPLEMENTATION"}
              paragraph={
                "Incorporating security measures to protect user data and ensure data integrity."
              }
              color={"#FF9CC0"}
            ></Card>
          </div>
        </div>
      </div>

      <div className=" md:hidden py-8">
        <Card2
          image={"/svg/ios1.svg"}
          title={"Integrity"}
          paragraph={
            "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout"
          }
          color={"#FFF8DF"}
        ></Card2>

        <Card2
          image={"/svg/ios2.svg"}
          title={"Responsibility"}
          paragraph={
            "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout"
          }
          color={"#E6E2FF"}
        ></Card2>

        <Card2
          image={"/svg/ios3.svg"}
          title={"Customer First"}
          paragraph={
            "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout"
          }
          color={"#E3FFFB"}
        ></Card2>

        <Card2
          image={"/svg/ios4.svg"}
          title={"Accountability"}
          paragraph={
            "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout"
          }
          color={"#FFFCBE"}
        ></Card2>

        <Card2
          image={"/svg/ios5.svg"}
          title={"Excellence"}
          paragraph={
            "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout"
          }
          color={"#E9E7FF"}
        ></Card2>

        <Card2
          image={"/svg/ios6.svg"}
          title={"Continuous improvement"}
          paragraph={
            "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout"
          }
          color={"#DCFFCB"}
        ></Card2>
      </div>
    </div>
  );
}

export default Section2;

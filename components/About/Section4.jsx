import React from "react";

function Card({ title, paragraph, image, color }) {
  return (
    <>
      <div className="  md:col-span-6 grid  md:grid-cols-4 gap-x-8 gap-y-4 shadow-lg md:my-6 bg-white p-2.5 rounded-lg px-5 pb-5">
        <div
          style={{
            background: color,
          }}
          className={`w-full h-full rounded-lg flex items-center justify-center px-8 py-5 md:items-center`}
        >
          <img
            src={`${image}`}
            className="w-10 h-10  md:w-full md:h-full"
            alt=""
          />
        </div>
        <div className="col-span-3 flex flex-col md:justify-start md:items-start ">
          <p className="text-zinc-800 text-[27px] font-medium text-center">
            {title}
          </p>

          <p className="text-neutral-500 text-lg font-normal leading-[30.65px]">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
}

function Card2({ title, paragraph, image, color }) {
  return (
    <div className=" flex flex-col  items-center my-6">
      <div
        style={{
          background: color,
        }}
        className={`w-1/2 h-full rounded-lg flex items-center justify-center px-8 py-5 md:items-center`}
      >
        <img
          src={`${image}`}
          className="w-10 h-10  md:w-full md:h-full"
          alt=""
        />
      </div>
      <p className="text-zinc-800 text-[27px] font-medium text-center ">
        {title}
      </p>

      <p className="text-neutral-500 text-lg font-normal leading-[30.65px] text-center ">
        {paragraph}
      </p>
    </div>
  );
}

function Section4() {
  return (
    <div className="px-4 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl py-0 md:px-24 lg:px-8 pb-6  ">
      <div className=" mt-10 mb-8">
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Our core values
        </h2>
        <p className="text-base text-center my-8 text-[#797979] md:text-lg">
          Mobile app development company in India known for its innovation,
          <br />
          integrity, and client-centric approach.
        </p>
      </div>
      <div className=" hidden md:block">
        <div className=" grid grid-cols-1 md:grid-cols-12   gap-6 gap-y-4">
          <Card
            image={"/svg/1.svg"}
            title={"Integrity"}
            paragraph={
              "Integrity is the cornerstone of our creative ethos, ensuring a commitment to transparent collaboration and user-centric innovation."
            }
            color={"#FFF8DF"}
          ></Card>

          <Card
            image={"/svg/2.svg"}
            title={"Responsibility"}
            paragraph={
              "Responsibility is the driving force behind our commitment to delivering excellence and ensuring the success and satisfaction of our clients."
            }
            color={"#E6E2FF"}
          ></Card>

          <Card
            image={"/svg/3.svg"}
            title={"Customer First"}
            paragraph={
              "Embracing a 'Customer First' philosophy is embedded in our DNA, guiding us to craft designs that resonate with our clients' vision and their users' experiences."
            }
            color={"#E3FFFB"}
          ></Card>

          <Card
            image={"/svg/4.svg"}
            title={"Accountability"}
            paragraph={
              "We don't just design; we hold ourselves answerable to the precision of every line of code and the aesthetic integrity of each interface."
            }
            color={"#FFFCBE"}
          ></Card>

          <Card
            image={"/svg/6.svg"}
            title={"Excellence"}
            paragraph={
              "We meticulously craft every design element, pushing the boundaries to deliver not just functional apps, but an immersive user experience."
            }
            color={"#E9E7FF"}
          ></Card>

          <Card
            image={"/svg/5.svg"}
            title={"Continuous Improvement"}
            paragraph={
              "In the dynamic landscape of mobile app design, we ensure that every app we create reflects the latest innovations and best practices in the industry."
            }
            color={"#DCFFCB"}
          ></Card>
        </div>
      </div>

      <div className=" md:hidden py-8">
        <Card2
          image={"/svg/1.svg"}
          title={"Integrity"}
          paragraph={
            "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout"
          }
          color={"#FFF8DF"}
        ></Card2>

        <Card2
          image={"/svg/2.svg"}
          title={"Responsibility"}
          paragraph={
            "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout"
          }
          color={"#E6E2FF"}
        ></Card2>

        <Card2
          image={"/svg/3.svg"}
          title={"Customer First"}
          paragraph={
            "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout"
          }
          color={"#E3FFFB"}
        ></Card2>

        <Card2
          image={"/svg/4.svg"}
          title={"Accountability"}
          paragraph={
            "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout"
          }
          color={"#FFFCBE"}
        ></Card2>

        <Card2
          image={"/svg/6.svg"}
          title={"Excellence"}
          paragraph={
            "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout"
          }
          color={"#E9E7FF"}
        ></Card2>

        <Card2
          image={"/svg/5.svg"}
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

export default Section4;

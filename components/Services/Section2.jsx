import React from "react";

const cardData = [
  {
    title: "High-End Quality",
    paragraph:
      "We meticulously craft mobile app design with an unwavering focus on excellence and quality.",
    image: "/svg/20.svg",
  },
  {
    title: "Flexibility",
    paragraph:
      "We adapt to evolving requirements, pivot seamlessly in response to feedback, and tailor our designs.",
    image: "/svg/21.svg",
  },
  {
    title: "Transparency",
    paragraph:
      "We believe in clear communication, open collaboration, and providing a transparent view.",
    image: "/svg/22.svg",
  },

  {
    title: "Affordable price",
    paragraph:
      "It's a commitment to providing top-notch design solutions without breaking your bank. ",
    image: "/svg/23.svg",
  },

  {
    title: "Optimization",
    paragraph:
      "We fine-tune our designs, leveraging advanced techniques to ensure optimal performance.",
    image: "/svg/24.svg",
  },
  {
    title: "Security Mechanisms",
    paragraph:
      "We implement robust security protocols at every stage, ensuring your data's safety.",
    image: "/svg/25.svg",
  },
];

function Card({ title, paragraph, image }) {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-12 h-full bg-white rounded-lg shadow-lg gap-4 ">
        <div className=" col-span-12 md:col-span-5">
          <div className=" flex flex-col items-center justify-center py-14 bg-[#F1F2F6] h-full w-full">
            <img src={image} width={"100%"} className="w-20 h-20" alt="" />
          </div>
        </div>
        <div className=" col-span-12 md:col-span-7 px-5">
          <div className=" flex flex-col  justify-center gap-4 py-5">
            <p className="text-zinc-800 text-[27px] font-medium  md:text-start">
              {title}
            </p>
            <p className="text-neutral-500 text-lg font-normal leading-[30.65px]">
              {paragraph}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Section2() {
  return (
    <div className="px-4  mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl  md:px-24 lg:px-8 pb-6 py-10 ">
      <div className=" mb-8">
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Our Mobile App Design Approach
        </h2>
        <p className="text-base text-[#797979] md:text-lg text-center my-8">
          Our mobile app design approach seamlessly blends creativity and
          functionality to <br /> ensure your app exceeds user expectations.
        </p>
      </div>

      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-7  py-10">
          {cardData.map((card) => {
            return (
              <Card
                key={card.title}
                title={card.title}
                paragraph={card.paragraph}
                image={card.image}
              ></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Section2;

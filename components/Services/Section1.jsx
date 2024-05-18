import React from "react";
import BlueButton from "../ui/BlueButton";

const cardData = {
  card1: {
    title: "Android App",
    paragraph:
      "Create visually stunning and optimized Android mobile apps for best user experience with Overninja Technologies.",
    image: "/svg/11.svg",
    link: "/services/android-app",
  },
  card2: {
    title: "IOS App",
    paragraph:
      "Boost your business within apple community with our top-notch iOS mobile app design and development solutions.",
    image: "/svg/12.svg",
    link: "/services/ios-app",
  },
  card3: {
    title: "Hybrid App",
    paragraph:
      "We specialize in creating hybrid mobile apps that offer functionality like native and compatible on cross-platforms.",
    image: "/svg/13.svg",
    link: "/services/hybrid-app",
  },
};

const cardData2 = {
  card4: {
    title: "Flutter App",
    paragraph:
      "Our Flutter app development absolutely integrates innovative technology with captivating mobile app design.",
    image: "/svg/14.svg",
    link: "/services/flutter-app",
  },
  card5: {
    title: "React Native App",
    paragraph:
      "Our team of react native developers creates beautiful mobile app design by merging and engaging advanced technology.",
    image: "/svg/15.svg",
    link: "/services/react-native-app",
  },
};
const cardDataArray1 = Object.values(cardData);
const cardDataArray2 = Object.values(cardData2);

function Card({ title, paragraph, image, link }) {
  return (
    <>
      <div className=" bg-white p-6 rounded-3xl shadow-lg border-t">
        <div className="flex flex-col items-center gap-4 ">
          <img src={`${image}`} className="w-20 h-20" alt="" />
          <div className="flex flex-col gap-3 items-center">
            <p className="text-zinc-800 text-[27px] font-medium text-center">
              {title}
            </p>
            <p className="text-neutral-500 text-lg font-normal leading-[30.65px] text-center">
              {paragraph}
            </p>
          </div>
          <BlueButton text={"Explore More"} link={link}></BlueButton>
        </div>
      </div>
    </>
  );
}

function Section1() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Our Mobile App Design
        </h2>
        <div className=" flex justify-center text-center md:px-56 py-6 ">
          {" "}
          <p className="text-base text-[#797979] md:text-lg">
            Our team of ninjas specializes in creating beautiful and <br />{" "}
            easy-to-use mobile app design.
          </p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {cardDataArray1.map((card) => {
            return (
              <Card
                key={card.title}
                title={card.title}
                paragraph={card.paragraph}
                image={card.image}
                link={card.link}
              ></Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-44 mt-10 ">
          {cardDataArray2.map((card) => {
            return (
              <Card
                key={card.title}
                title={card.title}
                paragraph={card.paragraph}
                image={card.image}
                link={card.link}
              ></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Section1;

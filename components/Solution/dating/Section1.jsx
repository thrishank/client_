import React from "react";

function Section1() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Your Ideal Development Partner for Dating Apps
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-12 items-center gap-4 mt-20">
        <div className=" md:col-span-4 ">
          <img
            src="/svg/dating2.svg"
            alt="a person sitting in a bean bag chair sending friend request to a girl"
          />
        </div>

        <div className=" md:col-span-8 md:pl-10 md:ml-10">
          <p className=" text-[24px]  ">
            Are you ready to connect hearts, spark meaningful connections, and
            revolutionize the world of online dating? Look no further! At
            Overninja, we specialize in creating cutting-edge dating app
            solutions that bring people together, foster genuine relationships,
            and empower individuals to find love in a digital age. With our
            expertise in mobile app development and a passion for matchmaking,
            we empower businesses and individuals to thrive in the competitive
            landscape of online dating.
            <br />
            <br />
            To optimize user engagement and guarantee a smooth business
            connection, our hardworking team of engineers and designers
            carefully creates each app layout.
          </p>
        </div>
      </div>

      <div className=" my-20">
        <h2 className=" text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Our Dating App Development Services
        </h2>
        <p className=" text-[20px] my-6">
          <span className=" font-medium text-[#FF5948]">
            {" "}
            Matching and Discovery Features :{" "}
          </span>{" "}
          Facilitate meaningful connections with advanced matching algorithms,
          personalized recommendations, profile browsing, and discovery features
          that help users find compatible matches based on their interests,
          preferences, and relationship goals.
          <br /> <br />
          <span className=" font-medium text-[#FF5948]">
            Messaging and Communication Tools :{" "}
          </span>{" "}
          Foster genuine conversations and connections with messaging and
          communication tools that offer real-time chat, multimedia sharing,
          icebreakers, and conversation starters to help users break the ice and
          get to know each other better.
          <br /> <br />
          <span className=" font-medium text-[#FF5948]">
            {" "}
            Virtual Dating Experiences :{" "}
          </span>
          Adapt to changing dating trends and social dynamics with virtual
          dating experiences that offer video calls, virtual dates, live
          streaming, and interactive events to help users connect and bond in a
          virtual environment.
          <br />
          <br />
          <span className=" font-medium text-[#FF5948]">
            Safety and Moderation Features :{" "}
          </span>
          Prioritize user safety and security with safety and moderation
          features such as identity verification, reporting tools, privacy
          controls, and content moderation to create a safe and welcoming
          environment for all users.
        </p>
      </div>
    </div>
  );
}

export default Section1;

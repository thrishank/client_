import React from "react";

function Section1() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Your Trusted Sports App Development Partner
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-12 items-center gap-4 mt-20">
        <div className=" md:col-span-8 md:px-2">
          <p className=" text-[24px]  ">
            Are you ready to revolutionize the arena of sports with a
            cutting-edge mobile app? Look no further! At Overninja, we
            specialize in crafting bespoke sports app solutions that cater to
            the wishes of athletes, fans, and sports activities organizations
            alike. With our expertise in mobile app development and a deep
            ardour for sports activities, we empower companies and individuals
            to thrive in the virtual realm of sports activities.
            <br />
            <br />
            Our team of enthusiastic engineers and designers meticulously crafts
            each app layout to maximize user engagement and ensure seamless
            business connection.
          </p>
        </div>
        <div className=" md:col-span-4 ">
          <img
            src="/svg/sporti1.svg"
            alt="a screenshot of a phone showing a person doing a kick"
          />
        </div>
      </div>

      <div className=" my-20">
        <h2 className=" text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Our Sports App Development Services
        </h2>
        <p className=" text-[20px] my-6">
          <span className="  font-medium text-[#FF5948]">
            Athlete Performance Tracking :{" "}
          </span>{" "}
          Empower athletes to track their performance, analyze stats, and
          improve their game with our athlete performance tracking apps.
          <br /> <br />
          <span className="  font-medium text-[#FF5948]">
            Fan Engagement Platforms :{" "}
          </span>{" "}
          Enhance fan engagement and loyalty with interactive features such as
          live game updates, social sharing, fan forums, and exclusive content.
          <br /> <br />
          <span className="  font-medium text-[#FF5948]">
            League and Team Management Solutions :{" "}
          </span>
          Streamline league and team management tasks with our comprehensive
          management solutions, including scheduling, roster management, and
          communication tools.
          <br />
          <br />
          <span className="  font-medium text-[#FF5948]">
            Fitness and Training Apps :{" "}
          </span>
          Help users achieve their fitness goals with personalized training
          plans, workout tracking, nutrition guidance, and motivational tools.
        </p>
      </div>
    </div>
  );
}

export default Section1;

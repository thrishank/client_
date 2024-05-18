import React from "react";

function Section1() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          The Partner of Choice for Developing Fitness Apps
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-12 items-center gap-4 mt-20">
        <div className=" md:col-span-8 md:pl-2 ">
          <p className=" text-[24px]  ">
            Are you ready to empower users on their fitness journey and
            revolutionize the way people approach wellness? Look no further! At
            Overninja, we specialize in developing cutting-edge fitness app
            solutions that encourage and inspire customers to attain their
            health and fitness goals. With our information in mobile app
            development and ardour for fitness, we empower businesses and
            individuals to thrive within the competitive landscape of digital
            fitness and health.
          </p>
          <br />
          <p className=" text-[24px]  ">
            To optimize user engagement and guarantee a smooth business
            collaboration, our committed team of engineers and designers
            painstakingly creates each app layout.
          </p>
        </div>
        <div className=" md:col-span-4 ">
          <img
            src="/svg/fitness1.svg"
            alt="a person running with dumbbells using fitness app tracker"
          />
        </div>
      </div>

      <div className=" my-20">
        <h2 className=" text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Our Fitness App Development Services
        </h2>
        <p className=" text-[20px] my-6">
          <span className=" font-medium text-[#FF5948]">
            {" "}
            Workout Tracking Apps :{" "}
          </span>{" "}
          Empower users to track their workouts, set goals, and monitor progress
          with personalized workout tracking apps that offer features such as
          exercise libraries, workout plans, and performance analytics.
          <br /> <br />
          <span className=" font-medium text-[#FF5948]">
            Personal Training Platforms :{" "}
          </span>
          Connect users with certified personal trainers and fitness coaches
          through personalized training platforms that offer one-on-one
          coaching, customized workout plans, and progress monitoring.
          <br /> <br />
          <span className=" font-medium text-[#FF5948]">
            {" "}
            Nutrition and Meal Planning Apps :{" "}
          </span>
          Help users achieve their fitness goals with nutrition and meal
          planning apps that provide personalized meal plans, calorie tracking,
          recipe suggestions, and grocery shopping lists.
          <br />
          <br />
          <span className=" font-medium text-[#FF5948]">
            Community and Social Fitness Apps :{" "}
          </span>
          Foster a sense of community and motivation with social fitness apps
          that enable users to connect with like-minded individuals, join
          challenges, share achievements, and participate in group workouts.
        </p>
      </div>
    </div>
  );
}

export default Section1;

import React from "react";

function Section1() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Your Premier Education App Development Partner
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-12 items-center gap-4 mt-20">
        <div className=" md:col-span-4">
          <img
            src="/svg/education2.svg"
            alt="a person standing next to a large screen showing study material
"
          />
        </div>

        <div className=" md:col-span-8 md:pl-10">
          <p className=" text-[24px]  ">
            Are you equipped to transform the way training is delivered and
            experienced? Look no further! At Overninja, we specialise in growing
            present day schooling app solutions that cater to the desires of
            students, educators, and academic institutions. With our knowledge
            in mobile app development and a passion for learning, we empower
            organizations and individuals to thrive in the digital realm of
            training. <br />
            <br />
            Each app layout is painstakingly created by our passionate team of
            engineers and designers to optimize user engagement and guarantee a
            smooth business relationship.
          </p>
        </div>
      </div>

      <div className=" my-20">
        <h2 className=" text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Our Education App Development Services
        </h2>
        <p className=" text-[20px] my-6">
          <span className=" font-medium text-[#FF5948]">
            {" "}
            Learning Management Systems :{" "}
          </span>
          Empower educators to create, deliver, and manage online courses with
          our comprehensive learning management systems (LMS).
          <br /> <br />
          <span className=" font-medium text-[#FF5948]">
            Student Engagement Platforms :{" "}
          </span>
          Enhance student engagement and collaboration with interactive features
          such as discussion forums, group projects, and social networking.
          <br /> <br />
          <span className=" font-medium text-[#FF5948]">
            {" "}
            Mobile Learning Apps :{" "}
          </span>
          Extend learning beyond the classroom with mobile learning apps that
          provide anytime, anywhere access to educational content and resources.
          <br />
          <br />
          <span className=" font-medium text-[#FF5948]">
            Assessment and Evaluation Tools :{" "}
          </span>
          Streamline assessment and evaluation processes with our assessment
          tools, including quizzes, exams, and automated grading systems.
        </p>
      </div>
    </div>
  );
}

export default Section1;

import React from "react";

function Section1() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Your Go-To Partner for Real Estate App Development
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-12 items-center gap-4 mt-20">
        <div className=" md:col-span-4 ">
          <img
            src="/svg/real2.svg"
            alt="a phone with a megaphone and a house on it"
          />
        </div>

        <div className=" md:col-span-8 md:pl-10 md:ml-10">
          <p className=" text-[24px]  ">
            Are you geared up to revolutionize the way people buy, sale, and
            rent properties? Look no further! At Overninja, we focus on creating
            modern estate app solutions that connect consumers, dealers, and
            renters in dynamic digital marketplaces. With our expertise in
            mobile app development and a passion for real estate, we empower
            corporations and individuals to thrive in the competitive world of
            property transactions.
            <br />
            <br />
            Our dedicated team of engineers and designers meticulously crafts
            each app layout to maximize user engagement and ensure a seamless
            business partnership.
          </p>
        </div>
      </div>

      <div className=" my-20">
        <h2 className=" text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Our Real Estate App Development Services :{" "}
        </h2>
        <p className=" text-[20px] my-6">
          <span className=" font-medium text-[#FF5948]">
            {" "}
            Property Search Platforms :{" "}
          </span>
          Connect buyers with their dream properties and sellers with potential
          buyers through advanced property search platforms.
          <br /> <br />
          <span className=" font-medium text-[#FF5948]">
            {" "}
            Property Management Apps :{" "}
          </span>
          Empower property owners and managers to streamline rental property
          management tasks such as listing management, tenant communication, and
          rent collection.
          <br /> <br />
          <span className=" font-medium text-[#FF5948]">
            {" "}
            Virtual Tour Apps :{" "}
          </span>
          Provide immersive virtual tours of properties to buyers, allowing them
          to explore properties from the comfort of their homes.
          <br />
          <br />
          <span className=" font-medium text-[#FF5948]">
            Transaction Management Systems :{" "}
          </span>
          Simplify real estate transactions with secure transaction management
          systems that facilitate seamless buying, selling, and leasing
          processes.
        </p>
      </div>
    </div>
  );
}

export default Section1;

import React from "react";

function Section1() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Your Reliable Marketplace App Development Company
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-12 items-center gap-4 mt-20">
        <div className=" md:col-span-8 md:px-2">
          <p className=" text-[24px]  ">
            Are you looking to revolutionize the way people buy and sell online?
            Look no further! At Overninja, we specialize in creating modern-day
            marketplace app solutions that connect consumers and dealers in
            dynamic virtual marketplaces. With our expertise in mobile app
            development and a passion for ecommerce, we empower corporations and
            marketers to thrive within the competitive world of online
            marketplaces.
            <br />
            <br />
            Each app layout is painstakingly created by our passionate team of
            engineers and designers to optimize user engagement and guarantee a
            smooth business relationship.
          </p>
        </div>
        <div className=" md:col-span-4 ">
          <img
            src="/svg/market2.svg"
            alt="a person and person sitting on cubes with a laptop and a large screen with a gear and a wheel"
          />
        </div>
      </div>

      <div className=" my-20">
        <h2 className=" text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Our Marketplace App Development Services
        </h2>
        <p className=" text-[20px] my-6">
          <span className=" font-medium text-[#FF5948]">
            {" "}
            Ecommerce Marketplaces :{" "}
          </span>{" "}
          Create dynamic online marketplaces where buyers and sellers can trade
          goods and services, with features such as product listings, secure
          transactions, and seller verification.
          <br /> <br />
          <span className=" font-medium text-[#FF5948]">
            Service Marketplaces :{" "}
          </span>{" "}
          Connect service providers with customers looking for professional
          services, with features such as service listings, booking and
          scheduling, and ratings and reviews.
          <br /> <br />
          <span className=" font-medium text-[#FF5948]">
            Rental Marketplaces :{" "}
          </span>
          Facilitate peer-to-peer rentals of goods and equipment, with features
          such as rental listings, availability calendars, and secure payment
          processing.
          <br />
          <br />
          <span className=" font-medium text-[#FF5948]">
            Vertical Marketplaces :{" "}
          </span>
          Launch niche marketplaces catering to specific industries or
          interests, with features tailored to the unique needs of your target
          audience.
        </p>
      </div>
    </div>
  );
}

export default Section1;

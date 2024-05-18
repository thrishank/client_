import React from "react";

function Section1() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Your Trusted Ecommerce App Development Company
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-12 items-center gap-4 mt-20">
        <div className=" md:col-span-4">
          <img
            src="/svg/ecom2.svg"
            alt="a person standing next to a large cellphone"
          />
        </div>

        <div className=" md:col-span-8 md:pl-10">
          <p className=" text-[24px]  ">
            Are you ready to take your enterprise online and tap into the
            significant capability of ecommerce? Look no further! At Overninja,
            we focus on creating custom ecommerce apps that empower
            organizations to thrive in the digital marketplace. With our
            understanding in mobile app development and ecommerce solutions, we
            provide innovative and tailor-made solutions to satisfy your
            specific enterprise needs and drive growth. We are one of the best
            ecommerce app development company in India.
            <br />
            <br />
            To maximize user engagement and ensure seamless business connection,
            our team of dedicated engineers and designers meticulously crafts
            each app layout.
          </p>
        </div>
      </div>

      <div className=" my-20">
        <h2 className=" text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Our Ecommerce App Development Services
        </h2>
        <p className=" text-[20px] my-6">
          <span className=" font-medium text-[#FF5948]">
            {" "}
            Customer App Development :
          </span>{" "}
          Engage your customers and drive sales with a feature-rich customer app
          that offers seamless browsing, personalized recommendations, secure
          checkout, and convenient payment options.
          <br /> <br />
          <span className=" font-medium text-[#FF5948]">
            Admin Dashboard Development :{" "}
          </span>{" "}
          Monitor and manage your ecommerce operations effectively with a
          powerful admin dashboard that provides insights into sales, inventory,
          customer behavior, and more. Track performance metrics, manage product
          listings, and streamline order fulfillment with ease.
          <br /> <br />
          <span className=" font-medium text-[#FF5948]">
            {" "}
            Integration with Ecommerce Platforms :{" "}
          </span>
          We can integrate your ecommerce app with leading ecommerce platforms
          such as Shopify, WooCommerce, Magento, and more, allowing you to
          leverage the power of these platforms while providing a customized and
          branded shopping experience for your customers.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default Section1;

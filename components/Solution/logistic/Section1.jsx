import React from "react";

function Section1() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pb-6 py-10 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Your Optimal Logistics App Development Partner
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-12 items-center gap-4 mt-20">
        <div className=" md:col-span-8 md:px-2 ">
          <p className=" text-[24px]  ">
            Are you ready to streamline your logistics operations, optimize
            supply chain management, and revolutionize the way goods are
            transported? Look no further! At Overninja, we specialise in
            developing cutting-edge logistics app solutions that empower groups
            to deliver items correctly, track shipments in real-time, and
            beautify standard logistics efficiency. With our knowledge in mobile
            app development and an ardour for logistics innovation, we empower
            agencies to thrive in the competitive landscape of the logistics
            industry.
            <br /> <br />
            Our diligent team of engineers and designers meticulously crafts
            each app layout to maximize user engagement and ensure a seamless
            business connection.
          </p>
        </div>
        <div className=" md:col-span-4 ">
          <img
            src="/svg/logistic2.svg"
            alt="a group of people standing around a tablet"
          />
        </div>
      </div>

      <div className=" my-20">
        <h2 className=" text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Our Logistics App Development Services
        </h2>
        <p className=" text-[20px] my-6">
          <span className=" font-medium text-[#FF5948]">
            {" "}
            Shipment Tracking and Management :{" "}
          </span>
          Enable real-time tracking of shipments, deliveries, and inventory with
          features such as GPS tracking, barcode scanning, delivery status
          updates, and electronic proof of delivery (ePOD).
          <br /> <br />
          <span className=" font-medium text-[#FF5948]">
            Fleet Management Solutions :{" "}
          </span>
          Optimize fleet operations, monitor vehicle performance, and improve
          driver productivity with features such as vehicle tracking, route
          planning, driver assignments, and fuel consumption monitoring
          <br /> <br />
          <span className=" font-medium text-[#FF5948]">
            {" "}
            Warehouse Management Systems :{" "}
          </span>
          Streamline warehouse operations, optimize inventory management, and
          increase warehouse efficiency with features such as inventory
          tracking, stock replenishment, order picking, and warehouse analytics.
          <br />
          <br />
          <span className=" font-medium text-[#FF5948]">
            Supply Chain Visibility Platforms :{" "}
          </span>
          Enhance supply chain visibility and collaboration with features such
          as supply chain monitoring, supplier management, demand forecasting,
          and order management to ensure timely delivery of goods and minimize
          disruptions.
        </p>
      </div>
    </div>
  );
}

export default Section1;

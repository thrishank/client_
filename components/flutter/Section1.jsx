import React from "react";
import Form from "./Form";

function Section1() {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 pt-10 ">
      <div className=" mt-10 mb-16">
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Redefining Digital Experiences with Flutter App Development
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-12  gap-10 ">
        <div className=" md:col-span-7 ">
          <p className=" text-[20px] text-gray-500">
            Embark on an adventure of innovation and efficiency with our Flutter
            App Development offerings at Overninja. As a leading force in the
            tech landscape, we specialize in leveraging the strength of Flutter
            to create cross-platform applications that seamlessly blend
            modern-day technology with fascinating design.
            <br />
            <br />
            <span className=" font-bold my-4 text-[#040222]">
              Our Process of Flutter App Development
            </span>
            <br />
            <br />
            <span className=" font-bold my-4 text-[#040222]">
              Cross-Platform Brilliance
            </span>
            <br />
            <br />
            Our Flutter App Development ensures a single codebase that results
            easily caters to both iOS and Android platforms, offering an
            affordable solution with native-like overall performance.
            <br />
            <br />
            <span className=" font-bold my-4 text-[#040222]">
              Rapid Development
            </span>
            <br />
            <br />
            Flutter's hot reload feature allows for faster improvement cycles,
            allowing us to iterate and deploy updates quicker, decreasing
            time-to-market on your app.
          </p>
        </div>
        <div className=" md:col-span-5">
          <Form></Form>
        </div>
      </div>
      <div>
        <p className="text-[20px] text-gray-500">
          <br />
          <br />
          <span className=" font-bold my-4 text-[#040222]">
            Visually Stunning Interfaces
          </span>
          <br />
          <br />
          Our UI/UX designers excel in developing visually attractive and
          intuitive interfaces, making sure your Flutter app now not handiest
          features flawlessly but additionally captivate users with a pleasing
          layout.
          <br />
          <br />
          <span className=" font-bold my-4 text-[#040222]">
            Native Performance
          </span>
          <br />
          <br />
          Flutter apps are acknowledged for their high performance and
          responsiveness, handing over a native-like performance that sets your
          software aside within the competitive digital landscape.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default Section1;

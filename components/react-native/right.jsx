import React from "react";

import "./right.css";

function RightSec() {
  return (
    <section class="right-timeline">
      <ul>
        <li>
          <div class="content ">
            <h2 className=" absolute    -top-5 left-4  ">
              <span className="text-[24px] text-[#040222] font-medium">
                Quality Assurance
              </span>
            </h2>
            <div className=" top-5 w-full flex justify-between ">
              <div className=" mt-6  ">
                <p className="bg-[#159AC6] md:px-4 py-4 rounded-md  text-left ">
                  Rigorous testing at every stage to identify and address any
                  issues, ensuring a bug-free and reliable React Native app
                  development.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="content ">
            <h2 className=" absolute    -top-5 left-4   ">
              <span className="text-[24px] text-[#040222] font-medium">
                Deployment
              </span>
            </h2>
            <div className=" top-5 w-full flex justify-between items-center">
              <div className=" mt-6  ">
                <p className="bg-[#F7C75B] md:px-4 py-4 rounded-md text-left  ">
                  Efficient deployment of your React Native app to the desired
                  platforms, with best practices to ensure a smooth and
                  successful launch.
                </p>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="content ">
            <h2 className=" absolute    -top-5 left-4  ">
              <span className="text-[24px] text-[#040222] font-medium">
                Support
              </span>
            </h2>
            <div className=" top-5 w-full flex justify-between items-center">
              <div className=" mt-6  ">
                <p className="bg-[#00A859] md:px-4 py-4 rounded-md text-left  ">
                  Beyond the launch, our support and maintenance services ensure
                  your React Native app remains up-to-date for peak performance.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default RightSec;

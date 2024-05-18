import React from "react";

import "./left.css";

function LeftSec() {
  return (
    <section class="left-timeline">
      <ul>
        <li>
          <div class="content ">
            <h2 className=" absolute    -top-5 left-4   ">
              <span className="text-[24px] text-[#040222] font-medium">
                Planning
              </span>
            </h2>
            <div className=" top-5 w-full flex justify-between items-center">
              <div className=" mt-6  ">
                <p className="bg-[#9C3B3B] md:px-4 py-4 rounded-md text-left  ">
                  Collaborative sessions to understand your goals and
                  requirements, laying the groundwork for a comprehensive app
                  development.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="content ">
            <h2 className=" absolute    -top-5 left-4  ">
              <span className="text-[24px] text-[#040222] font-medium">
                UI/UX Design
              </span>
            </h2>
            <div className=" top-5 w-full flex justify-between items-center">
              <div className=" mt-6  ">
                <p className="bg-[#FF6EA4] md:px-4 py-4 rounded-md text-left  ">
                  Our design experts create visually stunning and intuitive
                  interfaces, ensuring a seamless and delightful user
                  experience.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="content ">
            <h2 className=" absolute    -top-5 left-4  ">
              <span className="text-[24px] text-[#040222] font-medium">
                App Development
              </span>
            </h2>
            <div className=" top-5 w-full flex justify-between items-center">
              <div className=" mt-6  ">
                <p className="bg-[#FF2222] md:px-4 py-4 rounded-md text-left  ">
                  Our developers bring your vision to life with efficient
                  coding, creating a cross-platform application that meets your
                  functional requirements.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default LeftSec;

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
                Project Discovery
              </span>
            </h2>
            <div className=" top-5 w-full flex justify-between items-center">
              <div className=" mt-6  ">
                <p className="bg-[#9C3B3B] md:px-4 py-4 rounded-md text-left  ">
                  Outline the app's features, functionality, and technical
                  requirements. Develop a project timeline and budget.
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
                  Create wireframes and prototypes to visualize the app's layout
                  and flow. Design the UI & UX elements.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="content ">
            <h2 className=" absolute    -top-5 left-4  ">
              <span className="text-[24px] text-[#040222] font-medium">
                Development
              </span>
            </h2>
            <div className=" top-5 w-full flex justify-between items-center">
              <div className=" mt-6  ">
                <p className="bg-[#FF2222] md:px-4 py-4 rounded-md text-left  ">
                  Write code for the app's features and functionalities. Utilize
                  Hybrid's hot reload for quick iteration and testing.
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

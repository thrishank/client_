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
                  Identify and address any bugs or issues. Gather feedback and
                  make necessary improvements.
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
                  Generate necessary certificates and keys for code signing.
                  Release the app to the respective stores.
                </p>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="content ">
            <h2 className=" absolute    -top-5 left-4  ">
              <span className="text-[24px] text-[#040222] font-medium">
                Optimization
              </span>
            </h2>
            <div className=" top-5 w-full flex justify-between items-center">
              <div className=" mt-6  ">
                <p className="bg-[#00A859] md:px-4 py-4 rounded-md text-left  ">
                  Regularly update dependencies and ensure compatibility with
                  the latest Hybrid versions.
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

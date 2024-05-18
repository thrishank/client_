"use client";

import React, { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div>
        <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Frequently Asked Questions
        </h2>
        <div className=" flex justify-center text-center md:px-56 py-6 "> </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-12">
        <div className=" md:col-span-2"></div>
        <div className=" md:col-span-8">
          <div class="space-y-4">
            <Item title="Can you assist with app store submissions and approvals?">
              Yes, our team is experienced in handling app store submissions and
              can guide you through the process, ensuring your app meets all
              requirements for a successful launch.
            </Item>
            <Item title="Will I have ownership of the source code?">
              Yes, upon project completion and payment, you will have complete
              ownership of the source code. We believe in transparency and
              provide all necessary assets for your continued control and
              flexibility.
            </Item>
            <Item title="How do you ensure the user-friendliness of the app's interface (UI/UX)?">
              Our UI/UX design team follows a user-centric approach, conducting
              thorough research and testing to ensure the app is intuitive and
              enjoyable for your target audience.
            </Item>
            <Item title="What industries have you developed iOS apps for?">
              We have experience across various industries, including
              healthcare, finance, education, e-commerce, entertainment, and
              more. Our versatile expertise allows us to cater to diverse
              business needs.
            </Item>

            <Item title="Can you integrate third-party APIs and services into my iOS app?">
              Yes, we can integrate a wide range of third-party APIs and
              services to enhance the functionality and features of your app,
              providing a seamless and integrated experience.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

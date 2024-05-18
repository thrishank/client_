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
            <Item
              title="Why should I choose a React Native App Development Company?
"
            >
              React Native is an open-source framework for cross-platform mobile
              app development. Choosing a React Native App Development Company
              ensures expertise in leveraging this framework to create efficient
              and cost-effective applications for both iOS and Android.
            </Item>
            <Item title="How do we create an React Native app with native-like performance?">
              Yes, a proficient React Native App Development Company can harness
              the framework's capabilities to create apps with native-like
              performance, ensuring a seamless and responsive user experience.
            </Item>
            <Item title="What types of React Native apps can our company create?">
              React Native is versatile and suitable for various applications,
              including but not limited to e-commerce apps, social media
              platforms, utility apps, and enterprise-level solutions.
            </Item>
            <Item title="How does the development process work at our company?">
              The process typically involves strategic planning, UI/UX design,
              React Native app development, testing, deployment, and post-launch
              support. Companies follow a structured approach to ensure a
              successful and efficient development cycle.
            </Item>

            <Item title="How is the security of React Native apps ensured by us?">
              Security is a priority, and companies implement best practices
              such as secure coding techniques, regular testing, and staying
              updated on security measures to ensure robust security in React
              Native apps.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

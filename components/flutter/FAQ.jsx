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
            <Item title="What is Flutter, and why should I choose it for app development?">
              Flutter is an open-source UI software development toolkit from
              Google. Choosing Flutter ensures a single codebase for both iOS
              and Android, offering faster development cycles and native-like
              performance.
            </Item>
            <Item title="How does Flutter's hot reload feature benefit the development process?">
              Flutter's hot reload allows developers to instantly view changes,
              facilitating quicker development cycles, efficient debugging, and
              a more seamless iteration process.
            </Item>
            <Item title="Can Flutter apps achieve the same performance as native applications?">
              Yes, Flutter apps are designed for high performance, providing a
              native-like experience with smooth animations, fast rendering, and
              responsive interfaces.
            </Item>
            <Item
              title="Does Flutter support integration with native features and third-party APIs?
"
            >
              Yes, Flutter supports seamless integration with native features
              and third-party APIs, enabling developers to access
              device-specific functionalities and enhance app capabilities.
            </Item>

            <Item title="What type of applications can be developed using Flutter?">
              Flutter is versatile and suitable for developing various
              applications, including but not limited to mobile apps, web apps,
              desktop apps, and embedded systems.
            </Item>
            <Item title=" How do you ensure the security of Flutter apps?">
              Security is a top priority. We follow industry best practices,
              employ secure coding techniques, and conduct thorough testing to
              identify and address any potential vulnerabilities in Flutter
              apps.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

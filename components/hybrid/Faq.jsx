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
    <div class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
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
            <Item title="Why choose a hybrid app over native development?">
              Hybrid apps offer cost-effectiveness, faster development cycles,
              and the ability to reach a broader audience with a single
              codebase. They provide a balance between cross-platform
              compatibility and native-like performance.
            </Item>
            <Item title="Which frameworks do you use for hybrid app development?">
              We specialize in using frameworks like Flutter and React Native
              for hybrid app development. These frameworks enable us to create
              efficient and visually appealing apps that work seamlessly on both
              iOS and Android platforms.
            </Item>
            <Item title="Can hybrid apps achieve the same performance as native apps?">
              Yes, hybrid apps can achieve near-native performance. Frameworks
              like Flutter and React Native are designed to provide a smooth and
              responsive user experience, making hybrid apps indistinguishable
              from native ones in terms of performance.
            </Item>
            <Item title="Will my hybrid app look and feel native on both iOS and Android devices?">
              Yes, our hybrid app development services ensure that your app
              maintains a consistent and native-like appearance across both iOS
              and Android platforms, offering a seamless user experience.
            </Item>
            <Item title="How do you handle updates and maintenance for hybrid apps?">
              We provide ongoing support and maintenance services to ensure your
              hybrid app remains up-to-date, secure, and compatible with the
              latest operating system versions on both iOS and Android.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

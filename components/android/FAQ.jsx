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
            <Item title="What is the typical timeline for developing an Android app?">
              Our development timelines vary based on the complexity and
              features of the app. On average, a straightforward app may take a
              few weeks, while more intricate projects could extend to several
              months.
            </Item>
            <Item title="How much does Android app development cost?">
              The cost is influenced by factors such as app complexity,
              features, and design. We offer personalized quotes after
              understanding your project requirements during the initial
              consultation.
            </Item>
            <Item title="Do you provide ongoing support and maintenance after the app is launched?">
              Yes, we offer post-launch support and maintenance services. Our
              team ensures your app stays up-to-date, secure, and compatible
              with the latest Android versions.
            </Item>
            <Item title="Can you develop apps for both Android and iOS platforms?">
              Absolutely. We specialize in cross-platform development using
              frameworks like Flutter and React Native, ensuring your app is
              accessible to a broader audience on both Android and iOS.
            </Item>

            <Item title="How do you ensure the security of my app and user data?">
              Security is a top priority. We follow industry best practices,
              employ secure coding techniques, and conduct thorough testing to
              identify and address any potential vulnerabilities.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

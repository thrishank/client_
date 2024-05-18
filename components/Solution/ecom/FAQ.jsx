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
            <Item title="How does ecommerce app benefit businesses?">
              Ecommerce apps benefit businesses by expanding their reach to a
              wider audience, increasing sales and revenue, providing a
              convenient shopping experience for customers, offering
              personalized recommendations, improving customer engagement and
              loyalty, and optimizing operational efficiency.
            </Item>
            <Item title="How long does it typically take to develop an ecommerce app?">
              The development timeline for an ecommerce app varies depending on
              factors such as complexity, features, design, platforms, and team
              size. Generally, it can take anywhere from a few months to a year
              to develop a fully functional ecommerce app.
            </Item>
            <Item title="What factors influence the cost of ecommerce app development?">
              Several factors influence the cost of ecommerce app development,
              including app complexity, features, design complexity, platforms
              (iOS, Android, or both), backend infrastructure requirements,
              third-party integrations, testing requirements, and post-launch
              support services.
            </Item>
            <Item title="Can an ecommerce app be developed for both iOS and Android platforms?">
              Yes, ecommerce apps can be developed for both iOS and Android
              platforms using cross-platform frameworks like React Native or
              Flutter, or through separate native development for each platform.
              This approach ensures that businesses can reach a larger audience
              and provide a consistent shopping experience across different
              devices.
            </Item>

            <Item title="What post-launch support services do you provide for ecommerce apps?">
              We provide comprehensive post-launch support services for
              ecommerce apps, including bug fixes, performance optimization,
              security updates, feature enhancements, platform updates, server
              maintenance, analytics tracking, and ongoing technical support to
              ensure the app's smooth operation and continued success in the
              long run.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

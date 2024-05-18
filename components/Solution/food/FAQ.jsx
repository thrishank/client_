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
            <Item title="How does food app development benefit businesses in the food industry?">
              Food app development enhances efficiency and customer experience
              in the food industry by enabling convenient ordering, delivery
              tracking, and personalized recommendations.
            </Item>
            <Item title="What are the essential features of a food delivery app?">
              Essential features include user registration, menu browsing,
              ordering, payment integration, real-time order tracking, and
              customer feedback.
            </Item>
            <Item title="How long does it typically take to develop a food app?">
              The development timeline varies based on complexity but typically
              ranges from a few months to a year.
            </Item>
            <Item title="What factors influence the cost of food app development?">
              Cost factors include app complexity, features, design, platforms,
              backend infrastructure, third-party integrations, and testing
              requirements.
            </Item>
            <Item title="What post-launch support and maintenance services are provided?">
              Post-launch support includes bug fixes, updates, security patches,
              and ongoing maintenance to ensure optimal performance and user
              satisfaction.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

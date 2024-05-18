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
            <Item title="What are the essential features of an entertainment app?">
              Essential features vary depending on the type of entertainment app
              but may include content streaming, social sharing, user profiles,
              personalized recommendations, interactive gaming experiences, and
              content discovery algorithms.
            </Item>
            <Item title="How long does it take to develop an entertainment app?">
              The development timeline depends on factors such as complexity,
              features, platforms, and team size. Generally, it can take several
              months to a year to develop a fully functional entertainment app.
            </Item>
            <Item title="What factors influence the cost of entertainment app development?">
              Factors include app complexity, features, design requirements,
              platforms, backend infrastructure, third-party integrations,
              testing, and ongoing maintenance and support.
            </Item>
            <Item title="Can an entertainment app be developed for both iOS and Android platforms?">
              Yes, entertainment apps can be developed for both iOS and Android
              platforms using cross-platform frameworks or native development
              approaches.
            </Item>
            <Item title="How can an entertainment app monetize its content?">
              Monetization strategies include subscription-based models,
              advertising, in-app purchases, sponsorships, premium content
              offerings, and partnerships with content creators or brands.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

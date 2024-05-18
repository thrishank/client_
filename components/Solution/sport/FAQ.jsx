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
            <Item title="How can sports app development benefit my sports enterprise?">
              Sports app development can benefit your sports enterprise by
              enhancing fan engagement, improving athlete performance tracking
              and analysis, streamlining league and team management tasks,
              providing personalized fitness and training solutions, expanding
              your reach to a wider audience, and driving revenue through
              sponsorship opportunities and in-app purchases.
            </Item>
            <Item title="How long does it typically take to develop a sports app?">
              The development timeline for a sports app varies depending on
              factors such as complexity, features, design requirements,
              platforms (iOS, Android, or both), and team size. Generally, it
              can take anywhere from a few months to a year to develop a fully
              functional sports app.
            </Item>
            <Item title="What factors influence the cost of sports app development?">
              Several factors influence the cost of sports app development,
              including app complexity, features, design requirements, platforms
              (iOS, Android, or both), backend infrastructure, third-party
              integrations, testing requirements, and post-launch support
              services.
            </Item>
            <Item title="How can a sports app ensure data security and privacy for users?">
              Sports apps can ensure data security and privacy for users by
              implementing industry-standard security measures such as
              encryption, secure authentication methods, compliance with
              regulations (such as GDPR), regular security audits, transparent
              privacy policies, and user education on security best practices.
            </Item>
            <Item title="Can a sports app be developed for both iOS and Android platforms?">
              Yes, sports apps can be developed for both iOS and Android
              platforms using cross-platform frameworks like React Native or
              Flutter, or through separate native development for each platform.
              This approach ensures that your sports app can reach a larger
              audience and provide a consistent user experience across different
              devices.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

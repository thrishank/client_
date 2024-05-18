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
            <Item title="How can marketplace app benefit my business?">
              Marketplace app development involves creating digital platforms
              where buyers and sellers can connect and transact goods or
              services. It benefits businesses by expanding their reach,
              increasing sales opportunities, reducing operational costs,
              fostering community engagement, and providing valuable insights
              into consumer behavior.
            </Item>
            <Item title="What are the essential features of a marketplace app?">
              Essential features include user authentication, product listings,
              search and filter options, secure payment processing,
              messaging/chat functionality, ratings and reviews, order tracking,
              and seller verification.
            </Item>
            <Item title="How long does it typically take to develop a marketplace app?">
              The development timeline varies depending on factors such as
              complexity, features, platforms, and team size. Generally, it can
              take several months to a year to develop a fully functional
              marketplace app.
            </Item>
            <Item title="How can a marketplace app ensure security and privacy for users?">
              By implementing secure authentication methods, data encryption,
              compliance with data protection regulations, regular security
              audits, and transparent privacy policies.
            </Item>
            <Item title="What post-launch support are provided for marketplace apps?">
              Post-launch support includes bug fixes, performance optimization,
              feature enhancements, security updates, platform updates, and
              ongoing technical support to ensure smooth operation and continued
              success.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

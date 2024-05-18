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
            <Item title="How can healthcare app benefit healthcare organizations?">
              Healthcare app development involves creating digital platforms,
              such as mobile apps or web applications, that facilitate various
              aspects of healthcare delivery, patient care, and medical practice
              management. These apps benefit healthcare organizations by
              improving efficiency, enhancing patient engagement, streamlining
              workflows, and enabling remote access to healthcare services.
            </Item>
            <Item title="What are the essential features of a healthcare app?">
              Essential features may include patient registration and profile
              management, appointment scheduling, telemedicine or virtual
              consultation capabilities, secure messaging, electronic health
              record (EHR) access, medication management, health tracking, and
              integration with wearable devices.
            </Item>
            <Item title="How long does it take to develop a healthcare app?">
              The development timeline for a healthcare app depends on factors
              such as complexity, features, platforms (iOS, Android, web),
              regulatory requirements, and integration with third-party systems.
              Typically, development can take several months to a year or more.
            </Item>
            <Item title="Can healthcare apps facilitate telemedicine or virtual consultations?">
              Yes, many healthcare apps include telemedicine or virtual
              consultation features that allow patients to connect with
              healthcare providers remotely for diagnosis, treatment,
              monitoring, and follow-up care. These features typically include
              secure video conferencing, messaging, and file sharing
              capabilities.
            </Item>
            <Item title="What post-launch support is provided for healthcare apps?">
              Post-launch support includes bug fixes, performance optimization,
              feature enhancements, compliance updates, security patches, data
              backups, and ongoing technical support to ensure the smooth
              operation and continued success of the healthcare app.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

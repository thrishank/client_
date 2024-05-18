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
            <Item title="How can mobile apps benefit the healthcare industry?">
              Mobile apps benefit the healthcare industry by improving access to
              healthcare, enabling remote patient monitoring, delivering health
              education, enhancing efficiency, and providing personalized
              healthcare solutions.
            </Item>
            <Item title="What features should a finance app have to ensure user trust and security?">
              Features for trust and security in finance apps include secure
              authentication, encryption, fraud detection, compliance with
              regulations, regular security audits, transparent privacy
              policies, secure communication channels, and user education on
              security best practices.
            </Item>
            <Item title="How do retail apps personalize the shopping experience for users?">
              Retail apps personalize the shopping experience through
              personalized recommendations, targeted promotions, loyalty
              programs, location-based services, and seamless omnichannel
              integration.
            </Item>
            <Item title=" What features should educational apps include to support remote learning?">
              Educational apps should include features such as interactive
              lessons, quizzes and assessments, progress tracking, peer
              collaboration tools, multimedia content, and integration with
              learning management systems to support remote learning
              effectively.
            </Item>

            <Item title=" What types of entertainment apps are popular among users?">
              Popular types of entertainment apps include streaming apps for
              music, video, and movies, social media apps, gaming apps, news and
              magazine apps, and AR/VR apps. Users enjoy a variety of content
              ranging from entertainment to information and social interaction.
            </Item>
            <Item
              title={
                " What features should fitness apps include to enhance user engagement?"
              }
            >
              Fitness apps should include features like goal setting, progress
              tracking, workout plans, social sharing, challenges, gamification,
              and personalized recommendations to enhance user engagement.
            </Item>
            <Item
              title={
                "What features should tourism apps offer to enhance the travel experience?"
              }
            >
              Tourism apps should offer features such as destination guides,
              interactive maps, offline access to information, booking
              capabilities for accommodations and activities, reviews and
              ratings, itinerary planning tools, and real-time updates to
              enhance the travel experience.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

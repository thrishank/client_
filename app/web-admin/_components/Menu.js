"use client";
import React, { useState } from "react";

function getMenuStyle(isActive) {
  return isActive
    ? `border-s-[3px] border-blue-500 bg-blue-50 px-4 py-3 text-blue-700`
    : `border-s-[3px] border-transparent px-4 py-3 text-gray-500`;
}

function Menu() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="col-span-2">
      <ul>
        <li>
          <a
            href="/web-admin/posts"
            className={`flex items-center gap-2 ${getMenuStyle(
              activeItem === "posts"
            )}`}
            onClick={() => setActiveItem("posts")}
          >
            <span className="text-sm font-medium"> Posts </span>
          </a>
        </li>

        <li>
          <a
            href="/web-admin/case-studies"
            className={`flex items-center gap-2 ${getMenuStyle(
              activeItem === "case-studies"
            )}`}
            onClick={() => setActiveItem("case-studies")}
          >
            <span className="text-sm font-medium"> Case Studies </span>
          </a>
        </li>

        <li>
          <a
            href="/web-admin/leads"
            className={`flex items-center gap-2 ${getMenuStyle(
              activeItem === "leads"
            )}`}
            onClick={() => setActiveItem("leads")}
          >
            <span className="text-sm font-medium"> Leads </span>
          </a>
        </li>

        <li>
          <a
            href="/web-admin/users"
            className={`flex items-center gap-2 ${getMenuStyle(
              activeItem === "users"
            )}`}
            onClick={() => setActiveItem("users")}
          >
            <span className="text-sm font-medium"> Users </span>
          </a>
        </li>

        <li>
          <a
            href="/web-admin/stats"
            className={`flex items-center gap-2 ${getMenuStyle(
              activeItem === "stats"
            )}`}
            onClick={() => setActiveItem("stats")}
          >
            <span className="text-sm font-medium"> Stats </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

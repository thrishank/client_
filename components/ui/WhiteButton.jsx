import Link from "next/link";
import React from "react";

function WhiteButton({ text, link = "/" }) {
  return (
    <Link href={link}>
      <button className=" bg-[#674FCD] font-medium font-sans shadow-md text-white rounded-full px-6 py-3 flex justify-center items-center hover:text-white hover:font-normal transition duration-150 ease-in-out hover:scale-95">
        <span>{text}</span>
      </button>
    </Link>
  );
}

export default WhiteButton;

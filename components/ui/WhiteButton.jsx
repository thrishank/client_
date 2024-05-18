import Link from "next/link";
import React from "react";

function WhiteButton({ text, link = "/" }) {
  return (
    <Link href={link}>
      <button className=" bg-[#fff] font-bold shadow-md text-slate-950 rounded-full px-6 py-3 flex justify-center items-center hover:bg-[#FF5948] hover:text-white hover:font-normal transition duration-150 ease-in-out hover:scale-95">
        <span>{text}</span>
      </button>
    </Link>
  );
}

export default WhiteButton;

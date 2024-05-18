import React from "react";

function page() {
  return (
    <>
      <div className="bg-black w-full h-[100px]"></div>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">Thank You </h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We will get in touch with you in 24 hours
          </p>

          <a
            href="/"
            className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </>
  );
}

export default page;

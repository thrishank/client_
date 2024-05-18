import React from "react";

function OtherHome({ titile, dimg }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${dimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="   "
      >
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid grid-col-1  md:grid-cols-3 lg:grid-cols-3 items-center   mb-2 justify-evenly pt-32 md:pt-44 pb-20   sm:max-w-xl md:max-w-full lg:max-w-screen-2xl ">
            <div className="relative col-span-2 mb-16 lg:mb-0 z-10 pb-8 w-full md:w-full max-w-2xl lg:w-full  ">
              <div className=" mb-6">
                <h2
                  style={{ lineHeight: "1.4" }}
                  className="mb-6   font-bold tracking-tight text-5xl md:text-6xl text-[#fff] "
                >
                  {titile}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherHome;

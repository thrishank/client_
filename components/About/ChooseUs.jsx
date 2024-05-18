import React from "react";

function ChooseUs() {
  return (
    <section className="">
      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 pt-10 ">
        <div className=" mt-4 mb-16">
          <h2 className=" text-center   text-3xl md:text-5xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
            Why choose us?
          </h2>
          <p className="text-base text-center my-8 text-[#797979] md:text-lg">
            Mobile app development company in India to transform your <br />{" "}
            digital aspirations into successful and innovative apps.
          </p>
        </div>
        <div className="grid gap-4 md:mx-4 sm:grid-cols-12">
          <div className="relative col-span-6 md:px-4 space-y-6">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-[#1A8B91]">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                <h3 className="text-2xl font-medium tracking">
                  Innovative Team{" "}
                </h3>

                <p className="mt-3 text-[#797979]">
                  Our innovative team isn't just a workforce; it's a collective
                  of visionaries. They don't just design apps; they architect
                  experiences that redefine the possibilities of mobile
                  technology.
                </p>
              </div>

              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                <h3 className="text-2xl font-medium tracking">
                  Collaborative Partnership{" "}
                </h3>

                <p className="mt-3 text-[#797979]">
                  A collaborative partnership isn't a transaction; it's a shared
                  journey. We go beyond client-vendor dynamics, fostering a
                  relationship where ideas converge, and creativity thrives.
                </p>
              </div>

              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                <h3 className="text-2xl font-medium tracking">
                  Quality Uncompromised{" "}
                </h3>

                <p className="mt-3 text-[#797979]">
                  We meticulously scrutinize every detail, leaving no pixel
                  untouched, to ensure that each design we deliver reflects a
                  standard of quality that surpasses expectations and stands the
                  test of time.{" "}
                </p>
              </div>

              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                <h3 className="text-2xl font-medium tracking">
                  Agile Development Approach{" "}
                </h3>
                <p className="mt-3 text-[#797979]">
                  Our Agile Development Approach is a rhythmic dance of
                  adaptability and precision. We don't just follow a process; we
                  orchestrate a symphony of collaboration and responsiveness.
                </p>{" "}
              </div>

              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#FF5948]">
                <h3 className="text-2xl font-medium tracking">
                  User-Centric Design{" "}
                </h3>
                <p className="mt-3 text-[#797979]">
                  In our mobile app design endeavours, user-centric design isn't
                  a mere principle; it's our guiding North Star. We ensure that
                  our apps elevate the very essence of user satisfaction.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="col-span-6 px-4 flex flex-col justify-center items-center ">
            <img
              src="/about2.png"
              alt="a person and person standing next to each other
"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;

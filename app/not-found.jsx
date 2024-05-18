// import ButtonBlue from "@/components/ui/ButtonBlue";
import BlueButton from "@/components/ui/BlueButton";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <>
      <div className=" h-24 bg-[#0C2436]"></div>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2 text-2xl text-slate-800">
                    Look like you're lost
                  </h3>

                  <p className="text-lg text-slate-800">
                    the page you are looking for not avaible!
                  </p>

                  <div className=" flex justify-center my-5">
                    <BlueButton text={"Return To Home"} link="/"></BlueButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;

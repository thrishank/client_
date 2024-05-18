"use client";
import React, { useEffect, useState } from "react";

function Form() {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  // const [ip, setIp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch client's IP address using ipify API
      const response = await fetch("https://api64.ipify.org?format=json");
      const data = await response.json();
      const ip = data.ip;

      const formData = {
        name,
        email,
        company,
        phone,
        whatsapp,
        budget,
        message,
        ip,
      };

      await fetch(`${NEXT_PUBLIC_BACKEND_URL}/submit-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      // alert("Form submitted successfully");
      window.location.href = "/thank-you";
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div>
      <div className=" relative ">
        <form
          onSubmit={handleSubmit}
          class=" bg-white shadow-xl rounded-[28px] px-8 pt-6 pb-8 mb-4 relative z-10 "
        >
          <div className=" flex gap-4 items-center my-3 ">
            <h2 className=" text-[30px] font-bold">Contact with us</h2>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M25.6627 12.5892C25.6988 8.35952 22.0964 4.48207 17.6324 3.94589C17.5436 3.93536 17.4469 3.91934 17.3445 3.90238C17.1235 3.86576 16.895 3.82812 16.6644 3.82812C15.7495 3.82812 15.5049 4.4708 15.4406 4.85409C15.378 5.22676 15.4377 5.53971 15.6178 5.78465C15.9208 6.19663 16.4539 6.26977 16.8821 6.32837C17.0076 6.3457 17.126 6.36182 17.2251 6.38409C21.2358 7.28027 22.5863 8.68924 23.2463 12.6658C23.2624 12.763 23.2696 12.8827 23.2774 13.0097C23.3062 13.4851 23.3662 14.474 24.4294 14.474H24.4295C24.518 14.474 24.6131 14.4664 24.7122 14.4513C25.7022 14.3008 25.6712 13.3968 25.6563 12.9625C25.6521 12.8401 25.6481 12.7244 25.6585 12.6475C25.6613 12.6281 25.6627 12.6086 25.6627 12.5892Z"
                  fill="#FF5948"
                />
                <path
                  d="M16.4047 2.39329C16.5235 2.40186 16.6359 2.41006 16.7296 2.42441C23.3155 3.43724 26.3443 6.55761 27.1836 13.1951C27.1979 13.3079 27.2001 13.4455 27.2024 13.5912C27.2108 14.1098 27.2281 15.1886 28.3866 15.2109L28.4226 15.2113C28.7859 15.2113 29.0749 15.1017 29.2817 14.8854C29.6423 14.5082 29.6172 13.9478 29.5969 13.4974C29.5919 13.3869 29.5872 13.2828 29.5884 13.1917C29.6721 6.40332 23.796 0.24764 17.0137 0.0187267C16.9856 0.017795 16.9587 0.0192857 16.9316 0.0231056C16.9183 0.0250621 16.8936 0.0274845 16.8513 0.0274845C16.7837 0.0274845 16.7005 0.0216149 16.6123 0.0156522C16.5056 0.00838509 16.3846 0 16.262 0C15.1819 0 14.9766 0.767702 14.9503 1.22534C14.8898 2.28298 15.9129 2.35742 16.4047 2.39329Z"
                  fill="#FF5948"
                />
                <path
                  d="M26.8658 21.7737C26.7258 21.6667 26.581 21.556 26.4455 21.4469C25.7264 20.8682 24.9614 20.3348 24.2216 19.8189C24.068 19.712 23.9145 19.6049 23.7615 19.4976C22.8138 18.8319 21.9618 18.5084 21.1568 18.5084C20.0726 18.5084 19.1273 19.1075 18.3471 20.2888C18.0015 20.8125 17.5821 21.0671 17.0653 21.0671C16.7598 21.0671 16.4125 20.9799 16.0334 20.8078C12.9744 19.4206 10.7901 17.2938 9.54103 14.4864C8.93721 13.1295 9.13295 12.2425 10.1956 11.5207C10.7991 11.1111 11.9223 10.3486 11.8427 8.8885C11.7526 7.2304 8.09413 2.24136 6.55268 1.67471C5.90004 1.43471 5.21432 1.43248 4.5109 1.66912C2.73886 2.26484 1.46721 3.31102 0.83311 4.69437C0.220346 6.03105 0.248017 7.60055 0.913141 9.23322C2.83594 13.9537 5.53929 18.0692 8.94839 21.4655C12.2853 24.7901 16.3866 27.5134 21.1384 29.5594C21.5666 29.7437 22.0159 29.8442 22.3439 29.9176C22.4557 29.9427 22.5523 29.9642 22.6226 29.9834C22.6613 29.994 22.7012 29.9997 22.7411 30L22.7787 30.0002C22.7787 30.0002 22.7787 30.0002 22.7789 30.0002C25.0138 30.0002 27.6973 27.958 28.5214 25.6297C29.2435 23.591 27.9252 22.5833 26.8658 21.7737Z"
                  fill="#FF5948"
                />
                <path
                  d="M17.3931 7.78548C17.0105 7.79517 16.2142 7.81492 15.9348 8.62595C15.804 9.00495 15.8197 9.33402 15.9813 9.60402C16.2185 10.0002 16.673 10.1216 17.0864 10.1882C18.5856 10.4287 19.3555 11.2577 19.5095 12.7969C19.5811 13.5146 20.0643 14.0157 20.6848 14.0157C20.7307 14.0157 20.7776 14.013 20.8243 14.0073C21.5706 13.9185 21.9323 13.3702 21.8996 12.3778C21.9116 11.3421 21.3695 10.1662 20.4476 9.22958C19.5225 8.29008 18.4074 7.76098 17.3931 7.78548Z"
                  fill="#FF5948"
                />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-5 left-0  w-full -z-10  ">
            <img src="/ellipse3.png" alt="" />
          </div>
          <div className="absolute bottom-5 right-0  w-full -z-10  ">
            <img src="/ellipse4.png" className=" w-full" alt="" />
          </div>
          <div class="flex flex-wrap -mx-3 mb-6 relative z-10">
            <div class="w-full md:w-1/2 px-3 my-4 md:my-0">
              <label
                class="block uppercase tracking-wide text-[#797979] text-xs font-bold mb-2"
                for="name"
              >
                Name *
              </label>
              <input
                class="appearance-none block w-full bg-white shadow-lg text-[#797979] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-[#797979] text-xs font-bold mb-2"
                for="email"
              >
                Email *
              </label>
              <input
                class="appearance-none block w-full bg-white shadow-lg text-[#797979] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 md:mb-6  relative z-10 ">
            <div class="w-full md:w-1/2 px-3  md:my-0">
              <label
                class="block uppercase tracking-wide text-[#797979] text-xs font-bold mb-2"
                for="name"
              >
                Company Name *
              </label>
              <input
                class="appearance-none block w-full bg-white shadow-lg text-[#797979] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="company"
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div class="w-full md:w-1/2 px-3  my-4 md:my-0">
              <label
                class="block uppercase tracking-wide text-[#797979] text-xs font-bold mb-2"
                for="company"
              >
                Phone *
              </label>
              <input
                class="appearance-none block w-full bg-white shadow-lg text-[#797979] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 md:mb-6  relative z-10">
            <div class="w-full md:w-1/2 px-3 ">
              <label
                class="block uppercase tracking-wide text-[#797979] text-xs font-bold mb-2"
                for="whatsapp"
              >
                WhatsApp
              </label>
              <input
                class="appearance-none block w-full bg-white shadow-lg text-[#797979] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="whasapp"
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </div>
            <div class="w-full md:w-1/2 px-3  my-4 md:my-0">
              <label
                class="block uppercase tracking-wide text-[#797979] text-xs font-bold mb-2"
                for="budget"
              >
                Budget
              </label>
              <input
                class="appearance-none block w-full bg-white shadow-lg text-[#797979] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="budget"
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6  relative z-10">
            <div class="w-full  px-3  ">
              <label
                class="block uppercase tracking-wide text-[#797979] text-xs font-bold mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                name="message"
                className="appearance-none block w-full bg-white shadow-lg text-[#797979] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                cols="30"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div
            style={{ cursor: "pointer" }}
            className=" flex items-center justify-center cursor-pointer z-40	"
          >
            <button
              type="submit"
              className=" flex gap-3 bg-[#FF5948]  shadow-md text-white text-base md:text-lg font-semibold  rounded-full px-12 py-3 flex justify-center items-center hover:bg-[#0085F2] hover:text-white transition-all duration-200 hover:scale-95 hover:font-normal "
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;

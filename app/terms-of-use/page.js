import OtherHome from "@/components/OtherHome";
import Script from "next/script";
import React from "react";

function page() {
  return (
    <div>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4JEVQXM0B7"
      ></Script>
      <Script>
        {`
      window.dataLayer = window.dataLayer || []; function gtag()
      {dataLayer.push(arguments)}
      gtag('js', new Date()); gtag('config', 'G-4JEVQXM0B7');`}
      </Script>
      <OtherHome titile={"Terms of Use"} dimg={"/terms.png"}></OtherHome>
      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 py-10 ">
        <div className=" ">
          <div className=" md:col-span-8 md:pl-10 md:ml-10">
            <p className=" text-[24px]  ">
              Welcome to the mobile app development company! By using our
              services, you agree to comply with and be bound by the following
              terms and conditions of use, which together with our privacy
              policy govern our relationship with you in relation to this
              website and our services.
            </p>
          </div>
        </div>

        <div className=" my-20">
          <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
            1. Definitions
          </h2>
          <p className=" text-[20px] my-6">
            - " Mobile app development company " refers to our company and its
            services. <br />
            - "Services” refers to the mobile app development related services
            we offer, including but not limited to app design, development, and
            maintenance. <br />- "Client" refers to any person or entity who
            uses our services. <br />
            <br /> <br />
          </p>
          <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
            2. Use of Services
          </h2>
          <p className=" text-[20px] my-6">
            - Our services are provided for the sole purpose of creating mobile
            app for android and iOS devices. <br />
            - You agree to provide accurate and complete information when using
            our services. <br />
            - We reserve the right to refuse service to anyone for any reason at
            any time. <br />
            <br /> <br />
          </p>
          <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
            3. Disclaimer of Warranties
          </h2>
          <p className=" text-[20px] my-6">
            - Our Site and Services are provided “as is” and without warranty of
            any kind. <br />- We make no warranty, express or implied, regarding
            our Site or Services, including but not limited to the implied
            warranties of merchantability and fitness for a particular purpose.
          </p>
          <br /> <br />
          <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
            4. Payment and Fees
          </h2>
          <p className=" text-[20px] my-6">
            - Payment for our services is due in full before work begins.
            <br />
            - Fees for our services may vary depending on the scope of work
            required.
            <br />
            - We reserve the right to change our fees at any time, with or
            without notice.
            <br />- Payment once made is refundable under certain terms and
            conditions only mentioned in proposal or SLA shared with the client
            before the work begin.
          </p>
          <br /> <br />
          <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
            5. Intellectual Property
          </h2>
          <p className=" text-[20px] my-6">
            - All content, logos, and designs used in connection with our
            services are the property of our company and protected by copyright
            and trademark laws.
            <br />- You may not use any of our intellectual property without our
            prior written consent.
          </p>
          <br /> <br />
          <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
            6. Confidentiality
          </h2>
          <p className=" text-[20px] my-6">
            - We will keep any information you provide to us confidential and
            will not share it with any third party unless required by law.
            <br />- We may use anonymous data collected during our services for
            our internal purposes, including improving our services and
            analytics.
          </p>
          <br /> <br />
          <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
            7. Limitation of Liability
          </h2>
          <p className=" text-[20px] my-6">
            - We are not responsible for any damages resulting from the use of
            our services.
            <br />- Our liability is limited to the amount you have paid for our
            services.
          </p>
          <br /> <br />
          <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
            8. Governing Law
          </h2>
          <p className=" text-[20px] my-6">
            - These terms and conditions are governed by the laws of
            [Gujarat/India] and any disputes will be resolved in accordance with
            those laws.
          </p>
          <br /> <br />
          <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
            9. Changes to Terms and Conditions
          </h2>
          <p className=" text-[20px] my-6">
            - We reserve the right to change these terms and conditions at any
            time, with or without notice.
            <br />- Your continued use of our services after any changes to
            these terms and conditions will be deemed acceptance of those
            changes.
          </p>
          <p className=" text-[20px] my-6">
            If you have any questions about these terms and conditions, please
            contact us at{" "}
            <a
              href="mailto:sales@overninja.com"
              className=" text-blue-500 font-semibold"
            >
              {" "}
              sales@overninja.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;

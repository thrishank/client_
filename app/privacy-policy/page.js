import OtherHome from "@/components/OtherHome";
import Script from "next/script";
import React from "react";

function page() {
  return (
    <>
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
      <div>
        <OtherHome titile={"Privacy Policy"} dimg={"/privacy.png"}></OtherHome>
        <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 py-10 ">
          <div className=" ">
            <div className=" md:col-span-8 md:pl-10 md:ml-10">
              <p className=" text-[24px]  ">
                Overninja is committed to protecting the privacy and security of
                your personal information. This Privacy Policy explains how we
                collect, use, and protect your personal information when you use
                our website or services.
              </p>
            </div>
          </div>

          <div className=" my-20">
            <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
              Information We Collect
            </h2>
            <p className=" text-[20px] my-6">
              We collect personal information when you voluntarily provide it to
              us, such as when you fill out a contact form, subscribe to our
              newsletter, or make a purchase. The personal information we
              collect may include your name, email address, phone number,
              billing address, and payment information.
              <br /> <br />
              We also collect non-personal information, such as your IP address,
              browser type, and operating system, to help us better understand
              how our website is being used and to improve our services.
              <br /> <br />
            </p>
            <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
              Information We Collect
            </h2>
            <p className=" text-[20px] my-6">
              We use your personal information to provide you with the products
              and services you have requested, such as processing your orders,
              responding to your inquiries, and sending you marketing
              communications.
              <br /> <br />
              We may also use your personal information for our legitimate
              business interests, such as to improve our products and services,
              prevent fraud and abuse, and comply with legal requirements.
              <br /> <br />
              We do not sell or rent your personal information to third parties.
              <br /> <br />
            </p>
            <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
              Data Retention
            </h2>
            <p className=" text-[20px] my-6">
              We will retain your personal information for as long as necessary
              to fulfill the purposes for which it was collected, or as required
              by law.
            </p>
            <br /> <br />
            <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
              Security
            </h2>
            <p className=" text-[20px] my-6">
              We take reasonable measures to protect your personal information
              from unauthorized access, use, or disclosure. However, no data
              transmission over the internet or storage system can be guaranteed
              to be 100% secure. If you have reason to believe that your
              interaction with us is no longer secure, please immediately notify
              us.
            </p>
            <br /> <br />
            <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
              Cookies
            </h2>
            <p className=" text-[20px] my-6">
              We use cookies and similar technologies to improve the
              functionality of our website and personalize your experience. You
              can disable cookies in your browser settings, but this may limit
              your ability to use certain features of our website.
            </p>
            <br /> <br />
            <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
              Third-Party Links
            </h2>
            <p className=" text-[20px] my-6">
              Our website may contain links to third-party websites that are not
              operated by us. We are not responsible for the privacy practices
              or content of these third-party sites.
            </p>
            <br /> <br />
            <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
              Children's Privacy
            </h2>
            <p className=" text-[20px] my-6">
              Our website and services are not directed to children under the
              age of 13. We do not knowingly collect or store personal
              information from children under the age of 13.
            </p>
            <br /> <br />
            <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
              Updates to this Privacy Policy
            </h2>
            <p className=" text-[20px] my-6">
              We reserve the right to update this Privacy Policy at any time. We
              will post any changes to this page and update the effective date.
            </p>
            <br /> <br />
            <h2 className=" text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
              Contact us
            </h2>
            <p className=" text-[20px] my-6">
              If you have any questions or concerns about our Privacy Policy,
              please contact us at{" "}
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
    </>
  );
}

export default page;

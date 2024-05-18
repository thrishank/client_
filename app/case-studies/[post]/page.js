import Script from "next/script";
import CaseComp from "../_component/CaseComp";

let postData = null; // Global variable to store post data
let metadata = {}; // Global variable to store metadata

async function getPost(post) {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const response = await fetch(
    `${NEXT_PUBLIC_BACKEND_URL}/case-studies-find/${post}`,
    { next: { revalidate: 600 } }
  );
  const data = await response.json();
  return data; // Return the data
}

async function updateMetadata() {
  metadata = {
    title: postData?.title || "",
    description: postData?.summary || "",
  };
}

async function page({ params }) {
  postData = await getPost(params.post); // Save data to global variable
  await updateMetadata(); // Update metadata
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
      <CaseComp postDetail={postData}></CaseComp>
    </>
  ); // Render post data
}

export default page;

export { metadata };

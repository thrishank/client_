export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Our Commitment to Protecting Your Data & Information",
  description:
    "Learn how we safeguard your privacy at Overninja. Our privacy policy is designed to ensure your data is secure and your online experience is worry-free.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/privacy-policy`,
  },
};

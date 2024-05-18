export const metadata = {
  title: "Mobile App Case Studies | Success Stories & Solutions",
  description:
    "Explore our mobile app case studies to discover success stories. Learn how we've helped businesses achieve their goals through innovative app development.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/case-studies`,
  },
};

export default function Layout({ children }) {
  return <section>{children}</section>;
}

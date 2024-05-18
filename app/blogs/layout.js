export const metadata = {
  title: "Insights, Trends, and Tips for App Development",
  description:
    "From design principles to latest technologies, stay updated with our mobile app blogs, featuring insights, trends, and tips for app development.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/blogs`,
  },
};

export default function Layout({ children }) {
  return <section>{children}</section>;
}

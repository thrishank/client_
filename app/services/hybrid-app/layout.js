export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Expert Hybrid App Development Company | Cross-Platform Apps",
  description:
    "From design to deployment, we are an expert hybrid app development company specializing in cross-platform solutions.",

  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/hybrid-app`,
  },
};

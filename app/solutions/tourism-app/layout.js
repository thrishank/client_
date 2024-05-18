export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Leading Tourism App Development Company",
  description:
    "We are a leading tourism app development company, specializing in custom solutions for travel agencies, tour operators, and destinations.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/solutions/tourism-app`,
  },
};

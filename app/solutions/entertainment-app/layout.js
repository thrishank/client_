export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Top Entertainment App Development Company",
  description:
    "We are a top entertainment app development company, specializing in custom solutions for entertainment industry businesses.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/solutions/entertainment-app`,
  },
};

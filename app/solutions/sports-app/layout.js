export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Expert Sports App Development Company",
  description:
    "We are an expert sports app development company, crafting customized solutions for sports organizations and enthusiasts.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/solutions/sports-app`,
  },
};

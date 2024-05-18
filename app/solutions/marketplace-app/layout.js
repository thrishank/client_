export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Trusted Marketplace App Development Company",
  description:
    "We are a trusted marketplace app development company, offering custom solutions for businesses looking to create online marketplaces.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/solutions/marketplace-app`,
  },
};

export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Trusted Logistics App Development Company",
  description:
    "We are a trusted logistics app development company, providing custom solutions for transportation companies, warehouses, and supply chain management.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/solutions/logistics-app`,
  },
};

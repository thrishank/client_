export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Leading Ecommerce App Development Company",
  description:
    "We are a leading ecommerce app development company, we create high-performance apps for seamless shopping experiences on iOS and Android.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/solutions/ecommerce-app`,
  },
};

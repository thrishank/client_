export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Food Delivery App Development Company | Custom Solutions",
  description:
    "We are a top food delivery app development company. From order management to delivery tracking, our apps are designed to enhance customer experience.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/solutions/food-app`,
  },
};

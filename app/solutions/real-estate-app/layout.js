export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Premier Real Estate App Development Company",
  description:
    "We are a premier real estate app development company, offering custom solutions for agents, brokers, and property management firms.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/solutions/real-estate-app`,
  },
};

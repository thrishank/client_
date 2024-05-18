export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Premier Dating App Development Company",
  description:
    "We are a premier dating app development company, offering custom solutions for dating platforms and matchmaking services.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/solutions/dating-app`,
  },
};

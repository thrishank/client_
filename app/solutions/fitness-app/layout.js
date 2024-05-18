export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Expert Fitness App Development Company",
  description:
    "We are an expert fitness app development company, creating customized solutions for fitness professionals and enthusiasts.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/solutions/fitness-app`,
  },
};

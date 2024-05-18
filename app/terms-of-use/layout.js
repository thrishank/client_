export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Understanding Our Terms of Use",
  description:
    "Explore the terms of use that govern your interaction with Overninja. We're committed to providing a clear and fair online experience.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/term-of-use`,
  },
};

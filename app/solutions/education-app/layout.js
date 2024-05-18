export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Leading Education App Development Company",
  description:
    "We are a leading education app development company, providing innovative solutions for schools, universities, and e-learning platforms.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/solutions/education-app`,
  },
};

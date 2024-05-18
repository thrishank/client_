export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Expert Healthcare App Development Company",
  description:
    "We are an expert healthcare app development company, specializing in custom solutions for hospitals, clinics, and healthcare providers.",

  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/solutions/health-care-app`,
  },
};

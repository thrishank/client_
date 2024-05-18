export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Mobile App Solutions | Customized iOS & Android Apps",
  description:
    "Discover innovative mobile app solutions. Our expert team delivers customized Android, iOS & Hybrid apps to help you reach your business goals.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/solutions`,
  },
};

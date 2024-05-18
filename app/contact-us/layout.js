export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Contact Us for Mobile App Development",
  description:
    "Have a mobile app idea? Contact us today to discuss your project! Our expert team is ready to help turn your concept into a reality. ",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/contact-us`,
  },
};

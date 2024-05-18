export default function Layout({ children }) {
  return <section>{children}</section>;
}

export const metadata = {
  title: "Expert React Native App Development Company",
  description:
    "We are an expert React Native app development company specializing in cross-platform solutions. We create high-quality mobile apps for iOS and Android.",
  metadataBase: new URL("https://www.overninja.com"),
  alternates: {
    canonical: `/react-native-app`,
  },
};

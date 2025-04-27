import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://my-next-project-bay.vercel.app/"),
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description: "シンプルなコーポレートサイトです。",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description: "シンプルなコーポレートサイトです。",
    images: ["/opg.png"],
  },
  alternates: {
    canonical: "https://my-next-project-bay.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yılmaztürk Hukuk Bürosu - Av. Ali Can Yılmaztürk",
  description: "Yılmaztürk Hukuk Bürosu - Av. Ali Can Yılmaztürk. Hukuk danışmanlığı, yasal bilgiler ve güncel hukuk yazıları.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="light">
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


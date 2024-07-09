import Header from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Roomantics | Transform Your Space with Expert Interior Design",
  description:
    "Transform your living space with Roomantics, your premier interior design agency. We specialize in creating stylish, functional, and personalized interiors that reflect your unique taste. Discover the magic of design with Roomantics today!",
  keywords: [
    "interior design",
    "home decor",
    "room makeovers",
    "stylish interiors",
    "personalized design",
    "Roomantics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-barba="wrapper">
        {/* <div> */}
        <Header />
        {children}
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}

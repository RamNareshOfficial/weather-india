import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ram Naresh | Front End Developer",
  description:
    "Portfolio of Ram Naresh, a Front End Developer building scalable web experiences with Next.js, React, MongoDB, Node.js, and modern web technologies.",
  keywords: [
    "Ram Naresh",
    "Front End Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
  ],
  authors: [{ name: "Ram Naresh" }],
  creator: "Ram Naresh",
  openGraph: {
    title: "Ram Naresh | Front End Developer",
    description:
      "Scalable Front End web experiences with Next.js, React, and modern technologies.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thư Mời Dự Tiệc Cưới",
  description:
    "Join us as we celebrate our love and commitment. Explore our wedding details, gallery, and RSVP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        {/* Preload Nunito Variable Font */}
        <link
          rel="preload"
          href="/font/nunito/Nunito-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* Preload Dancing Script Fonts */}
        <link
          rel="preload"
          href="/font/dancing/DancingScript-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/font/dancing/DancingScript-Medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/font/dancing/DancingScript-SemiBold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/font/dancing/DancingScript-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* Preload Icomoon Icon Font */}
        <link
          rel="preload"
          href="/font/icomoon/icomoon.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

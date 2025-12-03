import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { lazy } from "react";
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
  title: "Thư Mời Dự Tiệc Cưới - Hải Đăng & Bích Phượng",
  description:
    "Trân trọng kính mời bạn đến dự lễ thành hôn của Hải Đăng và Bích Phượng vào ngày 27 tháng 12 năm 2025.",
  keywords: ["đám cưới", "wedding", "Hải Đăng", "Bích Phượng", "thiệp cưới"],
  authors: [{ name: "Hải Đăng & Bích Phượng" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Thư Mời Dự Tiệc Cưới - Hải Đăng & Bích Phượng",
    description:
      "Trân trọng kính mời bạn đến dự lễ thành hôn của Hải Đăng và Bích Phượng vào ngày 27 tháng 12 năm 2025.",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thư Mời Dự Tiệc Cưới - Hải Đăng & Bích Phượng",
    description:
      "Trân trọng kính mời bạn đến dự lễ thành hôn của Hải Đăng và Bích Phượng vào ngày 27 tháng 12 năm 2025.",
  },
};

const Footer = lazy(() => import("@/components/Footer").then((mod) => ({ default: mod.Footer })));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        {/* Preload critical fonts only - fonts used in hero/above-the-fold */}
        <link
          rel="preconnect"
          href="/font/nunito/Nunito-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* Only preload SemiBold - most used weight in hero */}
        <link
          rel="preconnect"
          href="/font/dancing/DancingScript-SemiBold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* Preconnect for icomoon - non-blocking */}
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
        {/* Skip to main content link for keyboard/screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#a10129] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          Bỏ qua đến nội dung chính
        </a>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

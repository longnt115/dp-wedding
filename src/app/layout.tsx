import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { lazy, Suspense } from "react";
import "./globals.scss";

// Viewport configuration (Next.js 14+ recommends separate export)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#840d0c",
};

// Nunito - Variable Font for body text (critical)
const nunito = localFont({
  src: "../../public/font/nunito/Nunito-VariableFont_wght.ttf",
  variable: "--font-nunito",
  display: "swap",
  preload: true,
});

// Dancing Script - for headings (critical for hero)
const dancingScript = localFont({
  src: [
    {
      path: "../../public/font/dancing/DancingScript-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/dancing/DancingScript-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/dancing/DancingScript-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/dancing/DancingScript-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dancing",
  display: "swap",
  preload: true,
});

// Icomoon icon font - optimized with next/font/local
const icomoon = localFont({
  src: "../../public/font/icomoon/icomoon.woff",
  variable: "--font-icomoon",
  display: "swap",
  preload: false, // Not critical for initial render
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haidang-bichphuong.wedding"),
  title: {
    default: "Thư Mời Dự Tiệc Cưới - Hải Đăng & Bích Phượng",
    template: "%s | Hải Đăng & Bích Phượng",
  },
  description:
    "Trân trọng kính mời bạn đến dự lễ thành hôn của Hải Đăng và Bích Phượng vào ngày 27 tháng 12 năm 2025 tại Trung Tâm Tiệc Cưới Promes Center, Hà Nội.",
  keywords: [
    "đám cưới",
    "wedding",
    "Hải Đăng",
    "Bích Phượng",
    "thiệp cưới",
    "wedding invitation",
    "lễ cưới",
    "Promes Center",
  ],
  authors: [{ name: "Hải Đăng & Bích Phượng" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Thư Mời Dự Tiệc Cưới - Hải Đăng & Bích Phượng",
    description:
      "Trân trọng kính mời bạn đến dự lễ thành hôn của Hải Đăng và Bích Phượng vào ngày 27 tháng 12 năm 2025 tại Trung Tâm Tiệc Cưới Promes Center, Hà Nội.",
    type: "website",
    locale: "vi_VN",
    siteName: "Thiệp Cưới Hải Đăng & Bích Phượng",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thư Mời Dự Tiệc Cưới - Hải Đăng & Bích Phượng",
    description:
      "Trân trọng kính mời bạn đến dự lễ thành hôn của Hải Đăng và Bích Phượng vào ngày 27 tháng 12 năm 2025 tại Trung Tâm Tiệc Cưới Promes Center, Hà Nội.",
  },
  other: {
    "theme-color": "#840d0c",
  },
};

const Footer = lazy(() =>
  import("@/components/Footer").then((mod) => ({ default: mod.Footer }))
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        {/* Fonts are now managed by next/font/local - no manual preloads needed */}
      </head>
      <body
        className={`${nunito.variable} ${dancingScript.variable} ${icomoon.variable} antialiased bg-white text-gray-900`}
      >
        {/* Skip to main content link for keyboard/screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-wedding-primary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          Bỏ qua đến nội dung chính
        </a>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Suspense>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}

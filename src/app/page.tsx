"use client";

import Banner from "@/components/Banner";
import { GroomBride } from "@/components/GroomBride";
import { WeddingInfor } from "@/components/WeddingInfor";
import { lazy, Suspense } from "react";

export default function Home() {
  const GalleryImage = lazy(() =>
    import("@/components/GalleryImage").then((module) => ({
      default: module.GalleryImage,
    }))
  );

  const Footer = lazy(() =>
    import("@/components/Footer").then((module) => ({
      default: module.Footer,
    }))
  );

  const EventPlace = lazy(() =>
    import("@/components/EventPlace").then((module) => ({
      default: module.EventPlace,
    }))
  );

  return (
    <main className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
        <GroomBride />
        <WeddingInfor />
        <EventPlace />
        <GalleryImage />
        <Footer />
      </Suspense>
    </main>
  );
}

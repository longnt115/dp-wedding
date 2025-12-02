"use client";

import { BackgroundMusic } from "@/components/BackgoundMusic";
import Banner from "@/components/Banner";
import { Loader } from "@/components/common/Loader";
import { EventPlace } from "@/components/EventPlace";
import { GroomBride } from "@/components/GroomBride";
import { WeddingInfor } from "@/components/WeddingInfor";
import { lazy, Suspense } from "react";

export default function Home() {
  const GalleryImage = lazy(() =>
    import("@/components/GalleryImage").then((module) => ({
      default: module.GalleryImage,
    }))
  );

  const HeartRain = lazy(() =>
    import("@/components/common/HeartRain").then((module) => ({
      default: module.default,
    }))
  );

  return (
    <main className="min-h-screen">
      <Suspense fallback={<Loader/>}>
        <Banner />
        <GroomBride />
        <WeddingInfor />
        <EventPlace />
        <GalleryImage />
        <BackgroundMusic />
        <HeartRain />
      </Suspense>
    </main>
  );
}

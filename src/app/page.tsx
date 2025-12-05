"use client";

import Banner from "@/components/Banner";
import { Loader } from "@/components/common/Loader";
import { EventPlace } from "@/components/EventPlace";
import { Greeting } from "@/components/Greeting";
import { GroomBride } from "@/components/GroomBride";
import GalleryLoader from "@/components/skeleton/GalleryLoader";
import { WeddingInfor } from "@/components/WeddingInfor";
import { lazy, Suspense } from "react";

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

const BackgroundMusic = lazy(() =>
  import("@/components/BackgoundMusic").then((module) => ({
    default: module.BackgroundMusic,
  }))
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<Loader />}>
        <Banner />
        <Greeting />
        <GroomBride />
        <WeddingInfor />
        <EventPlace />
      </Suspense>
      <Suspense fallback={<GalleryLoader />}>
        <GalleryImage />
      </Suspense>
      <Suspense fallback={null}>
        <BackgroundMusic />
        <HeartRain />
      </Suspense>
    </main>
  );
}

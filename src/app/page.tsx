"use client";

import Banner from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { GalleryImage } from "@/components/GalleryImage";
import { GroomBride } from "@/components/GroomBride";
import { WeddingInfor } from "@/components/WeddingInfor";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
      </Suspense>
      <GroomBride />
      <WeddingInfor />
      {/* <Countdown /> */}
      <GalleryImage />
      <Footer />
    </main>
  );
}

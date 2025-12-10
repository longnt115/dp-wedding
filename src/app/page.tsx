import Banner from "@/components/Banner";
import { EventPlace } from "@/components/EventPlace";
import { LoadingDoor } from "@/components/LoadingDoor";
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

const Greeting = lazy(() =>
  import("@/components/Greeting").then((mod) => ({ default: mod.Greeting }))
);
const GroomBride = lazy(() =>
  import("@/components/GroomBride").then((mod) => ({ default: mod.GroomBride }))
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingDoor />
      <Suspense fallback={null}>
        <Banner />
        <Greeting />
        <GroomBride />
      </Suspense>
      <Suspense fallback={null}>
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

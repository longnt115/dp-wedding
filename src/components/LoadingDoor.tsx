"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function LoadingDoor() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Tự động mở cửa sau 500ms
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <section
          id="loading-section"
          className="fixed inset-0 flex z-50 pointer-events-none"
        >
          {/* Cửa trái - trượt sang trái */}
          <motion.div
            id="left-door"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 2,
              ease: [0.645, 0.045, 0.355, 1], // easeInOutCubic
            }}
            className="bg-wedding-accent w-[50vw] h-[100vh] relative overflow-visible z-10 will-change-transform"
          >
            <Image
              src="/assets/images/hy_text.webp"
              alt="Wedding Image"
              height={320}
              width={320}
              priority
              placeholder="empty"
              className="bg-white rounded-full animate-pulse absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-20 
                w-[160px] h-[160px] 
                min-[400px]:w-[200px] min-[400px]:h-[200px]
                sm:w-[240px] sm:h-[240px] 
                md:w-[280px] md:h-[280px] 
                lg:w-[320px] lg:h-[320px]
                xl:w-[360px] xl:h-[360px]"
            />
          </motion.div>
          {/* Cửa phải - trượt sang phải */}
          <motion.div
            id="right-door"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 2,
              ease: [0.645, 0.045, 0.355, 1], // easeInOutCubic
            }}
            className="bg-wedding-accent w-[50vw] h-[100vh] will-change-transform"
          />
        </section>
      )}
    </AnimatePresence>
  );
}

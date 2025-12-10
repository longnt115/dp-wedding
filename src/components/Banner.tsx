"use client";

import { motion, type Transition } from "framer-motion";
import Image from "next/image";

// Animation variants để tránh re-create objects mỗi render
const fadeInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const fadeInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const fadeInUp = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const scaleIn = {
  initial: { scaleX: 0, opacity: 0 },
  animate: { scaleX: 1, opacity: 1 },
};

// Transition configs - giảm delays để cải thiện perceived performance
const transitionBase: Transition = { duration: 0.8, ease: "easeOut" };
const ANIMATION_START_DELAY = 1.5; // Giảm từ 2s xuống 1.5s

export default function Banner() {
  return (
    <header
      id="fh5co-header"
      className="fh5co-cover relative"
      role="banner"
      aria-label="Thiệp cưới Hải Đăng và Bích Phượng"
    >
      <Image
        src="/assets/images/TVL_6408.webp"
        alt="Hải Đăng và Bích Phượng"
        fill
        priority
        fetchPriority="high"
        className="object-cover object-bottom -z-10"
        sizes="100vw"
      />
      <div className="overlay" aria-hidden="true"></div>
      <div className="container relative z-3">
        <div className="row">
          <div className="col-base-12 col-md-10 col-md-offset-1 text-center">
            <div className="display-t nunito-semibold">
              <div className="display-tc">
                {/* Thay styled-jsx bằng Tailwind: flex-col trên mobile, flex-row từ 321px */}
                <h1 className="flex flex-col items-center min-[321px]:flex-row min-[321px]:flex-wrap min-[321px]:justify-center min-[321px]:leading-tight leading-none mt-[25vh] xs:mt-[30vh] md:mt-[33vh] xl:mt-[35vh] text-5xl sm:text-6xl md:text-7xl lg:text-7xl tracking-wide">
                  <motion.span
                    variants={fadeInLeft}
                    initial="initial"
                    animate="animate"
                    transition={{
                      ...transitionBase,
                      delay: ANIMATION_START_DELAY,
                    }}
                    className="inline-block will-change-transform"
                  >
                    Hải Đăng
                  </motion.span>
                  <motion.span
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{
                      ...transitionBase,
                      duration: 0.5,
                      delay: ANIMATION_START_DELAY + 0.15,
                    }}
                    className="inline-block mx-2 text-2xl md:text-unset will-change-transform"
                    aria-hidden="true"
                  >
                    &amp;
                  </motion.span>
                  <motion.span
                    variants={fadeInRight}
                    initial="initial"
                    animate="animate"
                    transition={{
                      ...transitionBase,
                      delay: ANIMATION_START_DELAY,
                    }}
                    className="inline-block will-change-transform"
                  >
                    Bích Phượng
                  </motion.span>
                </h1>
                <motion.span
                  variants={scaleIn}
                  initial="initial"
                  animate="animate"
                  transition={{
                    ...transitionBase,
                    duration: 0.6,
                    delay: ANIMATION_START_DELAY + 0.3,
                  }}
                  className="h-[2px] w-16 md:w-24 bg-white/90 block mt-2 mb-2 md:mb-4 mx-auto will-change-transform"
                  aria-hidden="true"
                />
                <p
                  className="nunito-regular text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide"
                  role="doc-subtitle"
                >
                  <motion.time
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{
                      ...transitionBase,
                      duration: 0.5,
                      delay: ANIMATION_START_DELAY + 0.5,
                    }}
                    dateTime="2025-12-27"
                    className="inline-block will-change-transform"
                  >
                    Thứ bảy, 27 Tháng 12 Năm 2025
                  </motion.time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

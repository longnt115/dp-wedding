"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Banner() {
  return (
    <header
      id="fh5co-header"
      className="fh5co-cover relative"
      role="banner"
      aria-label="Thiệp cưới Hải Đăng và Bích Phượng"
      data-stellar-background-ratio="0.5"
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
      <div className="container relative z-10">
        <div className="row">
          <div className="col-base-12 col-md-10 col-md-offset-1 text-center">
            <div className="display-t nunito-semibold">
              <div className="display-tc" data-animate-effect="fadeIn">
                <h1 className="banner-names mt-[22vh] xs:mt-[27vh] md:mt-[20vh] xl:mt-[50vh] text-5xl sm:text-6xl md:text-7xl lg:text-7xl leading-none tracking-wide">
                  <motion.span
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      duration: 1, 
                      ease: "easeOut",
                      delay: 0.3 
                    }}
                    className="inline-block"
                  >
                    Hải Đăng
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.7, 
                      ease: "easeOut",
                      delay: 0.5
                    }}
                    className="inline-block mx-2 text-2xl md:text-unset"
                    aria-hidden="true"
                  >
                    &amp;
                  </motion.span>
                  <motion.span
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      duration: 1, 
                      ease: "easeOut",
                      delay: 0.3 
                    }}
                    className="inline-block"
                  >
                    Bích Phượng
                  </motion.span>
                </h1>
                <span
                  className="h-[2px] w-16 sm:w-20 md:w-24 bg-white/90 block mt-2 mb-2 sm:mb-3 md:mb-4 mx-auto"
                  aria-hidden="true"
                ></span>
                <p
                  className="nunito-regular text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide"
                  role="doc-subtitle"
                >
                  <motion.time
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.7, 
                      ease: "easeOut",
                      delay: 0.5
                    }}
                    dateTime="2025-12-27"
                  >
                    Thứ bảy, 27 Tháng 12 Năm 2025
                  </motion.time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .banner-names {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1 !important;
        }
        
        @media (min-width: 321px) {
          .banner-names {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0;
            line-height: 1.25;
          }
        }
      `}</style>
    </header>
  );
}

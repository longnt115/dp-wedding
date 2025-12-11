"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Countdown from "./Countdown";

export const WeddingInfor = () => {
  return (
    <section
      id="fh5co-event"
      className="fh5co-bg relative"
      aria-labelledby="wedding-ceremony-heading"
    >
      <Image
        src="/assets/images/TVL_7046.webp"
        alt=""
        fill
        className="object-cover object-[bottom_0_right_-5.75rem] md:object-[bottom_right] -z-10"
        priority={false}
        aria-hidden="true"
      />
      <div className="overlay" aria-hidden="true"></div>
      <div className="container relative z-1">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2 text-center fh5co-heading mb-12 sm:mb-20">
            <h2 id="wedding-ceremony-heading" className="!mb-0">
              Lễ Thành Hôn
            </h2>
            <span
              className="h-[2px] w-16 md:w-24 bg-white block mx-auto"
              aria-hidden="true"
            ></span>
          </div>
        </div>
      </div>
      <div className="container relative z-1 flex flex-wrap">
        <div className="display-t">
          <div className="display-tc">
            <div className="row">
              <div className="col-xs-12 col-md-7 flex justify-center">
                <div className="col-md-offset-1 col-md-9 col-sm-9 text-center text-white">
                  <div className="event-wrap">
                    <h3 className="dancing-semibold text-xl sm:text-2xl">
                      Hải Đăng <span aria-hidden="true">&</span>
                      <span className="sr-only"> và </span> Bích Phượng
                    </h3>
                    <motion.div
                      className="text-center px-2 sm:px-4 my-3 sm:my-5 md:my-0 col-span-5 md:col-span-3 row-start-3 md:row-start-1 order-3 md:order-2"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-wedding-gray900 mb-2">
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl flex flex-col">
                          <span className="font-semibold">
                            <time dateTime="2025-12-27T11:00:00">
                              11h00{" "}
                              <span className="px-1" aria-hidden="true">
                                {" "}
                                |{" "}
                              </span>{" "}
                              Thứ bảy
                            </time>
                          </span>
                        </p>
                      </div>
                      <div
                        id="wedding-date"
                        className="text-white my-4 sm:my-5 md:my-4 pt-4 sm:pt-6 pb-3 sm:pb-4 md:py-8 grid grid-cols-[auto_auto_auto] justify-center items-center gap-0 relative"
                        aria-label="Ngày cưới: 27 tháng 12 năm 2025"
                      >
                        <div className="flex md:ml-8 ml-6 items-center justify-center my-3 md:my-0">
                          <span className="py-[0.5rem] pr-[1rem] sm:pr-[1.5rem] md:pr-[2rem] text-base sm:text-lg md:text-xl lg:text-3xl dancing-semibold text-right">
                            <span aria-label="Ngày">27</span>
                          </span>
                          <span className="py-[0.5rem] px-[1.5rem] sm:px-[2rem] md:px-[2.25rem] lg:px-[3rem] text-lg sm:text-xl md:text-2xl lg:text-4xl dancing-semibold border-solid border-x-1 sm:border-x-2 md:border-x-3 border-white">
                            <span aria-label="Tháng">12</span>
                          </span>
                          <span className="py-[0.5rem] pl-[1rem] sm:pl-[1.5rem] md:pl-[2rem] text-base sm:text-lg md:text-xl lg:text-3xl dancing-semibold text-left">
                            <span aria-label="Năm">2025</span>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                    <Countdown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

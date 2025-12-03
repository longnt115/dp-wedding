"use client";
export const dynamic = "force-dynamic";
import { preload } from "react-dom";

export default function Banner() {
  preload("/assets/images/TVL_6408.webp", {
    as: "image",
    fetchPriority: "high",
  });

  return (
    <header
      id="fh5co-header"
      className="fh5co-cover"
      role="banner"
      aria-label="Thiệp cưới Hải Đăng và Bích Phượng"
      style={{
        backgroundImage: "url(/assets/images/TVL_6408.webp)",
        backgroundPosition: "center bottom",
      }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay" aria-hidden="true"></div>
      <div className="container relative z-1">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 text-center">
            <div className="display-t nunito-semibold">
              <div className="display-tc" data-animate-effect="fadeIn">
                <h1 className="!mt-[25vh] sm:!text-[70px] md:!text-[75px] text-[100px]">
                  <span className="sr-only">Đám cưới của </span>
                  Hải Đăng <span aria-hidden="true">&amp;</span><span className="sr-only"> và </span> Bích Phượng
                </h1>
                <span 
                  className="h-[2px] w-20 md:w-25 bg-white block mb-2 md:mb-5 mx-auto"
                  aria-hidden="true"
                ></span>
                <p className="nunito-regular text-white text-xl md:text-2xl" role="doc-subtitle">
                  <time dateTime="2025-12-27">Thứ bảy 27 Tháng 12 Năm 2025</time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

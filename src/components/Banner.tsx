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
      style={{
        backgroundImage: "url(/assets/images/TVL_6408.webp)",
        backgroundPosition: "center bottom",
      }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container relative z-1">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 text-center">
            <div className="display-t nunito-semibold">
              <div className="display-tc" data-animate-effect="fadeIn">
                <h1 className="!mt-[25vh] sm:!text-[70px] md:!text-[75px] text-[100px]">
                  Hải Đăng &amp; Bích Phượng
                </h1>
                <span className="h-[2px] w-20 md:w-25 bg-white block mb-2 md:mb-5 mx-auto"></span>
                <h2 className="nunito-regular">Thứ bảy 27 Tháng 12 Năm 2025</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

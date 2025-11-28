"use client";
export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
export default function Banner() {
  const searchParams = useSearchParams();
  const guest = searchParams.get("guest");

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
      <div className="max-w-[1170px] mx-auto px-[15px] relative z-1">
        <div className="flex flex-wrap -mx-[15px]">
          <div className="w-full md:w-10/12 md:ml-[8.333333%] px-[15px] text-center">
            <div className="display-t nunito-semibold">
              <div
                className="display-tc animate-box"
                data-animate-effect="fadeIn"
              >
                <h1>Hải Đăng &amp; Bích Phượng</h1>
                {/* <div className="bg-white h-1 w-[5rem] my-2 mx-auto"></div> */}
                <h2 className="nunito-regular">27 Tháng 12 Năm 2025</h2>
                {/* <div className="simply-countdown simply-countdown-one"></div> */}
                <p>
                  <a
                    href="#"
                    className="inline-block px-5 py-2 text-sm font-normal text-[#333] bg-white border border-[#ccc] rounded-[30px] transition-all duration-500 hover:shadow-lg"
                  >
                    Save the date
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

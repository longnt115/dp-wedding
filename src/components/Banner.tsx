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
                <h1 className="mt-[20vh] sm:mt-[22vh] md:mt-[25vh] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] leading-tight tracking-wide">
                  <span className="sr-only">Đám cưới của </span>
                  Hải Đăng <span aria-hidden="true">&amp;</span>
                  <span className="sr-only"> và </span> Bích Phượng
                </h1>
                <span
                  className="h-[2px] w-16 sm:w-20 md:w-24 bg-white/90 block mt-4 mb-3 sm:mt-5 sm:mb-4 md:mt-6 md:mb-5 mx-auto"
                  aria-hidden="true"
                ></span>
                <p
                  className="nunito-regular text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide"
                  role="doc-subtitle"
                >
                  <time dateTime="2025-12-27">
                    Thứ bảy, 27 Tháng 12 Năm 2025
                  </time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

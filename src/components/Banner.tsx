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
                <h1 className="!mt-[25vh] sm:!text-[70px] md:!text-[75px] text-[100px]">
                  <span className="sr-only">Đám cưới của </span>
                  Hải Đăng <span aria-hidden="true">&amp;</span>
                  <span className="sr-only"> và </span> Bích Phượng
                </h1>
                <span
                  className="h-[2px] w-20 md:w-25 bg-white block mb-2 md:mb-5 mx-auto"
                  aria-hidden="true"
                ></span>
                <p
                  className="nunito-regular text-white text-xl md:text-2xl"
                  role="doc-subtitle"
                >
                  <time dateTime="2025-12-27">
                    Thứ bảy 27 Tháng 12 Năm 2025
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

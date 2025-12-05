import Image from "next/image";

export const GroomBride = () => {
  return (
    <section
      id="fh5co-couple"
      aria-labelledby="couple-heading"
      className="!mt-0"
    >
      <div className="container">
        <div className="couple-wrap mb-[3em] md:mb-[6em]">
          <article
            className="couple-half relative"
            aria-label="Thông tin chú rể"
          >
            <div className="groom">
              <Image
                src="/assets/images/groom.webp"
                alt="Chú rể Hải Đăng"
                width={320}
                height={320}
                className="w-full img-responsive"
              />
            </div>
          </article>

          <p className="heart text-center" aria-hidden="true">
            <i className="icon-heart2" aria-hidden="true"></i>
          </p>

          <article
            className="couple-half relative mt-10 md:mt-0"
            aria-label="Thông tin cô dâu"
          >
            <div className="bride">
              <Image
                src="/assets/images/bride.webp"
                alt="Cô dâu Bích Phượng"
                width={320}
                height={320}
                className="w-full img-responsive"
              />
            </div>
          </article>
        </div>
        <div className="row justify-center flex flex-col items-center">
          <h2
            id="venue-heading"
            className="nunito-semibold text-4xl md:text-5xl col-12 mb-5"
          >
            Nhà Có Hỷ
          </h2>
          <span
            className="h-[2px] w-20 md:w-25 bg-black block mb-2 md:mb-5 mx-auto"
            aria-hidden="true"
          ></span>
          <h3 className="dancing-semibold flex flex-row items-center col-12 w-full">
            <div className="couple-half flex flex-col justify-center items-center">
              <div className="groom !border-0">
                <span className="nunito-regular text-lg sm:text-xl md:text-3xl lg:text-4xl">
                  Chủ Rể
                </span>
                <p className="text-4xl md:text-5xl lg:text-6xl text-wedding-primary">
                  Hải Đăng
                </p>
              </div>
            </div>
            <div className="couple-half flex flex-col justify-center items-center">
              <div className="bride !border-0 w-full">
                <span className="nunito-regular text-lg sm:text-xl md:text-3xl lg:text-4xl">
                  Cô Dâu
                </span>
                <p className="text-4xl md:text-5xl lg:text-6xl text-wedding-primary">
                  Bích Phượng
                </p>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </section>
  );
};

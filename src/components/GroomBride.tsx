import Image from "next/image";

export const GroomBride = () => {
  return (
    <section 
      id="fh5co-couple" 
      aria-labelledby="couple-heading"
    >
      <div className="container">
        <h2 id="couple-heading" className="sr-only">Thông tin cô dâu chú rể</h2>
        <div className="row justify-center">
        </div>
        <div className="couple-wrap">
          <article className="couple-half relative" aria-label="Thông tin chú rể">
            <div className="groom">
              <Image
                src="/assets/images/groom.webp"
                alt="Chú rể Hải Đăng"
                width={150}
                height={150}
                className="img-responsive"
              />
            </div>
            <div className="desc-groom md:absolute">
              <h3 className="text-4xl md:text-3xl lg:text-4xl mt-2 md:mt-0">Hải Đăng</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove
              </p>
            </div>
          </article>
          
          <p className="heart text-center" aria-hidden="true">
            <i className="icon-heart2" aria-hidden="true"></i>
          </p>
          
          <article className="couple-half relative" aria-label="Thông tin cô dâu">
            <div className="bride">
              <Image
                src="/assets/images/bride.webp"
                alt="Cô dâu Bích Phượng"
                width={150}
                height={150}
                className="img-responsive"
              />
            </div>
            <div className="desc-bride md:absolute">
              <h3 className="text-4xl md:text-3xl lg:text-4xl mt-2 md:mt-0">Bích Phượng</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

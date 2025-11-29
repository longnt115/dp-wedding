import Image from "next/image";

export const GroomBride = () => {
  return (
    <div id="fh5co-couple">
      <div className="container">
        <div className="row justify-center">
          <div className="col-md-8 text-center fh5co-heading">
            <h2 className="text-wedding-bride-red">Hello!</h2>
            <h3>11h00 Ngày 27 Tháng 12 Năm 2025</h3>
            <p>We invited you to celebrate our wedding</p>
          </div>
        </div>
        <div className="couple-wrap">
          <div className="couple-half relative">
            <div className="groom">
              <Image
                src="/assets/images/groom.jpg"
                alt="groom"
                width={150}
                height={150}
                className="img-responsive"
              />
            </div>
            <div className="desc-groom md:absolute">
              <h3>Nguyễn Hải Đăng</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove
              </p>
            </div>
          </div>
          <p className="heart text-center">
            <i className="icon-heart2"></i>
          </p>
          <div className="couple-half relative">
            <div className="bride">
              <Image
                src="/assets/images/bride.webp"
                alt="bride"
                width={150}
                height={150}
                className="img-responsive"
              />
            </div>
            <div className="desc-bride md:absolute">
              <h3>Nguyễn Bích Phượng</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

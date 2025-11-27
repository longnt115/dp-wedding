import "@/styles/components/OurStory.scss";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const GalleryImage = () => {
  return (
    <div id="fh5co-gallery" className="fh5co-section-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <span>Our Memories</span>
            <h2 className="text-wedding-bride-red">Wedding Gallery</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div className="row row-bottom-padded-md flex justify-center">
          <div className="col-md-11">
            <div
              id="fh5co-gallery-list"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 auto-rows-[80px] sm:auto-rows-[90px] lg:auto-rows-[110px]"
            >
              {/* Cột 1 - Ảnh 1: Ảnh ngang */}
              <div
                className="relative overflow-hidden rounded-lg group animate-box row-span-4"
                data-animate-effect="fadeIn"
              >
                <Image
                  src="/assets/images/TVL_4882.JPG"
                  alt="Gallery 1"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  fill
                />
                <a
                  href="assets/images/TVL_4882.JPG"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white"></div>
                </a>
              </div>

              {/* Cột 2 - Ảnh 2: Ảnh dọc lớn (chiếm 2 hàng) */}
              <div
                className="relative overflow-hidden rounded-lg row-span-5 group animate-box"
                data-animate-effect="fadeIn"
              >
                <Image
                  src="/assets/images/TVL_4853.JPG"
                  alt="Gallery 2"
                  fill
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <a
                  href="assets/images/TVL_4853.JPG"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white"></div>
                </a>
              </div>

              {/* Cột 3 - Ảnh 3: Ảnh ngang */}
              <div
                className="relative overflow-hidden rounded-lg row-span-4 group animate-box"
                data-animate-effect="fadeIn"
              >
                <Image
                  src="/assets/images/TVL_4905.JPG"
                  alt="Gallery 3"
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <a
                  href="images/TVL_4905.JPG"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white"></div>
                </a>
              </div>

              {/* Cột 1 - Ảnh 4: Ảnh ngang */}
              <div
                className="relative overflow-hidden rounded-lg row-span-4 group animate-box"
                data-animate-effect="fadeIn"
              >
                <img
                  src="assets/images/gallery-4.jpg"
                  alt="Gallery 4"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <a
                  href="images/gallery-4.jpg"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white"></div>
                </a>
              </div>

              {/* Cột 2 - Ảnh 5: Ảnh ngang (ở dưới ảnh dọc) */}
              <div
                className="relative overflow-hidden rounded-lg row-span-4 group animate-box"
                data-animate-effect="fadeIn"
              >
                <img
                  src="assets/images/gallery-5.jpg"
                  alt="Gallery 5"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <a
                  href="images/gallery-5.jpg"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white"></div>
                </a>
              </div>

              {/* Cột 3 - Ảnh 6: Ảnh ngang */}
              <div
                className="relative overflow-hidden rounded-lg row-span-5 group animate-box"
                data-animate-effect="fadeIn"
              >
                <img
                  src="assets/images/gallery-6.jpg"
                  alt="Gallery 6"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <a
                  href="images/gallery-6.jpg"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white"></div>
                </a>
              </div>

              {/* Cột 1 - Ảnh 7: Ảnh dọc lớn (chiếm 2 hàng) */}
              <div
                className="relative overflow-hidden rounded-lg row-span-3 group animate-box"
                data-animate-effect="fadeIn"
              >
                <img
                  src="assets/images/gallery-7.jpg"
                  alt="Gallery 7"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <a
                  href="images/gallery-7.jpg"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white"></div>
                </a>
              </div>

              {/* Cột 2 - Ảnh 8: Ảnh ngang */}
              <div
                className="relative overflow-hidden rounded-lg row-span-3 group animate-box"
                data-animate-effect="fadeIn"
              >
                <img
                  src="assets/images/gallery-8.jpg"
                  alt="Gallery 8"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <a
                  href="images/gallery-8.jpg"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

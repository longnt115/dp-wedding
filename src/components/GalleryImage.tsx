import "@/styles/components/OurStory.scss";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const galleryImages = [
  {
    src: "/assets/images/TVL_3905.webp",
    alt: "Gallery 1",
    className: "row-span-4",
  },
  {
    src: "/assets/images/TVL_4627.webp",
    alt: "Gallery 2",
    className: "row-span-5",
  },
  {
    src: "/assets/images/TVL_4688.webp",
    alt: "Gallery 3",
    className: "row-span-4",
  },
  {
    src: "/assets/images/TVL_4917.webp",
    alt: "Gallery 4",
    className: "row-span-4",
  },
  {
    src: "/assets/images/TVL_5175.webp",
    alt: "Gallery 5",
    className: "row-span-4",
  },
  {
    src: "/assets/images/TVL_5525.webp",
    alt: "Gallery 6",
    className: "row-span-4",
  },
  {
    src: "/assets/images/TVL_5585.webp",
    alt: "Gallery 7",
    className: "row-span-3",
  },
  {
    src: "/assets/images/TVL_6136.webp",
    alt: "Gallery 8",
    className: "row-span-4",
  },
];

export const GalleryImage = () => {
  return (
    <div id="fh5co-gallery" className="fh5co-section-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <span>Our Memories</span>
            <h2 className="text-wedding-bride-red !mb-0 sm:mb-[10px]">
              Album Hình Cưới
            </h2>
            <span className="h-[2px] w-20 md:w-25 bg-[#a10129] block mb-2 md:mb-5 mx-auto"></span>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div className="row row-bottom-padded-md flex justify-center">
          <div className="col-md-12">
            <PhotoProvider>
              <div
                id="fh5co-gallery-list"
                className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 auto-rows-[70px] sm:auto-rows-[90px] lg:auto-rows-[110px]"
              >
                {/* Cột 1 - Ảnh 1: Ảnh ngang */}
                {galleryImages.map((image, index) => (
                  <div
                    className={`relative overflow-hidden group animate-box ${image.className}`}
                    data-animate-effect="fadeIn"
                    key={index}
                  >
                    <PhotoView src={image.src} key={index}>
                      <Image
                        src={image.src}
                        key={index}
                        alt={image.alt}
                        className="object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </PhotoView>
                  </div>
                ))}
              </div>
            </PhotoProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

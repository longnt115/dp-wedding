import { shuffle } from "@/hook/useArray";
import "@/styles/components/OurStory.scss";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";
import { PhotoProvider, PhotoSlider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const galleryImages = [
  { src: "/assets/images/TVL_3905.webp", key: "Ảnh cưới 1" },
  { src: "/assets/images/TVL_4627.webp", key: "Ảnh cưới 2" },
  { src: "/assets/images/TVL_4688.webp", key: "Ảnh cưới 3" },
  { src: "/assets/images/TVL_4853.webp", key: "Ảnh cưới 4" },
  { src: "/assets/images/TVL_4882.webp", key: "Ảnh cưới 5" },
  { src: "/assets/images/TVL_4905.webp", key: "Ảnh cưới 6" },
  { src: "/assets/images/TVL_4917.webp", key: "Ảnh cưới 7" },
  { src: "/assets/images/TVL_5175.webp", key: "Ảnh cưới 8" },
  { src: "/assets/images/TVL_5525.webp", key: "Ảnh cưới 9" },
  { src: "/assets/images/TVL_5585.webp", key: "Ảnh cưới 10" },
  { src: "/assets/images/TVL_6136.webp", key: "Ảnh cưới 11" },
  { src: "/assets/images/TVL_6520.webp", key: "Ảnh cưới 13" },
  { src: "/assets/images/TVL_6565.webp", key: "Ảnh cưới 14" },
  { src: "/assets/images/TVL_6589.webp", key: "Ảnh cưới 15" },
  { src: "/assets/images/TVL_6745.webp", key: "Ảnh cưới 16" },
  { src: "/assets/images/TVL_6883.webp", key: "Ảnh cưới 17" },
];

// Masonry template pattern cho 9 ảnh dọc (lặp lại mỗi 9 ảnh)
const getMasonryClass = (index: number): string => {
  const pattern =
    isMobile || isTablet
      ? [
          "row-span-4",
          "row-span-3",
          "row-span-3",
          "row-span-4",
          "row-span-3",
          "row-span-4",
          "row-span-4",
          "row-span-4",
          "row-span-3",
        ]
      : [
          "row-span-5",
          "row-span-4",
          "row-span-4",
          "row-span-5",
          "row-span-4",
          "row-span-4",
          "row-span-5",
          "row-span-4",
          "row-span-4",
        ];
  return pattern[index % 9];
};

export const GalleryImage = () => {
  const [displayGalleryImages, setDisplayGalleryImages] = useState<
    typeof galleryImages
  >([]);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setDisplayGalleryImages(shuffle(galleryImages));
  }, []);

  const handleOpenGallery = useCallback(() => {
    setVisible(true);
  }, []);

  const handleCloseGallery = useCallback(() => {
    setVisible(false);
    setIndex(0);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, imageIndex: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIndex(imageIndex);
      setVisible(true);
    }
  }, []);

  return (
    <section 
      id="fh5co-gallery" 
      className="fh5co-section-gray !pb-[2.5rem]"
      aria-labelledby="gallery-heading"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <span>Kỷ Niệm Chúng Mình</span>
            <h2 id="gallery-heading" className="text-wedding-bride-red !mb-0 sm:mb-[10px]">
              Album Hình Cưới
            </h2>
            <span 
              className="h-[2px] w-20 md:w-25 bg-[#a10129] block mb-2 md:mb-5 mx-auto"
              aria-hidden="true"
            ></span>
            <p>
              Lưu giữ từng khoảnh khắc yêu thương, mỗi ánh mắt, mỗi cái nắm tay là câu chuyện hạnh phúc bất tận cùng nhau.
            </p>
          </div>
        </div>
        <div className="row row-bottom-padded-md flex justify-center">
          <div className="col-md-12">
            <PhotoProvider>
              <div
                id="fh5co-gallery-list"
                className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 auto-rows-[70px] sm:auto-rows-[90px] lg:auto-rows-[110px]"
                role="list"
                aria-label="Bộ sưu tập ảnh cưới"
              >
                {displayGalleryImages.map((image, idx) => (
                  <PhotoView src={image.src} key={idx}>
                    {idx < 9 ? (
                      <div
                        className={`relative overflow-hidden group ${getMasonryClass(idx)}`}
                        data-animate-effect="fadeIn"
                        role="listitem"
                        tabIndex={0}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        aria-label={`${image.key} - Nhấn Enter để xem ảnh lớn`}
                      >
                        <Image
                          src={image.src}
                          alt={`${image.key} của Hải Đăng và Bích Phượng`}
                          className="object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ) : undefined}
                  </PhotoView>
                ))}
              </div>
              <div className="text-center">
                <button
                  className="mt-5 !rounded-full btn !border-1 !border-[#a10129] bg-white text-[#a10129] hover:!bg-[#a10129] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#a10129] focus:ring-offset-2"
                  onClick={handleOpenGallery}
                  aria-label={`Xem tất cả ${displayGalleryImages.length} ảnh trong album`}
                >
                  Xem tất cả
                </button>
                <PhotoSlider
                  images={displayGalleryImages}
                  visible={visible}
                  onClose={handleCloseGallery}
                  index={index}
                  onIndexChange={setIndex}
                />
              </div>
            </PhotoProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

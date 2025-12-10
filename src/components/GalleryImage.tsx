"use client";
import { shuffle } from "@/hook/useArray";
import { checkMobile } from "@/hook/useDevice";
import Image from "next/image";
import { memo, useCallback, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const galleryImages = [
  { src: "/assets/images/TVL_4023.webp", key: "Ảnh cưới 1" },
  { src: "/assets/images/TVL_4627.webp", key: "Ảnh cưới 2" },
  { src: "/assets/images/TVL_4688.webp", key: "Ảnh cưới 3" },
  { src: "/assets/images/TVL_4917.webp", key: "Ảnh cưới 7" },
  { src: "/assets/images/TVL_5101.webp", key: "Ảnh cưới 8" },
  { src: "/assets/images/TVL_5525.webp", key: "Ảnh cưới 9" },
  { src: "/assets/images/TVL_5585.webp", key: "Ảnh cưới 4" },
  { src: "/assets/images/TVL_6136.webp", key: "Ảnh cưới 11" },
  { src: "/assets/images/TVL_6520.webp", key: "Ảnh cưới 13" },
  { src: "/assets/images/TVL_6745.webp", key: "Ảnh cưới 16" },
  { src: "/assets/images/TVL_6883.webp", key: "Ảnh cưới 17" },
  { src: "/assets/images/TVL_6262.webp", key: "Ảnh cưới 17" },
];

// Pattern được định nghĩa ngoài component - tránh recreate
const MOBILE_PATTERN = [
  "row-span-4",
  "row-span-3",
  "row-span-3",
  "row-span-4",
  "row-span-3",
  "row-span-4",
  "row-span-4",
  "row-span-3",
  "row-span-4",
  "row-span-3",
  "row-span-5",
];

const DESKTOP_PATTERN = [
  "row-span-5",
  "row-span-4",
  "row-span-4",
  "row-span-5",
  "row-span-4",
  "row-span-4",
  "row-span-5",
  "row-span-4",
  "row-span-4",
  "row-span-4",
  "row-span-4",
  "row-span-4",
];

// Memoized Gallery Item để tránh re-render khi parent update
const GalleryItem = memo(
  ({
    image,
    idx,
    masonryClass,
    onKeyDown,
  }: {
    image: { src: string; key: string };
    idx: number;
    masonryClass: string;
    onKeyDown: (e: React.KeyboardEvent, idx: number) => void;
  }) => (
    <PhotoView src={image.src} key={idx}>
      <div
        className={`relative overflow-hidden group ${masonryClass}`}
        data-animate-effect="fadeIn"
        role="listitem"
        tabIndex={0}
        onKeyDown={(e) => onKeyDown(e, idx)}
        aria-label={`${image.key} - Nhấn Enter để xem ảnh lớn`}
      >
        <Image
          src={image.src}
          alt={`${image.key} của Hải Đăng và Bích Phượng`}
          className="object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
          fill
          sizes="(max-width: 360px) 40vw, (max-width: 768px) 45vw, (max-width: 1200px) 30vw, 30vw"
          loading={idx < 3 ? "eager" : "lazy"}
        />
      </div>
    </PhotoView>
  )
);

GalleryItem.displayName = "GalleryItem";

export const GalleryImage = () => {
  const [displayGalleryImages, setDisplayGalleryImages] = useState<
    typeof galleryImages
  >([]);
  // Sử dụng state thay vì import trực tiếp để check một lần khi mount
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobileDevice(checkMobile(userAgent));
    const displayImages = shuffle(galleryImages).slice(
      0,
      isMobileDevice ? 11 : 12
    );
    setDisplayGalleryImages(displayImages);
  }, []);

  // Memoize getMasonryClass
  const getMasonryClass = useCallback(
    (idx: number) =>
      isMobileDevice ? MOBILE_PATTERN[idx % 11] : DESKTOP_PATTERN[idx % 12],
    [isMobileDevice]
  );

  // const handleOpenGallery = useCallback(() => {
  //   setVisible(true);
  // }, []);

  // const handleCloseGallery = useCallback(() => {
  //   setVisible(false);
  //   setIndex(0);
  // }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      // setIndex(imageIndex);
      // setVisible(true);
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
            <h2
              id="gallery-heading"
              className="text-wedding-bride-red !mb-0 sm:mb-[10px]"
            >
              Album Hình Cưới
            </h2>
            <span
              className="h-[2px] w-20 md:w-25 bg-[#840d0c] block mb-2 md:mb-5 mx-auto"
              aria-hidden="true"
            ></span>
            <p>
              Lưu giữ từng khoảnh khắc yêu thương, mỗi ánh mắt, mỗi cái nắm tay
              là câu chuyện hạnh phúc bất tận cùng nhau.
            </p>
          </div>
        </div>
        <div className="row row-bottom-padded-md flex justify-center">
          <div className="col-base-12 col-md-12">
            <PhotoProvider>
              <div
                id="fh5co-gallery-list"
                className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 auto-rows-[70px] sm:auto-rows-[90px] lg:auto-rows-[110px]"
                role="list"
                aria-label="Bộ sưu tập ảnh cưới"
              >
                {displayGalleryImages.map((image, idx) => (
                  <GalleryItem
                    key={image.src}
                    image={image}
                    idx={idx}
                    masonryClass={getMasonryClass(idx)}
                    onKeyDown={handleKeyDown}
                  />
                ))}
              </div>
              {/* <div className="text-center">
                <button
                  className="mt-5 !rounded-full btn !border-1 !border-[#840d0c] bg-white text-[#840d0c] hover:!bg-[#840d0c] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#840d0c] focus:ring-offset-2"
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
              </div> */}
            </PhotoProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

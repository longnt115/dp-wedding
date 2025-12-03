import { shuffle } from "@/hook/useArray";
import "@/styles/components/OurStory.scss";
import Image from "next/image";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
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

// Pattern được định nghĩa ngoài component - tránh recreate
const MOBILE_PATTERN = [
  "row-span-4",
  "row-span-3",
  "row-span-3",
  "row-span-4",
  "row-span-3",
  "row-span-4",
  "row-span-4",
  "row-span-4",
  "row-span-3",
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
      {idx < 9 ? (
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
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
            loading={idx < 3 ? "eager" : "lazy"}
          />
        </div>
      ) : undefined}
    </PhotoView>
  )
);

GalleryItem.displayName = "GalleryItem";

export const GalleryImage = () => {
  const [displayGalleryImages, setDisplayGalleryImages] = useState<
    typeof galleryImages
  >([]);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  // Sử dụng state thay vì import trực tiếp để check một lần khi mount
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    // Check device type một lần khi mount - tránh import top-level blocking
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent
        );
      const isTablet =
        /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/i.test(userAgent);
      return isMobile || isTablet || window.innerWidth < 768;
    };

    setIsMobileDevice(checkMobile());
    setDisplayGalleryImages(shuffle(galleryImages));
  }, []);

  // Memoize pattern để tránh tính toán lại
  const currentPattern = useMemo(
    () => (isMobileDevice ? MOBILE_PATTERN : DESKTOP_PATTERN),
    [isMobileDevice]
  );

  // Memoize getMasonryClass
  const getMasonryClass = useCallback(
    (idx: number) => currentPattern[idx % 9],
    [currentPattern]
  );

  const handleOpenGallery = useCallback(() => {
    setVisible(true);
  }, []);

  const handleCloseGallery = useCallback(() => {
    setVisible(false);
    setIndex(0);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, imageIndex: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIndex(imageIndex);
        setVisible(true);
      }
    },
    []
  );

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
              className="h-[2px] w-20 md:w-25 bg-[#a10129] block mb-2 md:mb-5 mx-auto"
              aria-hidden="true"
            ></span>
            <p>
              Lưu giữ từng khoảnh khắc yêu thương, mỗi ánh mắt, mỗi cái nắm tay
              là câu chuyện hạnh phúc bất tận cùng nhau.
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
                  <GalleryItem
                    key={image.src}
                    image={image}
                    idx={idx}
                    masonryClass={getMasonryClass(idx)}
                    onKeyDown={handleKeyDown}
                  />
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

import { shuffle } from "@/hook/useArray";
import { checkMobile } from "@/hook/useDevice";
import { motion } from "framer-motion";
import Image from "next/image";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { PhotoProvider, PhotoSlider, PhotoView } from "react-photo-view";

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
    isMobile,
  }: {
    image: { src: string; key: string };
    idx: number;
    masonryClass: string;
    onKeyDown: (e: React.KeyboardEvent, idx: number) => void;
    isMobile: boolean;
  }) => {
    // Animation variants cho desktop (3 cột)
    const getDesktopVariants = (index: number) => {
      const col = index % 3; // 0: trái, 1: giữa, 2: phải
      if (col === 0) {
        // Ảnh trái - từ trái qua
        return {
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        };
      } else if (col === 1) {
        // Ảnh giữa - từ dưới lên
        return {
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        };
      } else {
        // Ảnh phải - từ phải qua
        return {
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        };
      }
    };

    // Animation variants cho mobile (2 cột)
    const getMobileVariants = (index: number) => {
      const col = index % 2; // 0: trái, 1: phải
      if (col === 0) {
        // Ảnh trái - từ trái qua
        return {
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        };
      } else {
        // Ảnh phải - từ phải qua
        return {
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        };
      }
    };

    const variants = isMobile
      ? getMobileVariants(idx)
      : getDesktopVariants(idx);

    return (
      <PhotoView src={image.src} key={idx}>
        {idx < 9 ? (
          <motion.div
            className={`relative overflow-hidden group ${masonryClass}`}
            data-animate-effect="fadeIn"
            role="listitem"
            tabIndex={0}
            onKeyDown={(e) => onKeyDown(e, idx)}
            aria-label={`${image.key} - Nhấn Enter để xem ảnh lớn`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: (idx % 3) * 0.1,
            }}
          >
            <Image
              src={image.src}
              alt={`${image.key} của Hải Đăng và Bích Phượng`}
              className="object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
              fill
              sizes="(max-width: 768px) 45vw, (max-width: 1200px) 33vw, 32vw"
              loading={idx < 3 ? "eager" : "lazy"}
            />
          </motion.div>
        ) : undefined}
      </PhotoView>
    );
  }
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
              className="h-[2px] w-20 md:w-25 bg-wedding-primary block mb-2 md:mb-5 mx-auto"
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
                    isMobile={isMobileDevice}
                  />
                ))}
              </div>
              <div className="text-center">
                <button
                  className="mt-5 !rounded-full btn !border-1 !border-wedding-primary bg-white text-wedding-primary hover:!bg-wedding-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-wedding-primary focus:ring-offset-2"
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

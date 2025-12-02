import { shuffle } from "@/hook/useArray";
import "@/styles/components/OurStory.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PhotoProvider, PhotoSlider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const galleryImages = [
  { src: "/assets/images/TVL_3905.webp", key: "Gallery 1" },
  { src: "/assets/images/TVL_4627.webp", key: "Gallery 2" },
  { src: "/assets/images/TVL_4688.webp", key: "Gallery 3" },
  { src: "/assets/images/TVL_4853.webp", key: "Gallery 4" },
  { src: "/assets/images/TVL_4882.webp", key: "Gallery 5" },
  { src: "/assets/images/TVL_4905.webp", key: "Gallery 6" },
  { src: "/assets/images/TVL_4917.webp", key: "Gallery 7" },
  { src: "/assets/images/TVL_5175.webp", key: "Gallery 8" },
  { src: "/assets/images/TVL_5525.webp", key: "Gallery 9" },
  { src: "/assets/images/TVL_5585.webp", key: "Gallery 10" },
  { src: "/assets/images/TVL_6136.webp", key: "Gallery 11" },
  { src: "/assets/images/TVL_6408.webp", key: "Gallery 12" },
  { src: "/assets/images/TVL_6520.webp", key: "Gallery 13" },
  { src: "/assets/images/TVL_6565.webp", key: "Gallery 14" },
  { src: "/assets/images/TVL_6589.webp", key: "Gallery 15" },
  { src: "/assets/images/TVL_6745.webp", key: "Gallery 16" },
  { src: "/assets/images/TVL_6883.webp", key: "Gallery 17" },
];

// Masonry template pattern cho 9 ảnh dọc (lặp lại mỗi 9 ảnh)
// Pattern: tall (5 rows), medium (4 rows), short (3 rows)
const getMasonryClass = (index: number): string => {
  // Pattern cho 9 ảnh tạo thành khối masonry đẹp
  // Cột 1: tall, medium, medium (tổng 13 rows)
  // Cột 2: medium, tall, medium (tổng 13 rows)
  // Cột 3: medium, medium, tall (tổng 13 rows)
  const pattern = [
    "row-span-5", // 0: Cột 1 - tall
    "row-span-4", // 1: Cột 2 - medium
    "row-span-4", // 2: Cột 3 - medium
    "row-span-5", // 3: Cột 1 - medium
    "row-span-4", // 4: Cột 2 - tall
    "row-span-4", // 5: Cột 3 - medium
    "row-span-5", // 6: Cột 1 - medium
    "row-span-4", // 7: Cột 2 - medium
    "row-span-4", // 8: Cột 3 - tall
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

  return (
    <div id="fh5co-gallery" className="fh5co-section-gray !pb-[2.5rem]">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <span>Our Memories</span>
            <h2 className="text-wedding-bride-red !mb-0 sm:mb-[10px]">
              Album Hình Cưới {displayGalleryImages.length}
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
                {displayGalleryImages.map((image, index) => (
                  <PhotoView src={image.src} key={index}>
                    {index < 9 ? (
                      <div
                        className={`relative overflow-hidden group  ${getMasonryClass(
                          index
                        )}`}
                        data-animate-effect="fadeIn"
                        key={index}
                      >
                        <Image
                          src={image.src}
                          key={index}
                          alt={image.key}
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
                  className="mt-5 !rounded-full btn !border-1 !border-[#a10129] bg-white text-[#a10129] hover:!bg-[#a10129] hover:text-white"
                  onClick={() => setVisible(true)}
                >
                  Xem tất cả
                </button>

                <PhotoSlider
                  images={displayGalleryImages}
                  visible={visible}
                  onClose={() => {
                    setVisible(false);
                    setIndex(0);
                  }}
                  index={index}
                  onIndexChange={setIndex}
                />
              </div>
            </PhotoProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

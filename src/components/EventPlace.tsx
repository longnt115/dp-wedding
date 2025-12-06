"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const EventPlace = () => {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Chỉ load iframe khi user scroll đến section này
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load trước 200px để trải nghiệm mượt hơn
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="bg-white w-full py-20 content-between"
      aria-labelledby="venue-heading"
    >
      <div className="container">
        <div className="row">
          <div className="col-base-12 col-md-6">
            <div className="p-1 flex">
              <Image
                src="/assets/images/TVL_6565.webp"
                height={296}
                width={480}
                alt="Ảnh cưới của Hải Đăng và Bích Phượng tại địa điểm tổ chức"
                className="w-[18.5rem] md:w-[21.5rem] h-[30rem] md:h-[34rem] object-cover p-3 border-1 border-wedding-primary shadow-lg mx-auto block"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
              />
            </div>
          </div>
          <div className="col-base-12 col-md-6">
            <div className="text-center flex flex-col h-full justify-center items-center">
              <h2
                id="venue-heading"
                className="text-wedding-primary dancing-semibold text-[2.5rem] md:text-[3.75rem] mb-0 sm:mb-[10px] md:mb-5"
              >
                Địa Điểm Tổ Chức
              </h2>
              <span
                className="h-[2px] w-20 md:w-25 bg-wedding-primary block mb-2 md:mb-5 mx-auto sm:mb-[10px]"
                aria-hidden="true"
              ></span>
              <address className="not-italic mt-2 md:mt-0">
                <h3 className="text-[1.25rem] mb-5 leading-none">
                  Trung Tâm Tiệc Cưới &amp; Sự Kiện Promes Center <br />
                  <span className="text-[1rem] dancing-thin text-gray-600">
                    122 - 124, Đ. Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội
                    10000
                  </span>
                </h3>
              </address>
              <div
                className="w-full max-w-[550px] flex-grow px-4 pt-6"
                ref={mapContainerRef}
              >
                <div className="w-full h-full aspect-video">
                  {shouldLoadMap ? (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.887128703285!2d105.7872311!3d21.0372018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab277ebd8c1b%3A0xa3b26494470bd077!2zVHJ1bmcgVMOibSBUaeG7h2MgQ8aw4bubaSAmIFPhu7EgS2nhu4duIFByb21lcyBDZW50ZXI!5e0!3m2!1sen!2s!4v1764346457498!5m2!1sen!2s"
                      className="w-full h-full border-0 rounded-lg shadow-lg"
                      loading="lazy"
                      title="Bản đồ đến Trung Tâm Tiệc Cưới Promes Center - 122-124 Xuân Thủy, Cầu Giấy, Hà Nội"
                      referrerPolicy="no-referrer-when-downgrade"
                      aria-label="Bản đồ Google Maps hiển thị vị trí Trung Tâm Tiệc Cưới Promes Center"
                    ></iframe>
                  ) : (
                    <div
                      className="w-full h-full bg-gray-100 rounded-lg shadow-lg flex items-center justify-center"
                      aria-label="Đang tải bản đồ..."
                    >
                      <span className="text-gray-600">Đang tải bản đồ...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

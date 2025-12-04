const SKELETON_PATTERN = [
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

export const GalleryLoader = () => {
  return (
    <section
      id="fh5co-gallery"
      className="fh5co-section-gray !pb-[2.5rem]"
      aria-label="Đang tải album hình cưới"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            {/* Title skeleton */}
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mx-auto mb-3" />
            <div className="h-10 w-64 bg-gray-200 rounded animate-pulse mx-auto mb-2" />
            <div className="h-[2px] w-20 md:w-25 bg-gray-200 block mb-2 md:mb-5 mx-auto" />
            {/* Description skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mx-auto" />
              <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse mx-auto" />
            </div>
          </div>
        </div>
        <div className="row row-bottom-padded-md flex justify-center">
          <div className="col-md-12">
            {/* Gallery grid skeleton */}
            <div
              className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 auto-rows-[70px] sm:auto-rows-[90px] lg:auto-rows-[110px]"
              role="list"
              aria-hidden="true"
            >
              {SKELETON_PATTERN.map((rowSpan, idx) => (
                <div
                  key={idx}
                  className={`relative overflow-hidden rounded-lg bg-gray-200 animate-pulse ${rowSpan}`}
                >
                  {/* Shimmer effect overlay */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[skeleton-shimmer_1.5s_infinite]" />
                </div>
              ))}
            </div>
            {/* Button skeleton */}
            <div className="text-center">
              <div className="mt-5 h-10 w-28 bg-gray-200 rounded-full animate-pulse mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryLoader;

"use client";

// URL: /invite/em-long

export const Greeting = () => {
  return (
    <section className="pt-[5em] bg-gradient-to-b from-black/[0.04] to-transparent">
      <div className="row-12 nunito-regular justify-center text-center mb-5 lg:mb-7">
        <div className="col-12 text-4xl mb-5">THƯ MỜI TIỆC CƯỚI</div>
        <div className="nunito-thin py-5 w-fit mx-auto">
          <span
            className="h-[2px] w-full bg-black block mb-5 md:mb-7 mx-auto"
            aria-hidden="true"
          />
          <span className="text-3xl my-5 nunito-semibold text-wedding-primary">
            THỨ BẢY - 11H00
          </span>
          <span
            className="h-[2px] w-full bg-black block mt-5 md:mt-7 mx-auto"
            aria-hidden="true"
          />
        </div>
        <div className="col-12 text-5xl nunito-semibold text-wedding-primary">
          27 <span> . </span> 12 <span> . </span> 2025
        </div>
      </div>
      <div className="row-12 dancing-regular justify-center text-center">
        <div className="col-12 text-4xl lg:text-5xl">
          Trân Trọng Báo Tin Lễ Thành Hôn
        </div>
      </div>
    </section>
  );
};

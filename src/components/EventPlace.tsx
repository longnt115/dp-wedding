import Image from "next/image";

export const EventPlace = () => {
  return (
    <section className="bg-white w-full py-20 content-between">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="p-1 flex">
              <Image
                src="/assets/images/TVL_6589.JPG"
                width={350}
                height={550}
                alt="dia_diem"
                className="p-3 border-1 border-[#a10129] shadow-lg mx-auto block"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="justify-center flex h-full">
              <h2 className="text-[#a10129] dancing-script-semibold text-[3.75rem]">
                Địa Điểm Tổ Chức
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

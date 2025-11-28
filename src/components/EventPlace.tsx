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
                height={296}
                width={480}
                alt="dia_diem"
                className="w-[18.5rem] md:w-[21.5rem] h-[30rem] md:h-[34rem] object-cover p-3 border-1 border-[#a10129] shadow-lg mx-auto block"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="text-center flex flex-col h-full justify-center items-center">
              <h2 className="text-[#a10129] dancing-script-semibold text-[2.5rem] md:text-[3.75rem]">
                Địa Điểm Tổ Chức
              </h2>
              <h3 className="text-[1.25rem] mb-5 leading-none">
                Trung Tâm Tiệc Cưới & Sự Kiện Promes Center <br />
                <span className="text-[1rem] dancing-thin text-gray-600 ">
                  122 - 124, Đ. Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội 10000
                </span>
              </h3>
              <div className="w-full max-w-[550px] flex-grow px-4 pt-6">
                <div className="w-full h-full aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.887128703285!2d105.7872311!3d21.0372018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab277ebd8c1b%3A0xa3b26494470bd077!2zVHJ1bmcgVMOibSBUaeG7h2MgQ8aw4bubaSAmIFPhu7EgS2nhu4duIFByb21lcyBDZW50ZXI!5e0!3m2!1sen!2s!4v1764346457498!5m2!1sen!2s"
                    className="w-full h-full border-0 rounded-lg shadow-lg"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

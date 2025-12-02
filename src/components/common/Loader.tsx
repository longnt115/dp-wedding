import Image from "next/image";

export const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white">
      <Image
        src="/assets/icon/heart-16635.gif"
        width={200}
        height={100}
        alt="loader"
      />
    </div>
  );
};

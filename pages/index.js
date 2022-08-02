import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center h-screen">
      {/* <div className="w-1/3"></div> */}
      <div className="w-2/5 flex justify-center">
        <Image src="/assets/hero-image.jpeg" width={650} height={850} alt="" />
        {/* <img className="h-screen" src="/assets/hero-image.jpeg" alt="" /> */}
      </div>
      {/* <div className="w-1/3"></div> */}
    </div>
  );
}

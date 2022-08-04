import Image from "next/image";
import HeroImage from "../components/HeroImage";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-full lg:mt-8 lg:w-2/5 ">
        <HeroImage />
      </div>
    </div>
  );
}

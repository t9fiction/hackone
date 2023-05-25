import Image from "next/image";
import React from "react";
import { BsCart4 } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-16 py-20">
        <div className="flex flex-row">
          <div className="flex flex-col w-2/5">
            <div className="bg-[#e1edff] w-28 px-4 py-2 rounded-md text-[#2B00FF] font-semibold">
              Sale 70%
            </div>
            <h2 className="text-6xl font-bold py-10 text-primary">
              An Industrial Take on Streetwear
            </h2>
            <p className="text-lg text-gray-600 w-80">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
            <div className="w-40 h-20 mt-8 px-4 bg-primary shadow-xl  text-white border-spacing-1 flex flex-row items-center gap-4">
              <BsCart4 size={26} />
              <p className="font-bold text-center">Start Shopping</p>
            </div>
            <div className="flex flex-row gap-4 py-8">
              <Image
                src="/images/Featured1.webp"
                alt="feature1"
                width={100}
                height={100}
              />
              <Image
                src="/images/Featured2.webp"
                alt="feature2"
                width={100}
                height={100}
              />
              <Image
                src="/images/Featured3.webp"
                alt="feature3"
                width={100}
                height={100}
              />
              <Image
                src="/images/Featured4.webp"
                alt="feature4"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="w-3/5 mx-auto flex justify-center items-center relative pl-20">
            <div className="w-[600px] h-[600px] bg-[#FFECE3] opacity-90 rounded-full"></div>
            <Image src={'/images/woman.webp'} width={700} height={700} className="absolute right-0 left-20 bottom-2" alt="woman" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Image from "next/image";
import React from "react";

const Promotions = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-16 py-8">
        <h3 className="uppercase font-bold text-sm text-[#1862F5] text-center">
          Promotions
        </h3>
        <h2 className="text-primary text-center py-4 font-bold text-4xl">
          Our Promotions Events
        </h2>
        <div className="py-4 flex flex-row space-x-6">
          <div className="w-[44%] space-y-2">
            <div className="w-full h-44 bg-[#D6D6D8] flex flex-row items-center px-16">
              <div className="w-[40%]">
                <h3 className="text-primary font-bold text-2xl">GET UP TO</h3>
                <h3 className="text-primary font-bold text-3xl">60%</h3>
                <p className="text-primary text-lg">For the summer season</p>
              </div>
              <div className="w-[60%] overflow-hidden">
                <Image src={'/images/promotions/event1.webp'} width={280} height={280} alt="promo-girl" />
              </div>
            </div>
            <div className="w-full h-44 bg-primary"></div>
          </div>
          <div className="w-[28%] bg-[#EFE1C7] h-88">row</div>
          <div className="w-[28%] bg-[#D7D7D9] h-88">row</div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;

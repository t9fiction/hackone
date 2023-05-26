/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Promotions = () => {
  return (
    <div className="bg-white" id="promotions">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8">
        <h3 className="uppercase font-bold text-sm text-[#1862F5] text-center">
          Promotions
        </h3>
        <h2 className="text-primary text-center py-4 font-bold text-2xl md:text-3xl lg:text-4xl">
          Our Promotions Events
        </h2>
        <div className="py-4 flex flex-col lg:flex-row lg:space-x-6">
          <div className="w-full lg:w-[44%] space-y-2">
            <div className="w-full h-48 bg-[#D6D6D8] flex flex-row items-center px-4 sm:px-8 md:px-12 lg:px-16 shrink-0">
              <div className="lg:w-[40%]">
                <h3 className="text-primary font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                  GET UP TO
                </h3>
                <h3 className="text-primary font-bold text-base sm:text-lg md:text-2xl lg:text-3xl">
                  60%
                </h3>
                <p className="text-primary text-base md:text-lg">
                  For the summer season
                </p>
              </div>
              <div className="w-[60%] overflow-hidden shrink-0">
                <img
                  src={"/images/promotions/event1.webp"}
                  alt="promo-girl"
                  className="shrink-0 overflow-hidden w-full h-full"
                />
              </div>
            </div>
            <div className="w-full h-48 bg-primary shrink-0">
              <div className="items-center flex flex-col">
                <h2 className="font-bold text-4xl text-white pb-4 pt-8">
                  GET 30% Off
                </h2>
                <p className="text-white pb-2">USE PROMO CODE</p>
                <button className="uppercase text-white py-2 px-8 rounded-md bg-[#474747] tracking-[3px]">
                  dineweekendsale
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-2 sm:py-2 space-y-2 lg:w-[56%] sm:space-y-0 pt-2 sm:pt-0">
            <div className="w-full lg:w-[50%] bg-[#EFE1C7] h-[390px]">
              <div className="pt-4">
                <p className="px-4">Flex Sweatshirt</p>
                <div className="flex px-4 flex-row space-x-2">
                  <p className="text-lg line-through">$100.00 </p>
                  <p className="text-lg font-bold">$75.00</p>
                </div>
                <div className="items-center justify-center flex overflow-hidden">
                  <Image
                    src={"/images/promotions/event2.webp"}
                    alt="promotion2"
                    width={250}
                    height={250}
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[50%] bg-[#D7D7D9] h-[390px]">
              <div className="pt-4">
                <p className="px-4">Flex Sweatshirt</p>
                <div className="flex px-4 flex-row space-x-2">
                  <p className="text-lg line-through">$225.00 </p>
                  <p className="text-lg font-bold">$190.00</p>
                </div>
                <div className="items-center justify-center overflow-clip flex">
                  <Image
                    src={"/images/promotions/event3.webp"}
                    alt="promotion2"
                    width={245}
                    height={245}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;

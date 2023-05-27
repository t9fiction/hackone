/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-white" id="products">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8">
        <h2 className="text-primary text-center py-2 sm:py-4 md:py-6 lg:py-8 font-bold text-2xl sm:text-3xl md:text-4xl mx-auto">
          Unique and Authentic <br /> Vintage Designer Jewellery
        </h2>
        <div className="flex flex-col lg:flex-row items-center py-8">
          <div className="grid grid-cols-1 md:py-2 lg:py-4 sm:grid-cols-2 group bg-white shadow-xl shadow-neutral-100 ">
            <div className="p-4 flex flex-col items-center text-center group  hover:bg-slate-50 cursor-pointer">
              <p className="text-xl font-medium text-slate-700 lg:mt-3">
                Using Good Quality Materials
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
                necessitatibus.
              </p>
            </div>
            <div className="p-4 flex flex-col items-center text-center group  hover:bg-slate-50 cursor-pointer">
              <p className="text-xl font-medium text-slate-700 mt-3">
                100% Handmade Products
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
                necessitatibus.
              </p>
            </div>
            <div className="p-4 flex flex-col items-center text-center group  hover:bg-slate-50 cursor-pointer">
              <p className="text-xl font-medium text-slate-700 mt-3">
                Modern Fashion Design
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
                necessitatibus.
              </p>
            </div>
            <div className="p-4 flex flex-col items-center text-center group  hover:bg-slate-50 cursor-pointer">
              <p className="text-xl font-medium text-slate-700 mt-3">
                Discount for Bulk Orders
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
                necessitatibus.
              </p>
            </div>
          </div>
          <div className="flex flex-col px-6 sm:px-8 md:px-12 lg:px-16 md:flex-row space-x-4 items-center">
            <div className="px-1 w-full md:w-60">
              <img
                src={"/images/products/7.png"}
                alt=""
                className=""
              />
            </div>
            <div className="w-60 md:space-y-2">
              <p className="text-primary  text-justify">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <button className=" bg-primary shadow-xl  text-white border-spacing-1 flex flex-row items-center py-2 px-4">
                See all Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

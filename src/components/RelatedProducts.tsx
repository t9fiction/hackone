"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCart from "./ProductCart";
import { client } from "../../sanity/lib/client";
import { Product } from "../../types/Product";

const getData = async () => {
  const response = await client.fetch(
    `*[_type=="product" && category=="women"]`
  );
  return response;
};

const RelatedProducts = async () => {
  const data = await getData();
  console.log(data);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>
      <Carousel responsive={responsive}>
        <div>
          <Image
            width={260}
            height={340}
            alt="alt"
            src="/images/products/1.png"
            className="rounded-md h-60 object-cover"
          />

          <div className="text-lg">Test Product</div>
          <p className="text-lg font-bold pb-2">&#8377; 555</p>
          <button className="border py-2 px-6 rounded-md bg-blue-600 text-white">
            Check Product
          </button>
        </div>
        <div>
          <Image
            width={260}
            height={340}
            alt="alt"
            src="/images/products/2.png"
            className="rounded-md h-60 object-cover"
          />

          <div className="text-lg">Test Product</div>
          <p className="text-lg font-bold pb-2">&#8377; 555</p>
          <button className="border py-2 px-6 rounded-md bg-blue-600 text-white">
            Check Product
          </button>
        </div>
        <div>
          <Image
            width={260}
            height={340}
            alt="alt"
            src="/images/products/11.png"
            className="rounded-md h-60 object-cover"
          />

          <div className="text-lg">Test Product</div>
          <p className="text-lg font-bold pb-2">&#8377; 555</p>
          <button className="border py-2 px-6 rounded-md bg-blue-600 text-white">
            Check Product
          </button>
        </div>
        <div>
          <Image
            width={260}
            height={340}
            alt="alt"
            src="/images/products/7.png"
            className="rounded-md h-60 object-cover"
          />

          <div className="text-lg">Test Product</div>
          <p className="text-lg font-bold pb-2">&#8377; 555</p>
          <button className="border py-2 px-6 rounded-md bg-blue-600 text-white">
            Check Product
          </button>
        </div>
        <div>
          <Image
            width={260}
            height={340}
            alt="alt"
            src="/images/products/9.png"
            className="rounded-md h-60 object-cover"
          />

          <div className="text-lg">Test Product</div>
          <p className="text-lg font-bold pb-2">&#8377; 555</p>
          <button className="border py-2 px-6 rounded-md bg-blue-600 text-white">
            Check Product
          </button>
        </div>
        <div>
          <Image
            width={260}
            height={340}
            alt="alt"
            src="/images/products/8.png"
            className="rounded-md h-60 object-cover"
          />

          <div className="text-lg">Test Product</div>
          <p className="text-lg font-bold pb-2">&#8377; 555</p>
          <button className="border py-2 px-6 rounded-md bg-blue-600 text-white">
            Check Product
          </button>
        </div>
        {/* {data.map((pro: Product) => {
            <ProductCart key={pro._id} product={pro} />
            {console.log(pro)}
        })} */}
      </Carousel>
    </div>
  );
};

export default RelatedProducts;

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCart from "./ProductCart";
import { client } from "../../sanity/lib/client";
import { Product } from "../../types/Product";
import Card from "./Card";

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
      <Carousel responsive={responsive} infinite={true}>
      {data.map((product: Product) => (
            <div key={product._id}>
              <Card product={product} />
            </div>
          ))}
        </Carousel>
    </div>
  );
};

export default RelatedProducts;

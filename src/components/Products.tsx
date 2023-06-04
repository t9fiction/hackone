"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { client } from "../../sanity/lib/client";
import { Product } from "../../types/Product";

export const getData = async () => {
  const response = await client.fetch(`*[_type=="product" && special==true]`);
  return response;
};

const Products = async () => {
  const data = await getData();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-white" id="products">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8">
        <h3 className="uppercase font-bold text-sm text-[#1862F5] text-center">
          Products
        </h3>
        <h2 className="text-primary text-center py-4 font-bold text-4xl">
          Check What We Have
        </h2>

        {/* Corousel */}
        <Carousel
          responsive={responsive}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
        >
          {data.map((product: Product) => (
            <div key={product._id}>
              <Card product={product} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Products;

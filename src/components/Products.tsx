"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client } from "../../sanity/lib/client";

export const getData = async () => {
  const response = await client.fetch(
    `*[_type=="product" && special==true]`
  );
  return response;
};


const Products = async () => {
  const data = await getData();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // lg and above
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // sm
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
        <Slider {...settings}>
          {data.map((e:any) => (
            <>
              <Card resource={e} />
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;

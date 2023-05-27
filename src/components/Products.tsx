"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import Card from "./Card";
import data from "./data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = ({ children }: any) => {
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

  console.log(data);

  return (
    <div className="bg-white" id="products">
      <div className="container mx-auto px-16 py-8">
        <h3 className="uppercase font-bold text-sm text-[#1862F5] text-center">
          Products
        </h3>
        <h2 className="text-primary text-center py-4 font-bold text-4xl">
          Check What We Have
        </h2>

        {/* Corousel */}
        <Slider {...settings}>
          {data.resources.map((resource, index) => (
            <>
              <Card resource={resource} />
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;

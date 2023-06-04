"use client"
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProdcutDetail = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                
                <img src="/images/shoe/p2.png" />
                <img src="/images/shoe/p3.png" />
                <img src="/images/shoe/p4.png" />
                <img src="/images/shoe/p5.png" />
                <img src="/images/shoe/p6.png" />
                <img src="/images/shoe/p7.png" />
            </Carousel>
        </div>
  )
}

export default ProdcutDetail
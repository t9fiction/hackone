/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { client } from "../../sanity/lib/client";
import { urlFor } from "@/functions/allfunction";


const ProdcutDetail = async (id: any) => {
  const data = await client.fetch(
    `*[_type=="product" && _id =="${id.id}"]`
  );

  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {data[0].images.map((image: any) => (
          <img key={id} src={urlFor(image.image).url()} alt={'image'} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProdcutDetail;

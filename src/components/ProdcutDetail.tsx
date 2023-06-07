"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { client } from "../../sanity/lib/client";
import { Product } from "../../types/Product";
import { urlFor } from "@/functions/allfunction";

const ProdcutDetail = async (id: any) => {
  const data = await client.fetch(
    `*[_type=="product" && _id =="${id.id}"]`
  );
  console.log(data, "data");
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {
          data.map((product:any)=>(
            <img key={product._id} src={urlFor(product.images[0].image).url()} />
          ))
        }
      </Carousel>
    </div>
  );
};

export default ProdcutDetail;

// export async function getStaticPaths() {
//   const products = await fetch("/api/products?populate=*");
//   const paths = products?.images?.map((p) => ({
//       params: {
//           slug: p.attributes.slug,
//       },
//   }));

//   return {
//       paths,
//       fallback: false,
//   };
// }

// export async function getStaticProps(id:any) {
//   const product = await client.fetch(
//     `*[_type=="product" && _id =="${id}"]`
//   );
//   return product
// }

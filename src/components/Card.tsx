/* eslint-disable @next/next/no-img-element */
import React from "react";
import { urlFor } from "@/functions/allfunction";
import { Product } from "../../types/Product";

const Card = (product : Product) => {
  return (
    <div className="shrink-0 px-4" id={product._id}>
      <img src={urlFor(product.image).url()} alt="" className="hover:scale-105 ease-in-out duration-300 rounded-md h-[320px]" />
      <h3 className="font-light md:font-bold text-lg pt-0 sm:pt-1 md:pt-2 lg:pt-4">{product.name}</h3>
      <h2 className="md:font-semibold text-base  md:text-lg lg:text-xl">$ {product.price}</h2>
    </div>
  );
};

export default Card;

'use client'
/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { urlFor } from "@/functions/allfunction";
import Link from "next/link";

const ProductCart: FC<any> = ({product}) => {
    console.log(product,"product")
    const handleAddToCart = () => {
        
    }
  return (
    <>
      <Link href={`/products/${product.name}`}>
        <img
          height={300}
          alt={product.alt}
          src={urlFor(product.image).url()}
          className="rounded-md h-60 object-cover"
        />
      </Link>
      <div className="text-lg">{product.name}</div>
      <p className="text-lg font-bold">$ {product.price}</p>
      <button
        onClick={handleAddToCart}
        className="border py-2 px-6 rounded-md bg-blue-600 text-white"
      >
        Add to Cart
      </button>
    </>
  );
};

export default ProductCart;

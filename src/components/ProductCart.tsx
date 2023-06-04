"use client";
/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { urlFor } from "@/functions/allfunction";
import Link from "next/link";

const ProductCart: FC<{ product: any }> = ({ product }) => {

  const handleAddToCart = async () => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
          product_id: product._id,
        }),
      });

      console.log(res,"res")
  
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  return (
    <>
      <Link href={`/products/${product._id}`}>
        <img
          height={300}
          alt={product.alt}
          src={urlFor(product.image).url()}
          className="rounded-md h-60 object-cover"
        />
      </Link>
      <div className="text-lg">{product.name}</div>
      <p className="text-lg font-bold pb-2">&#8377; {product.price}</p>
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

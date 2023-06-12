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

      const result = await res.json();
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  return (
    <>
      <Link href={`/products/${product._id}`}>
        <img
          height={300}
          alt=""
          src={urlFor(product.images[0].image).url()}
          className="rounded-md h-60 object-cover w-full"
        />
      </Link>
      <div className="text-lg">{product.name}</div>
      <p className="text-lg font-bold pb-2">&#8377; {product.price}</p>
      <Link href={`/products/${product._id}`}>
      <button
        // onClick={handleAddToCart}
        className="border py-2 px-6 rounded-md bg-blue-600 text-white"
        >
        Add to Cart
      </button>
        </Link>
    </>
  );
};

export default ProductCart;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "@/functions/allfunction";
import { Product } from "../../../types/Product";
import Link from "next/link";

const getData = async () => {
  const response = await client.fetch(
    `*[_type=="product" && category=="women"]`
  );
  return response;
};

interface IProduct {
  _id: string;
  _createdAt: string;
  name: string;
  title: string;
  description: string;
  price: number;
  category: string;
}

const Home = async () => {
  const data = await getData();
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((product: Product) => (
            <div key={product._id} className="py-8 px-4 ">
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
              <button className="border py-2 px-6 rounded-md bg-blue-600 text-white">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

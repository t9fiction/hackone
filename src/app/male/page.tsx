/* eslint-disable @next/next/no-img-element */
import React from "react";
import { urlFor } from "@/functions/allfunction";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";

const getData = async () => {
  const response = await client.fetch(`*[_type=="product" && category=="men"]`);
  return response;
};

const Home = async () => {
  const data = await getData();
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((product: any) => (
            <div key={product.id} className="py-8 px-4 ">
              <Link href={`/products/${product.name}`}>
                <img
                  alt={product.image.alt}
                  src={urlFor(product.image).url()}
                  className="rounded-md h-60"
                />
              </Link>
              <div className="text-lg">{product.name}</div>
              <p className="text-lg font-bold">$ {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

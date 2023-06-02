/* eslint-disable @next/next/no-img-element */
import React from "react";
import { urlFor } from "@/functions/allfunction";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import ProductCart from "@/components/ProductCart";

const getData = async () => {
  const response = await client.fetch(
    `*[_type=="product" && category=="kids"]`
  );
  return response;
};
const Home = async () => {
  const data = await getData();
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((product: any) => (
            <div key={product.id} className="py-8 px-4">
              <ProductCart product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { client } from "../../../sanity/lib/client";
import { Product } from "../../../types/Product";
import ProductCart from "@/components/ProductCart";

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
              <ProductCart product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

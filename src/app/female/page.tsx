/* eslint-disable @next/next/no-img-element */
import React from "react";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "@/functions/allfunction";

export const getData = async () => {
  const response = await client.fetch(
    `*[_type=="product" && category=="women"]`
  );
  return response;
};

interface IProduct {
  id: "number";
  name: "string";
  title: "string";
  description: "string";
  price: "number";
  category: "string";
}

const Home = async () => {
  const data = await getData();
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8">
        {data.map((e: any) => (
          <div key={e.id} className="flex space-y-1 flex-col">
            <img
              width={200}
              height={200}
              alt={e.slug.name}
              src={urlFor(e.image).url()}
              className="rounded-md"
            />
            <div className="text-lg">{e.name}</div>
            <p className="text-lg font-bold">Rs: {e.price}/-</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

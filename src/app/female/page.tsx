/* eslint-disable @next/next/no-img-element */
import React from "react";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "@/functions/allfunction";

const getData = async () => {
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
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 flex flex-row">
        {data.map((e: any) => (
          <div key={e.id} className="flex space-y-1 flex-col px-4 w-1/4">
            <img
              height={300}
              alt={e.image.alt}
              src={urlFor(e.image).url()}
              className="rounded-md h-60"
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

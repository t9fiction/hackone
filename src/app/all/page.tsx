/* eslint-disable @next/next/no-img-element */
import React from "react";
import { urlFor } from "@/functions/allfunction";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
// import { getData } from "@/functions/allfunction";

const getData = async () => {
  const response = await client.fetch(`*[_type=="product"]`);
  return response;
};

const Home = async () => {
  const data = await getData();
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((e: any) => (
            <div key={e.id} className="px-4 py-8">
              <Link href={`/products/${e.name}`}>
              <img
                height={300}
                alt={e.image.alt}
                src={urlFor(e.image).url()}
                className="rounded-md h-60"
              />
              </Link>
              <div className="text-lg">{e.name}</div>
              <p className="text-lg font-bold">Rs: {e.price}/-</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

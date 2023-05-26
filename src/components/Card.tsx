/* eslint-disable @next/next/no-img-element */
import React from "react";
import data from "./data.json";

const Card = ({ resource }: any) => {
  return (
    <div className="flex flex-col shrink-0 mx-4 relative">
      <img src={resource.imageUrl} alt="" className="hover:scale-105 ease-in-out duration-300 rounded-md" />
      <h3 className="font-medium md:font-bold text-xl pt-0 sm:pt-1 md:pt-2 lg:pt-4">{resource.title}</h3>
      <h2 className="md:font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">{resource.price}</h2>
    </div>
  );
};

export default Card;

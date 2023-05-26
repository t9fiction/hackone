/* eslint-disable @next/next/no-img-element */
import React from "react";
import data from "./data.json";

const Card = ({ resource }: any) => {
  console.log({ resource });
  return (
    <div className="flex flex-col shrink-0 mx-4 relative">
      <img src={resource.imageUrl} alt="" className="w-[300px] hover:scale-105 ease-in-out duration-300 rounded-md" />
      <h3 className="font-bold text-xl pt-4">{resource.title}</h3>
      <h2 className="font-bold text-3xl">{resource.price}</h2>
    </div>
  );
};

export default Card;

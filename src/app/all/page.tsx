import { getData } from "@/functions/allfunction";
import React from "react";

const Home = async () => {
  const data = await getData();
  console.log(data, "query response");
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8">
        All products page Under Construction
      </div>
    </div>
  );
};

export default Home;

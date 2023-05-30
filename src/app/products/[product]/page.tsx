import React from "react";
import { client } from "../../../../sanity/lib/client";

const Home = ({ params }: any) => {
  const slug = params.product;

  const response = client.fetch(`*[_type=="product" && name==${slug}]`);
  console.log(response);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 ">
        {slug}
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { client } from "../../../../sanity/lib/client";

const Home = ({ params }: any) => {
  const pname = params.product;

  const response = client.fetch(`*[_type=="product" && name==${pname}]`);
  console.log(response)

  return (
    <>
      <div>{pname}</div>
    </>
  );
};

export default Home;

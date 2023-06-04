import React from "react";
import { client } from "../../../../sanity/lib/client";
import ProdcutDetail from "@/components/ProdcutDetail";

const Home = async (params: any) => {
  const product = params?.params?.product;
  // console.log(product);
  const response = await client.fetch(
    `*[_type=="product" && _id=="${product}"]`
  );

  console.log(response, "response");

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 ">
        {/* Left column */}
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProdcutDetail />
          </div>

          {/* right column */}
          <div className="flex-[1] py-3 ">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {response[0].name}
            </div>
            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">
              {response[0].slug[1]}
            </div>
            {/* PRODUCT PRICE */}
            <div className="flex flex-col ">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377;{response[0].price}
              </p>
              <div className="text-md font-medium text-black/[0.5]">
                incl. of taxes
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-20">
                {`(Also includes all applicable duties)`}
              </div>
            </div>

            {/* SIZE START */}
            <div id="sizesGrid" className="grid grid-cols-3 gap-2">
              



            </div>
            {/* SIZE END */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

"use client";
import React from "react";
import { client } from "../../../../sanity/lib/client";
import ProdcutDetail from "@/components/ProdcutDetail";
import RelatedProducts from "@/components/RelatedProducts";
import ProductSize from "@/components/ProductSize";
// import ReactMarkdown from "react-markdown";


interface IContent {
  _key: string;
  text: string;
}

const ProductPage = async (params: any) => {
  const product_ = params?.params?.product;

  const product = await client.fetch(
    `*[_type=="product" && _id=="${product_}"]`
  );

  const category = product[0].category;
  const sizes = product[0].sizes;

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 ">
        {/* Left column */}
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            {/* @ts-expect-error Server Component */}
            <ProdcutDetail id={product_} />
          </div>

          {/* right column */}
          <div className="flex-[1] py-3 ">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {product[0].name}
            </div>
            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">
              {product[0].slug[1]}
            </div>
            {/* PRODUCT PRICE */}
            <div className="flex flex-col ">
              <p className="mr-2 text-lg font-semibold">
                MRP : € {product[0].price}
              </p>
              <div className="text-md font-medium text-black/[0.5]">
                incl. of taxes
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-20">
                {`(Also includes all applicable duties)`}
              </div>
            </div>

            {/* SIZE START */}
            <ProductSize sizes={sizes} product={product[0]} />

            {/* WHISHLIST BUTTON END */}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                {/* <p>{response[0].description}</p> */}
                <div>
                  {product[0].content[0].children.map((content: IContent) => (
                    <div key={content._key}> {content.text} </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* @ts-expect-error Server Component */}
        <RelatedProducts category={category} />
      </div>
    </div>
  );
};

export default ProductPage;

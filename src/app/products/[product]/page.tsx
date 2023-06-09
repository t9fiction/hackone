"use client";
import React from "react";
import { client } from "../../../../sanity/lib/client";
import ProdcutDetail from "@/components/ProdcutDetail";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from "@/components/RelatedProducts";
// import { useAppDispatch } from "@/store/store";
import { addToCart } from "@/store/Slices/cartSlice";

interface PSize {
  _key: string;
  size: string;
  quantity: number;
}

const ProductPage = async (params: any) => {
  // const dispatch = useAppDispatch();

  // const [selectedSize, setSelectedSize] = useState();
  // const [showError, setShowError] = useState(false);
  const product_ = params?.params?.product;
  // console.log(product);
  const product = await client.fetch(
    `*[_type=="product" && _id=="${product_}"]`
  );
  const category = product[0].category;
  const array = product[0].sizes;
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
                MRP : &#8377;{product[0].price}
              </p>
              <div className="text-md font-medium text-black/[0.5]">
                incl. of taxes
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-20">
                {`(Also includes all applicable duties)`}
              </div>
            </div>

            {/* SIZE START */}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                {/* Heading Start */}
                <div className="text-base font-semibold">Size Select</div>
                <div className="text-base font-medium text-black/[0.5]">
                  Size Guide
                </div>
              </div>
              {/* Heading End */}

              <div className="grid grid-cols-3 gap-2">
                {array?.map((element: PSize) => (
                    <div
                      className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                      key={element?._key}
                    >
                      {element?.size}
                  </div>
                ))}
              </div>
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* SIZE END */}
            </div>

            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              // onClick={() => {
              // if (!selectedSize) {
              //   setShowError(true);
              //   // document.getElementById("sizesGrid").scrollIntoView({
              //   //   block: "center",
              //   //   behavior: "smooth",
              //   // });
              // }
              // dispatch(addToCart("product1"));
              // }}
            >
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                {/* <p>{response[0].description}</p> */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aut nostrum voluptatum facilis neque aperiam laudantium
                  numquam voluptas nesciunt. Repellendus sunt exercitationem
                  perferendis est. Animi, fuga dolorum illum eius blanditiis
                  esse quam, velit sunt nisi rerum ad numquam maiores iusto.
                </p>
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

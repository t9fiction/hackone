"use client";
import { IoMdHeartEmpty } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { addToCart } from "@/store/Slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PSize {
  _key: string;
  size: string;
  quantity: number;
}

const ProductSize = ({ sizes, product }: any) => {
  const dispatch = useAppDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [showError, setShowError] = useState(false);

  console.log(product, "Product");
  const handleClick = (element: PSize) => {
    setSelectedSize(element.size);
    setShowError(false);
    console.log(selectedSize);
    console.log(showError);
  };

  const notify = () => {
    toast.success("Product added to cart", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    console.log(selectedSize);
    console.log(showError);
  }, [selectedSize, showError]);

  return (
    <div>
      <ToastContainer />
      <div className="mb-10">
        <div id="sizesGrid" className="flex justify-between mb-2">
          {/* Heading Start */}
          <div className="text-base font-semibold">Available Sizes</div>
          {/* <div className="text-base font-medium text-black/[0.5]">
                  Size Guide
                </div> */}
        </div>
        {/* Heading End */}

        {/* <div className="grid grid-cols-3 gap-2"> */}
        {sizes?.map((element: PSize) => (
          <div
            className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${
              selectedSize === element.size ? "bg-gray-200 border-black" : ""
            }`}
            key={element._key}
            onClick={() => handleClick(element)}
          >
            {element.size}
          </div>
        ))}
        {showError && (
          <div className="text-red-600 mt-1">Size selection is required</div>
        )}
      </div>
      {/* ADD TO CART BUTTON START */}
      <button
        className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
        onClick={() => {
          if (selectedSize == "") {
            setShowError(true);
            document.getElementById("sizesGrid")?.scrollIntoView({
              block: "center",
              behavior: "smooth",
            });
          } else {
            dispatch(
              addToCart({
                ...product,
                selectedSize,
              })
            );
            notify();
          }
        }}
      >
        Add to Cart
      </button>
      {/* ADD TO CART BUTTON END */}

      {/* WHISHLIST BUTTON START */}
      <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
        Whishlist
        <IoMdHeartEmpty size={20} />
      </button>
    </div>
  );
};

export default ProductSize;

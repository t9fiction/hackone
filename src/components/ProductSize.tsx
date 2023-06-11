"use client";
import React, { useState } from "react";

interface PSize {
  _key: string;
  size: string;
  quantity: number;
}

const ProductSize = ({ sizes }: any) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [showError, setShowError] = useState(true);

  console.log(sizes, "Sizes");
  const handleClick = (element: any) => {
    setSelectedSize(element.size);
    setShowError(false);
    console.log(selectedSize);
    console.log(showError);
  };
  return (
    <div>
      <div className="mb-10">
        <div className="flex justify-between mb-2">
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
            className={`border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer`}
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
    </div>
  );
};

export default ProductSize;

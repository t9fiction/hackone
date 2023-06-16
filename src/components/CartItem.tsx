/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartItemType } from "../../types/Product";
import { urlFor } from "@/functions/allfunction";
import { updateCart, removeFromCart } from "@/store/Slices/cartSlice";
import { useAppDispatch } from "@/store/hooks";

interface CartItemProps {
  data: CartItemType;
}
interface SelectedSize {
  quantity: number;
  size: string;
  _key: string;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  const updateCartItems = (event: any, task: string) => {
    let payload = {
      task: task,
      val: event.target.value,
      _id: data._id,
    };
    dispatch(updateCart(payload));
  };
  console.log(data.images[0].image);
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[80px]">
        <img
          src={urlFor(data.images[0].image).url()}
          alt={data.images[0].image.alt}
          className="rounded-md w-32 h-28"
        />
      </div>
      {/* IMAGE END */}
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {data.name}
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {data._type}
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : € {data.price}
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {data._type}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black px-1"
                onChange={(e) => {
                  updateCartItems(e, "selectedSize");
                }}
              >
                {data.sizes.map((item: SelectedSize) => (
                  <option
                    key={item._key}
                    className="px-1 py-1"
                    value={data.size}
                    selected={data.size === item.size}
                  >
                    {item.size}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                onChange={(e) => {
                  updateCartItems(e, "quantity");
                }}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map(
                  (quantity, i) => {
                    return (
                      <option
                        key={i}
                        value={quantity}
                        selected={data.quantity === quantity}
                      >
                        {quantity}
                      </option>
                    );
                  }
                )}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={() =>
              dispatch(
                removeFromCart({
                  _id: data._id,
                })
              )
            }
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

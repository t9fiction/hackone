/* eslint-disable @next/next/no-img-element */
"use client";
import CartItem from "@/components/CartItem";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);
  const subTotal = useMemo(() => {
    return cartItems.reduce((total, val) => total + val.price, 0);
  }, [cartItems]);
  // const [item, setItem] = useState({
  //   name: "Apple AirPods",
  //   description: "Latest Apple AirPods.",
  //   image:
  //     "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
  //   quantity: 1,
  //   price: 999,
  // });

  // Stripe
  const publishableKey = process.env
    .NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;
  const stripePromise = loadStripe(publishableKey);

    const makePaymentRequest = async (payload: any) => {
    setLoading(true);
    const stripe = await stripePromise;

    const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://hackathon-one-tau.vercel.app';
  
    const checkoutSession = await fetch(`${redirectURL}/api/stripe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems: payload }), // Send cartItems as the payload
    });
  
    const session = await checkoutSession.json();
  
    const result = await stripe?.redirectToCheckout({
      sessionId: session.sessionId,
    });
    if (result?.error) {
      alert(result.error.message);
    }
    setLoading(false);
  };
  
  

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 ">
        {cartItems.length > 0 ? (
          <>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>

            {/* CART CONTENT START */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* CART ITEMS START */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {cartItems.map((item) => (
                  <CartItem key={item._id} data={item} />
                ))}
                {/* <CartItem /> */}
                {/* <CartItem /> */}
              </div>
              {/* CART ITEMS END */}

              {/* SUMMARY START */}
              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>
                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                    € {subTotal}
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    The subtotal reflects the total price of your order,
                    including duties and taxes, before any applicable discounts.
                    It does not include delivery costs and international
                    transaction fees.
                  </div>
                </div>

                {/* BUTTON START */}
                <button
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  onClick={() => makePaymentRequest( cartItems )}
                >
                  Checkout
                  {loading && <img src="/images/spinner.svg" alt="spinner" />}
                </button>
                {/* BUTTON END */}
              </div>
              {/* SUMMARY END */}
            </div>
            {/* CART CONTENT END */}
          </>
        ) : (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/images/empty-cart.jpg"
              alt=""
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
            />
            <span className="text-xl font-bold">Your cart is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              href="/"
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

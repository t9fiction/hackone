import React from "react";
import Link from "next/link";

const Failed = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 ">
        <div className="min-h-[650px] flex items-center">
          <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
            <div className="text-2xl font-bold">Payment failed!</div>
            <div className="text-base mt-5">
              For any product related query, drop an email to
            </div>
            <div className="underline">financeteam@hackathon.com</div>

            <Link href="/" className="font-bold mt-5">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Failed;

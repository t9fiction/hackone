"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setnav] = useState(true);

  const handleClick = () => setnav(!nav);
  return (
    <header className="bg-white text-primary">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-4 flex items-center h-24">
        {/* Logo */}
        <div className="mr-auto flex-shrink-0">
          <Link href={"/"}>
            <Image
              className=""
              width={140}
              height={140}
              src="/images/Logo.webp"
              alt=""
            />
          </Link>
        </div>

        <div className=" mx-auto px-4 py-1 items-center space-x-8 lg:flex hidden">
          <Link href={"/female"}>Female</Link>
          <Link href={"/male"}>Male</Link>
          <Link href={"/kids"}>Kids</Link>
          <Link href={"/all"}>All Products</Link>
        </div>

        <div className="lg:flex hidden mx-auto items-center space-x-2 bg-white py-1 px-2 rounded-md border-gray-100 border">
          <span>
            <MdSearch size={24} />
          </span>
          <input
            className="outline-none w-72"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="ml-auto hidden lg:flex">
          <div className="bg-gray-100 rounded-full items-center justify-center text-center flex w-10 h-10">
            <BsCart4 size={26} />
          </div>
        </div>

        <div className="flex lg:hidden ml-auto">
          {nav ? (
            <div onClick={handleClick}>
              <HiOutlineMenu size={35} />
            </div>
          ) : (
            <div onClick={handleClick}>
              <RxCross1 size={35} />
            </div>
          )}
        </div>
      </div>
      {!nav && (
        <div className="flex flex-col mx-auto px-4 space-y-8 bg-gray-300 py-8 rounded-md text-black  justify-center lg:hidden absolute top-20 right-24">
          <Link href={"/female"} className="hover:text-white" onClick={handleClick}>
            Female
          </Link>
          <Link href={"/male"} className="hover:text-white" onClick={handleClick}>
            Male
          </Link>
          <Link href={"/kids"} className="hover:text-white" onClick={handleClick}>
            Kids
          </Link>
          <Link href={"/all"} className="hover:text-white" onClick={handleClick}>
            All Products
          </Link>
        </div>
      )}

      {/* <hr /> */}
    </header>
  );
};

export default Navbar;

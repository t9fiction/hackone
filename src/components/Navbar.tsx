import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdSearch } from 'react-icons/md';
import { BsCart4 } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-8 py-1 flex items-center h-20">
        {/* Logo */}
        <div className="mr-auto flex-shrink-0">
          <Image
            className=""
            width={140}
            height={140}
            src="/logo/Logo.webp"
            alt=""
          />
        </div>

        <div className=" mx-auto px-4 py-1 items-center space-x-12 lg:flex hidden">
            <Link href={''}>Female</Link>
            <Link href={''}>Male</Link>
            <Link href={''}>Kids</Link>
            <Link href={''}>All Products</Link>
        </div>
        
        <div className="lg:flex hidden mx-auto items-center space-x-2 bg-white py-1 px-2 rounded-md border-gray-100 border">
          <span>
            <MdSearch size={24} />
          </span>
          <input className="outline-none w-72" type="text" placeholder="Search" />
        </div>

        <div className="ml-auto hidden lg:flex">
            <div className="bg-gray-100 rounded-full items-center justify-center text-center flex w-10 h-10">
            <BsCart4 size={32} />
            </div>
        </div>

<div className="flex lg:hidden ml-auto">
    <HiOutlineMenu size={35} />
</div>

      </div>

      {/* <hr /> */}
    </header>
  );
};

export default Navbar;

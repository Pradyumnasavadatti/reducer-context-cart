"use client";
import React from "react";
import CartBtn from "../home/CartBtn";
import Link from "next/link";
import SearchBar from "@/components//searchBar/SearchBar";

function Navbar() {
  return (
    <div className="w-full text-4xl text-white text-center p-10 flex justify-between items-center">
      <Link href="/home">Shopy Shop</Link>
      <div className="w-[60%] flex justify-evenly items-center">
        <SearchBar />
        <Link href="/cart">
          <CartBtn />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

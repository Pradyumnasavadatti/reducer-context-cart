"use client";
import { useCart } from "@/context/Index";
import React, { useEffect, useState } from "react";

function Index() {
  const cartContext = useCart();

  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      cartContext?.dispatch({ type: "SET_SEARCH_KEY", searchKey: searchKey });
    }, 500);
    return () => clearTimeout(timer);
  }, [searchKey]);

  const handleChange = (e: any) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className="w-[40%] p-2">
      <input
        type="text"
        className="w-full p-1 text-lg text-black outline-0 bg-[rgba(255,255,255,0.8)]"
        placeholder="Search here..."
        value={searchKey}
        onChange={handleChange}
      />
    </div>
  );
}

export default Index;

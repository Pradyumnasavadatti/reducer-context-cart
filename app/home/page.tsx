"use client";
import Items from "@/components/home/Items";
import { data } from "@/components/home/data";
import { useCart } from "@/context/Index";
import React from "react";

function page() {
  const cartContext = useCart();
  const filteredData = data.filter((item) =>
    item.name
      .toLowerCase()
      .includes(cartContext?.state.searchKey.toLowerCase() || "")
  );
  return <Items data={filteredData} />;
}

export default page;

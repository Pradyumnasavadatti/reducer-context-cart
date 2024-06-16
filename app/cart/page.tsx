"use client";
import Items from "@/components/home/Items";
import { data, dataType } from "@/components/home/data";
import { useCart } from "@/context/Index";
import React from "react";

function page() {
  const cartContext = useCart();
  const cartItems: dataType[] = data.filter(
    (item) =>
      cartContext?.state.cart.includes(item.id) &&
      item.name
        .toLowerCase()
        .includes(cartContext.state.searchKey.toLowerCase())
  );
  if (cartItems.length > 0) {
    return <Items data={cartItems} />;
  }

  return (
    <div className=" w-full p-5 text-[rgba(255,255,255,0.7)] text-2xl text-center">
      No items added to cart
    </div>
  );
}

export default page;

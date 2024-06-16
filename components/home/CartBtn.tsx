"use client";
import { useCart } from "@/context/Index";
import React from "react";

function CartBtn() {
  const cartContext = useCart();
  const length = cartContext?.state.cart.length ?? 0;
  return (
    <div className="rounded-lg bg-slate-100 p-3 w-fit text-black relative overflow-hidden text-sm px-5">
      Cart
      <div className="absolute right-0 top-0 bg-red-500 text-white p-1">
        {length > 9 ? "+9" : length}
      </div>
    </div>
  );
}

export default CartBtn;

"use client";
import React from "react";
import { dataType } from "./data";
import { useCart } from "@/context/Index";

function Item({ data }: { data: dataType }) {
  const cartContext = useCart();

  const handleClick = () => {
    cartContext?.dispatch({ type: "ADD_TO_CART", itemId: data.id });
  };
  const handleClickRemove = () => {
    cartContext?.dispatch({ type: "REMOVE_FROM_CART", itemId: data.id });
  };
  const isExistCartItem = cartContext?.state.cart.includes(data.id);
  return (
    <div className="w-full h-[45vh] flex justify-evenly items-center flex-col relative">
      <div className="w-[80%] h-[50%] text-gray-600 flex items-center justify-center text-3xl">
        P I C
      </div>
      <div className="w-full p-2">
        <h3 className="text-white text-2xl">{data.name}</h3>
      </div>
      <div className="w-full p-2">
        <p className="text-white text-sm">{data.desc.split("", 50)}...</p>
      </div>
      {!isExistCartItem && (
        <div
          onClick={handleClick}
          className="absolute border-[rgba(255,255,255,0.5)] border-[0.1vmax] text-[rgba(255,255,255,0.7)] bg-[rgba(255,255,255,0.1)] left-4 top-4 p-2"
        >
          Add to Cart
        </div>
      )}
      {isExistCartItem && (
        <div
          onClick={handleClickRemove}
          className="absolute border-[rgba(255,255,255,0.5)] border-[0.1vmax] text-[rgba(255,255,255,0.7)] bg-[rgba(255,0,0,0.1)] left-4 top-4 p-2"
        >
          Remove from Cart
        </div>
      )}
    </div>
  );
}

export default Item;

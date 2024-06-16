"use client";
import React from "react";
import { useContext, useReducer, Dispatch } from "react";
import { createContext } from "react";

const initValue = {
  cart: [],
  searchKey: "",
};
const context = createContext<
  | { state: { cart: Number[]; searchKey: string }; dispatch: Dispatch<any> }
  | undefined
>(undefined);

const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.itemId] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart.filter((i: Number) => i != action.itemId)],
      };
    case "SET_SEARCH_KEY":
      return {
        ...state,
        searchKey: action.searchKey,
      };
    default:
      state;
  }
};

function Index({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initValue);
  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
}

export default Index;

export const useCart = () => {
  return useContext(context);
};

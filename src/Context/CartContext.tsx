import React, { createContext, useEffect, useState } from "react";

import { Product } from "../Components/Products.type";

type CartContextProviderProps = {
  children: React.ReactNode;
};
export type CartContextType = {
  userCart: Product[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  removeAll: () => void;
  shop: Product[];
};
export const CartContext = createContext({} as CartContextType);

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [userCart, setUserCart] = useState<Product[]>([]);
  const [shop, setShop] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((data) => setShop(data));
  }, []);

  const addProduct = (id: number) => {};
  const removeProduct = (id: number) => {};
  const removeAll = () => {};
  return (
    <CartContext.Provider
      value={{
        addProduct,
        removeProduct,
        removeAll,
        userCart,
        shop,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

import React, { createContext, useEffect, useState } from "react";

import { Product } from "../Components/Products.type";

type CartContextProviderProps = {
  children: React.ReactNode;
};
export type CartContextType = {
  userCart: Product[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  removeAllProducts: () => void;
  shop: Product[];
};
export const CartContext = createContext({} as CartContextType);

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [userCart, setUserCart] = useState<Product[]>([]);
  const [shop, setShop] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = (await resp.json()) as Product[];
      setShop(data);
    })();
  }, []);

  const productMap = new Map();
  userCart.forEach((product) => productMap.set(product.id, product));

  const addProduct = (productId: number) => {
    const product = productMap.get(productId);
    if (product) {
      product.count++;
    } else {
      const productInCart = shop.find(
        (product) => product.id === productId
      ) as Product;
      productMap.set(productId, { ...productInCart, count: 1 });
    }
    setUserCart([...productMap.values()]);
  };

  const removeProduct = (productId: number) => {
    setUserCart((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const removeAllProducts = () => setUserCart([]);

  return (
    <CartContext.Provider
      value={{
        addProduct,
        removeProduct,
        removeAllProducts,
        userCart,
        shop,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

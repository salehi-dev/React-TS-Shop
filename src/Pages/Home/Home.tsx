import React, { useContext } from "react";

import "./Home.css";
import ProductCard from "../../Components/ProductCard";
import { CartContext } from "../../Context/CartContext";

export default function Home() {
  const context = useContext(CartContext);
  return (
    <>
      <section>
        <p className="title">All Products</p>
      </section>
      {/* <img className="index-first-bg" src="/hero-gradient.svg" alt="" /> */}
      <main className="main-index">
        {context.shop.map((product) => (
          <ProductCard key={product.id} {...product}/>
        ))}
      </main>
    </>
  );
}

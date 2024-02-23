import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";

import "./Cart.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import StartProvider from "../Components/StartProvider";
import { Product } from "../Components/Products.type";

export default function Cart() {
  const context = useContext(CartContext);
  const { userCart } = context;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    userCart.forEach((item) => {
      setProducts((prev) => [...prev, item]);
    });
  }, userCart);

  return (
    <>
      {userCart.length !== 0 ? (
        <>
          <section className="cart-topbar">
            <p className="title">All Products In Basket:</p>
            <button>
              Remove All Product <AiOutlineDelete className="delete-icon" />
            </button>
          </section>
          <main className="card-index">
            {products.map((item) => (
              <div key={item.id} className="card">
                <img src={item.image} alt="" />
                <main>
                  <p>{item.title}</p>
                  <div className="card-details">
                    <StartProvider {...item}/>
                    <p>${item.price}</p>
                  </div>
                  <div className="product-count">
                    <p>Count: {item.count}</p>
                  </div>
                  <button>Remove From Basket</button>
                </main>
              </div>
            ))}
          </main>
        </>
      ) : (
        <div className="emptyBasket">
          <img src="/empty.webp" alt="" />
          <p>Your Basket Is Empty :((</p>
        </div>
      )}
    </>
  );
}

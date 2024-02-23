import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";

import "./Cart.css";
import { CartContext } from "../Context/CartContext";
import StartProvider from "../Components/StartProvider";

export default function Cart() {
  const context = useContext(CartContext);
  const { userCart, removeAllProducts, removeProduct } = context;

  return (
    <>
      {userCart.length !== 0 ? (
        <>
          <section className="cart-topbar">
            <p className="title">All Products In Basket:</p>
            <button onClick={removeAllProducts}>
              Remove All Product <AiOutlineDelete className="delete-icon" />
            </button>
          </section>
          <main className="card-index">
            {userCart.map((item) => (
              <div key={item.id} className="card">
                <img src={item.image} alt="" />
                <main>
                  <p>{item.title}</p>
                  <div className="card-details">
                    <StartProvider {...item} />
                    <p>${item.price}</p>
                  </div>
                  <div className="product-count">
                    <p>Count: {item.count}</p>
                  </div>
                  <button onClick={() => removeProduct(item.id)}>
                    Remove From Basket
                  </button>
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

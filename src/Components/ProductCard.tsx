import React, { useContext } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import "./ProductCard.css";
import { Product } from "./Products.type";
import { CartContext } from "../Context/CartContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  title,
  price,
  image,
  rating,
  id,
}: Product) {
  const { rate, count } = rating;
  const context = useContext(CartContext);
  const navigate = useNavigate();
  // محاسبه تعداد ستاره‌های کامل
  const fullStars = Math.floor(rate);
  // محاسبه تعداد ستاره‌های نیمه‌پر
  const halfStars = Math.round(rate - fullStars) % 2;
  // محاسبه تعداد ستاره‌های خالی
  const emptyStars = 5 - fullStars - halfStars;
  const addProductHandler = () => {
    context.addProduct(id);
    swal({
      title: "Product has been added to the cart",
      icon: "success",
      buttons: ["Ok", "Go to cart"],
    }).then((result) => {
      if (result) {
        navigate("/cart");
      }
    });
  };
  return (
    <div className="card">
      <img src={image} alt={title} />
      <main>
        <p>{title}</p>
        <div className="card-details">
          <div className="rating">
            {Array(fullStars)
              .fill(<AiFillStar style={{ color: "#FFE234" }} />)
              .concat(
                Array(halfStars).fill(
                  <AiFillStar style={{ color: "#FFE234" }} />
                )
              )
              .concat(Array(emptyStars).fill(<AiOutlineStar />))}
          </div>
          <p>${price}</p>
        </div>
        <button onClick={addProductHandler}>Add to Basket</button>
      </main>
    </div>
  );
}

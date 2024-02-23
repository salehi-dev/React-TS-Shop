import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import "./ProductCard.css";
import { Product } from "./Products.type";

export default function ProductCard({ title, price, image, rating }: Product) {
  const { rate, count } = rating;

  // محاسبه تعداد ستاره‌های کامل
  const fullStars = Math.floor(rate);

  // محاسبه تعداد ستاره‌های نیمه‌پر
  const halfStars = Math.round(rate - fullStars) % 2;

  // محاسبه تعداد ستاره‌های خالی
  const emptyStars = 5 - fullStars - halfStars;

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
        <button>Add to Basket</button>
      </main>
    </div>
  );
}

import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { Product } from "./Products.type";

export default function StartProvider({ rating }: Product) {
  const { rate } = rating;
  const fullStars = Math.floor(rate);
  const halfStars = Math.round(rate - fullStars) % 2;
  const emptyStars = 5 - fullStars - halfStars;
  return (
    <div className="rating">
      {Array(fullStars)
        .fill(<AiFillStar style={{ color: "#FFE234" }} />)
        .concat(
          Array(halfStars).fill(<AiFillStar style={{ color: "#FFE234" }} />)
        )
        .concat(Array(emptyStars).fill(<AiOutlineStar />))}
    </div>
  );
}

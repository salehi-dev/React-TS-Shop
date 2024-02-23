import { useContext } from "react";

import "./ProductCard.css";
import { Product } from "./Products.type";
import { CartContext } from "../Context/CartContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import StartProvider from "./StartProvider";

export default function ProductCard(props: Product) {
  const { title, price, image, id } = props;
  const context = useContext(CartContext);
  const navigate = useNavigate();
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
          <StartProvider {...props} />
          <p>${price}</p>
        </div>
        <button onClick={addProductHandler}>Add to Basket</button>
      </main>
    </div>
  );
}

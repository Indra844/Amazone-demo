import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addtoBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        title: title,
        price: price,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <div className="product_price">
          <strong>₹ {price}</strong>
        </div>
      </div>

      <img className="product_image" src={image} alt="" />
      <button onClick={addtoBasket}>Add to cart</button>
    </div>
  );
}

export default Product;

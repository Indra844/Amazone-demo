import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const RemoveFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div>
      <div className="checkOut_product_detail">
        <div className="checkout_product">
          <img className="product_image" src={image} alt="" />
          <div className="checkOut_product_info">
            <p>{title}</p>
            <p>
              <small> ₹</small>
              <strong>{price}</strong>
            </p>
          </div>
        </div>
        {!hideButton && (
          <button onClick={RemoveFromBasket}>Remove this item</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;

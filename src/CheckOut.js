import React from "react";
import "./CheckOut.css";
import SubTotal from "./SubTotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function CheckOut() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkOut">
      <div className="checkOut_page">
        <img
          className="banner"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/MARCH_2020/SVD_Teaser/Desktop_Teaser_Header.jpg"
          alt=""
        />
        <h1>Shopping Cart</h1>
        {basket.length == 0 ? (
          <h1>Your Basket is empty</h1>
        ) : (
          basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))
        )}
      </div>
      <SubTotal />
    </div>
  );
}

export default CheckOut;

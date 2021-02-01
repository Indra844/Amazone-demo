import React from "react";
import "./SubTotal.css";
import { useStateValue } from "./StateProvider";
import { basketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  const getTotal = basketTotal(basket);
  const history = useHistory();
  console.log("price = ", getTotal);
  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):
              <strong>{`${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button
        className="subTotal_button"
        onClick={(e) =>
          basket.length != 0
            ? history.push("/payment")
            : alert("Add items to basket")
        }
      >
        Proceed to buy
      </button>
    </div>
  );
}

export default SubTotal;

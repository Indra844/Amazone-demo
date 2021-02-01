import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon fontSize="large" />
        <Link to="/">
          <img
            src="https://safeinwarwickshire.files.wordpress.com/2016/11/amazon.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="header_center">
        <input type="text" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_right">
        <Link to={!user && "/login"}>
          <div onClick={login} className="header_right_text">
            {user ? (
              <p>
                Hello {user.email},<h6>SignOut</h6>
              </p>
            ) : (
              <p>Hello,SignIn</p>
            )}
            <h4>Account</h4>
          </div>
        </Link>
        <div
          className="header_right_text"
          onClick={(e) => history.push("/orders")}
        >
          <p>Returns</p>
          <h4>Orders</h4>
        </div>
        <div className="header_right_text">
          <p>Try</p>
          <h4>Prime</h4>
        </div>
        <Link to="/checkout">
          <div className="header_right_basket">
            <ShoppingBasketIcon />
            {basket.length == 0 ? (
              <span className="basket_count">0</span>
            ) : (
              <span className="basket_count">{basket.length}</span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

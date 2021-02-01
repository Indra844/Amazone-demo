import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Orders from "./Orders";
import Home from "./Home";
import CheckOut from "./CheckOut";
import Payment from "./Payment";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const [{ basket }, dispatch] = useStateValue();
  const promise = loadStripe(
    "pk_test_51HQGLyHqfXBtcPIGZXPRv9oWpbkXDq1HaHIqcpriZaA5rzcTKI9BYh6pCBAxh6tGNzEj1WKafE98iXpnaP8vTpKu00MMmnZeHQ"
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Switch>
        <div className="app">
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;

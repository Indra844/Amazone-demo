import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch(alert("Create Account first"));
  };

  const handleCreate = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      history.push("/");
    });
  };

  return (
    <div className="login">
      <img
        src="https://www.citypng.com/public/uploads/preview/-11596409153ixy8eolhxq.png"
        alt=""
      />
      <div className="login_form">
        <h2>SignIn</h2>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <button type="submit" onClick={handleLogin} className="signin_btn">
            Signin
          </button>
          <button type="submit" onClick={handleCreate} className="create_btn">
            Create amazone account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

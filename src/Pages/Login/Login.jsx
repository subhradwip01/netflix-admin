import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./Login.css";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    is: false,
    message: "",
  });
  const navigate=useNavigate();

  const { isFetching, error, dispatch, user } = useContext(AuthContext);

  const valueChangeHandler = (e) => {
    setErr({
      is: false,
      message: "",
    });
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (data.email === "" || data.password === "") {
      setErr({
        is: true,
        message: "Please Provide All the Info!",
      });
      return;
    }
    await login({ username: data.email, password: data.password }, dispatch);
    
  };

 
  return (
    <div className="login">
      {err.is || error.has && (
          <div className="errMsg">{err.message || error.message}</div>
        )}

      <form className="loginForm">
        <div className="adminImg">
          <img
            src="https://thumbs.dreamstime.com/b/user-glyph-icon-web-mobile-admin-sign-vector-graphics-solid-pattern-white-background-eps-user-glyph-icon-web-mobile-103294421.jpg"
            alt="logo"
          />
        </div>

        <div className="formControl">
          <label>Username</label>
          <input
            className="formInput"
            onChange={valueChangeHandler}
            type="text"
            name="email"
          />
        </div>
        <div className="formControl">
          <label>Password</label>
          <input
            className="formInput"
            onChange={valueChangeHandler}
            type="password"
            name="password"
          />
        </div>
        <button
          disabled={isFetching}
          className="loginButton"
          onClick={loginHandler}
        >
          {isFetching ? "Logging..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;

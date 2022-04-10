import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/userActions";
import { userService } from "../../service/userService";
import { useForm } from "../../service/generalService/customHooks";

export const LoginForm = () => {
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();

  const [credLogin, handleChangeLogin, setCredLogin] = useForm(
    userService.getEmptyLogin()
  );

  const doLogin = async () => {
    try {
      dispatch(login(credLogin));
      setCredLogin({ username: "", password: "" });
    } catch (err) {
      setMsg("Login failed, try again.");
    }
  };

  return (
    <div className="loginForm ">
      <div className="formWrapper">
        <h2>Login</h2>
        <form>
          <input
            type="text"
            name="mail"
            value={credLogin.mail || ''}
            onChange={handleChangeLogin}
            placeholder="mail"
            autoComplete="mail"
          />
          <input
            name="password"
            type="password"
            value={credLogin.password || ''}
            onChange={handleChangeLogin}
            placeholder="Password"
            autoComplete="current-password"
          />
          <div className="loginActions flex space-between">
            <button
              className="login-btn "
              onClick={() => {
                doLogin();
              }}
            >
              Login
            </button>
            <button
              className="login-btn login-btn-toggle"
              onClick={() => dispatch({ type: "TOGGLE_LOGIN" })}
            >
              Sign-up
            </button>
          </div>
        </form>
      </div>

      <p>{msg}</p>
    </div>
  );
};

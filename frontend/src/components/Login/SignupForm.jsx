import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/actions/userActions";
import { userService } from "../../service/userService";
import { useForm } from "../../service/generalService/customHooks";

export const SignupForm = () => {
  const [msg, setMsg] = useState("");
  const toggleLogin = useSelector((state) => state.toggleLogin);
  const [credSignup, handleChangeSignup, setCredSignup] = useForm(
    userService.getEmptySignup()
  );
  const dispatch = useDispatch();

  const doSignup = async () => {
    const { username, password, confirmPassword, mail } = credSignup;
    if (!username || !password || !confirmPassword || !mail) {
      return setMsg("All inputs are required");
    }
    const signupCreds = { username, password, mail, confirmPassword };
    dispatch(signup(signupCreds));
    setCredSignup({
      username: "",
      password: "",
      confirmPassword: "",
      mail: "",
    });
  };

  return (
    <div className="loginForm signupForm">
      <div className="formWrapper">
        <h2>Signup</h2>
        <form>
          <input
            type="text"
            name="username"
            value={credSignup.username}
            onChange={handleChangeSignup}
            placeholder="Username"
            autoComplete="username"
          />
          <input
            name="mail"
            type="mail"
            value={credSignup.mail}
            onChange={handleChangeSignup}
            placeholder="mail"
            autoComplete="mail"
          />
          <input
            name="password"
            type="password"
            value={credSignup.password}
            onChange={handleChangeSignup}
            placeholder="Password"
            autoComplete="current-password"
          />
          <input
            name="confirmPassword"
            type="confirmPassword"
            value={credSignup.confirmPassword}
            onChange={handleChangeSignup}
            placeholder="Confirm Password"
            autoComplete="confirm-password"
          />
          <div className="loginActions flex space-between">
            <button
              className="login-btn "
              onClick={() => {
                doSignup();
              }}
            >
              Signup
            </button>
            <button
              className="login-btn login-btn-toggle"
              onClick={() => {
                dispatch({ type: "TOGGLE_LOGIN" });
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <p>{msg}</p>
    </div>
  );
};

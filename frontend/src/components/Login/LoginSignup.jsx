import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
// import "./_loginSignup.scss";

export const LoginSignup = () => {
  let history = useHistory();
  const toggleLogin = useSelector((state) => state.uiModule.toggleLogin);
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    if (loggedInUser) {
      history.push(`/home`);
    }
  }, [loggedInUser]);

  return (
    <div className="loginSignup">

      <div className="loginSignupWrapper ">
        <div className="leftLogin"></div>
        <div className="rightLogin">
          <div className="loginSignupForm animate__animated animate__fadeIn animate__slower">
            {toggleLogin ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

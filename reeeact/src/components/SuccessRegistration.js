import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";

function SuccessVerificationPage() {
  //change path
  const navigate = useNavigate();
  const changePath = (path) => {
    navigate(path);
  };

  return (
    <div className="auth-form-container">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Markata</h1>
      </div>
      <h2>You have sucessfully registered</h2>
      <h3>
        We have sent you an activation link in you email. Please activate your
        account by clicking on the link and proceed to login.
      </h3>
      <button onClick={() => changePath("/login")}>Login</button>
    </div>
  );
}

export default SuccessVerificationPage;

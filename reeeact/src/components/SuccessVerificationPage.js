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
      <h2>You have sucessfully activated you account 😁</h2>
      <h3>You may continue to the Login page now</h3>
      <button onClick={() => changePath("/login")}>Login</button>
    </div>
  );
}

export default SuccessVerificationPage;

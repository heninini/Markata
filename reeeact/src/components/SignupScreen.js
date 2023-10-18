import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import Modal from "./Modal";
import api, { baseAPI } from "../api/link";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import SuccessRegistration from "./SuccessRegistration";

// import "bootstrap/dist/css/bootstrap.css";

function SignupScreen(props) {
  const navigate = useNavigate();
  const changePath = (path) => {
    // navigate to path
    navigate(path);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const [strength, setStrength] = useState(0);

  const [checked, setChecked] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [isSubmitted, setSubmitted] = useState(false);
  const [isEmpty, setEmpty] = useState(false);

  const [date, setDate] = useState("");
  const [truthy, setTruthy] = useState();
  const [msg, setMsg] = useState("");

  const successRegistration = (SuccessRegistration) => {
    setTimeout(() => {
      navigate(SuccessRegistration);
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!email) {
      setEmpty(true);
    }
    console.log(fName);
    console.log(lName);
    console.log(password);
    console.log(email);
    console.log(date);
    let year = date.split(/-/)[0];
    let month = date.split(/-/)[1];
    let date_num = date.split(/-/)[2];
    console.log(date_num);
    console.log(year);
    console.log(month);
    const post = {
      firstName: fName,
      lastName: lName,
      emailId: email,
      password: password,
      month: month,
      date: date_num,
      year: year,
    };
    console.log("password strenght " + strength);
    if (strength < 74) {
      setTruthy(true);
      setMsg(
        "Password too weak. Please include numbers, Capital letters and more than 8 characters."
      );
      return;
    }
    try {
      setTruthy(false);
      const response = await api.post("/users", post);
      console.log("-- " + JSON.stringify(response) + " --");
      //TODO: After successful signup user goes to login page
      if (response.status == 200) {
        changePath("/SuccessRegistration");
      }
    } catch (err) {
      // errorUserExist(err.response.data);
      setTruthy(true);
      console.log("truthy " + truthy);
      // setMsg(err.response.data);

      if (err.response.status == 409) {
        setMsg(err.response.data);
        console.log("msg " + msg);
        console.log(`Error: ${err.response.data}`);
      } else {
        setMsg("Error happened. Please try again");
        console.log("msg " + msg);
        console.log(`Error: ${err.response.data}`);
      }
    }
  };

  // function errorUserExist(msg) {
  //   msg = msg.split(/./)[0];
  //   console.log("inside error" + msg);
  //   const truthy = true;
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  // };

  const calculateStrength = (password) => {
    const lengthScore = Math.min(password.length / 8, 1); // Normalize the length score
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    const complexityScore =
      (hasUpperCase + hasLowerCase + hasNumber + hasSpecialChar) / 4;

    const strengthPercentage = ((lengthScore + complexityScore) / 2) * 100;
    return strengthPercentage;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const strengthPercentage = calculateStrength(newPassword);
    setStrength(strengthPercentage);
  };

  const getPasswordColor = () => {
    if (strength < 25) {
      return "red";
    } else if (strength < 50) {
      return "orange";
    } else if (strength < 75) {
      return "#F3D421";
    } else {
      return "lightgreen";
    }
  };

  const handleChange = () => {
    setChecked(!checked);
  };
  // Terms and conditions
  const [terms, setTerms] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = baseAPI + "/Terms/1";
      try {
        const response = await axios.get(apiUrl);
        console.log(response.data.terms);
        setTerms(response.data.terms);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // Call the async function
    fetchData();
  }, []);

  return (
    <div className="auth-form-container">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Markata</h1>
      </div>
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="fName lName">Full Name</label>
        <div className="side-by-side">
          <input
            value={fName}
            name="fName"
            onChange={(e) => setFName(e.target.value)}
            id="fName"
            placeholder="Enter first name"
            required
            className={isEmpty && isSubmitted ? "error" : ""}
          />
          <input
            value={lName}
            name="lName"
            onChange={(e) => setLName(e.target.value)}
            id="lName"
            placeholder="Enter last name"
            required
            className={isEmpty && isSubmitted ? "error" : ""}
          />
        </div>

        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
          id="email"
          name="email"
          required
          className={isEmpty && isSubmitted ? "error" : ""}
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          placeholder="Enter password"
          id="password"
          name="password"
          data-testid="password"
          required
          className={isEmpty && isSubmitted ? "error" : ""}
        />
        <div
          className="password-strength-bar"
          style={{
            width: `${strength}%`,
            maxWidth: "150%",
            backgroundColor: getPasswordColor(),
          }}
        ></div>
        <label htmlFor="date">Date of Birth</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          id="date"
          name="date"
          data-testid="date"
          required
          className={isEmpty && isSubmitted ? "error" : ""}
        />

        {truthy ? <p style={{ color: "red" }}>{`${msg}`}</p> : <p></p>}

        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            required
          />{" "}
          Agree the terms and conditions.{" "}
          <span className="link-btn" onClick={() => setIsOpen(true)}>
            Read Here
          </span>
          <div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              {terms}
            </Modal>
          </div>
        </div>
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account?{" "}
        <span className="link-btn" onClick={() => changePath("/login")}>
          Login here
          {/* <Link to="/login"> Login here </Link> */}
        </span>
      </p>
    </div>
  );
}

export default SignupScreen;

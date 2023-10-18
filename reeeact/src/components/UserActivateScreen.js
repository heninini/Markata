import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/link";
import logo from "./logo.png";

// function UserActivateScreen() {
//   // const { truthy, setTruthy } = useState(false);
//   // const [token, setToken] = useState("Nati sample TOKENNNNN")
//   // token
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   // Access specific query parameters
//   const token = searchParams.get("token");
//   //   setToken(receivedToken);
//   console.log("Outside try   " + token);
//   try {
//     const url = `http://localhost:8080/users/activate-account?token=${token}`;

//     // api
//     //   .get(url)
//     //   .then(function (response) {
//     //     setTruthy(false);
//     //     console.log(response);
//     //     console.log("-- " + JSON.stringify(response) + " --");
//     //     changePath("/SuccessRegistration");
//     //     return;
//     //   })
//     //   .catch((err) => {
//     //     setTruthy(true);
//     //     console.log("truthy " + truthy);
//     //     // setMsg(err.response.data);
//     //     setMsg(err.response.data);
//     //     console.log("msg " + msg);
//     //     console.log(`Error: ${err.response.data}`);
//     //     console.log(err.response);
//     //   });

//     api
//       .get("/users/activate-account", {
//         params: {
//           token: token,
//         },
//         // token: "http://localhost:8080/users/activate-account?token=" + token,
//         // token: token,
//       })
//       .then((data) => {
//         setTruthy(false);
//         console.log("This is the response: " + data);
//         // console.log("-- " + JSON.stringify(data) + " --");
//         console.log(data.status);
//         if (data.status === 200) {
//           changePath("SuccessRegistration");
//         }
//         return;
//       })
//       .catch((err) => {
//         setTruthy(true);
//         console.log("truthy " + truthy);
//         // setMsg(err.response.data);
//         setMsg(err.response.data);
//         console.log("msg " + msg);
//         console.log(`Error: ${err.response.data}`);
//         console.log(err.response);
//       });
//   } catch (error) {
//     // Handle any other errors that occur outside of the API request
//     console.error("Last error" + error);
//   }
//   console.log("After try  " + token);

//   //change path
//   const navigate = useNavigate();
//   const changePath = (path) => {
//     setTimeout(() => {
//       navigate(path);
//     }, 9000);
//   };

//   const [truthy, setTruthy] = useState();
//   const [msg, setMsg] = useState("");

//   return (
//     <div className="auth-form-container">
//       <div className="logo">
//         <img src={logo} alt="logo" />
//         <h1>Markata</h1>
//       </div>
//       <h2>Thank you for starting the activation process...</h2>

//       {truthy ? <p style={{ color: "red" }}>{`${msg}`}</p> : <p></p>}
//     </div>
//   );
// }
// const UserActivateScreen = async () => {
//   // const [truthy, setTruthy] = useState(true);
//   // const [msg, setMsg] = useState("Processing.....");
//   // const { truthy, setTruthy } = useState(false);
//   // const [token, setToken] = useState("Nati sample TOKENNNNN")
//   // token
//   // let msg = "jkl";
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   // Access specific query parameters
//   const token = searchParams.get("token");
//   //   setToken(receivedToken);
//   console.log("Before   " + token);
//   try {
//     // setTruthy(truthy ? false : true);
//     const response = await api.get("/users/activate-account", {
//       params: {
//         token: token,
//       },
//     });
//     console.log(response);
//     if (response.status == 200) {
//       changePath("/login");
//     }
//   } catch (err) {
//     // Handle any other errors that occur outside of the API request
//     // setTruthy(truthy ? false : true);
//     // setMsg(err.response.data);
//     // msg = err.response.data;
//     console.error("Last error" + err.response);
//   }
//   console.log("After   " + token);

//   //change path
//   const navigate = useNavigate();
//   const changePath = (path) => {
//     setTimeout(() => {
//       navigate(path);
//     }, 2000);
//   };

//   return (
//     <div className="auth-form-container">
//       <div className="logo">
//         <img src={logo} alt="logo" />
//         <h1>Markata</h1>
//       </div>
//       <h2>Thank you for starting the activation process...</h2>

//       {/* {true ? <p style={{ color: "red" }}>{`${msg}`}</p> : <p></p>} */}
//     </div>
//   );
// };
const UserActivateScreen = () => {
  const [msg, setMsg] = useState(""); // Initialize msg as an empty string
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  useEffect(() => {
    async function activateAccount() {
      try {
        const response = await api.get("/users/activate-account", {
          params: {
            token: token,
          },
        });
        // console.log(response);
        console.log("No error");
        if (response.status === 200) {
          changePath("/SuccessVerificationPage");
        }
        return;
      } catch (err) {
        // console.log(err);
        setMsg(err.response.data); // Set msg to the error message
        // console.error("Last error", err.response);
      }
    }

    activateAccount(); // Call the async function when the component is mounted
  }, [token]); // Call activateAccount whenever the token changes

  const navigate = useNavigate();

  const changePath = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 2000);
  };

  return (
    <div className="auth-form-container">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Markata</h1>
      </div>
      <h2>Account will be activated</h2>
      {/* {msg && <p style={{ color: "red" }}>{msg}</p>} */}
    </div>
  );
};

export default UserActivateScreen;

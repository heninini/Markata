import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";
import UserActivateScreen from "./UserActivateScreen";
import SuccessVerificationPage from "./SuccessVerificationPage";
import SuccessRegistration from "./SuccessRegistration";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route
              path="/users/activate-account"
              element={<UserActivateScreen />}
            />
            <Route
              path="/SuccessVerificationPage"
              element={<SuccessVerificationPage />}
            />

            <Route
              path="/SuccessRegistration"
              element={<SuccessRegistration />}
            />
          </Routes>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;

{
  /* <div className="App">
<Router>
{currentForm === "login" ? (
  <LoginScreen onFormSwitch={toggleForm} />
) : (
  <SignupScreen onFormSwitch={toggleForm} />
)}

<Routes>
<Route path="/home" element={<HomeScreen/>} />
<Route path="/cart" element={<CartScreen/>} />
</Routes>

</Router>
</div> */
}

{
  /* <div className="App">
      <Router>
        <Routes>
          {currentForm === "login" ? (
            <Route
              path="/login"
              element={<LoginScreen onFormSwitch={toggleForm} />}
            />
          ) : (
            <Route
              path="/signup"
              element={<SignupScreen onFormSwitch={toggleForm} />}
            />
          )}

          <Route path="/home" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </Router>
    </div> */
}

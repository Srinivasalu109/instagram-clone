import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Signin from "./Routes/AuthenticateRoutes/Signin";
import HomePage from "./Routes/HomePage";
import Signup from "./Routes/AuthenticateRoutes/Signup";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </div>
  );
}
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

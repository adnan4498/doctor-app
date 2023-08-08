import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomLayout from "./customLayout/CustomLayout";
import Login from "./login/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route
        path="/*"
        element={
          isLoggedIn ? (
            <CustomLayout />
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} />
          )
        }
      />
    </Routes>
  );
};

export default App;

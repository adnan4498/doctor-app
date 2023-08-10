import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import CustomLayout from "./customLayout/CustomLayout";
import Login from "./login/Login";

const App = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const data = localStorage.getItem("token");
  //   if (data) {
  //     setToken(data);
  //   } else {
  //     navigate("/login", { replace: true }); // Use replace here to replace the history entry
  //   }
  // }, [navigate]);

  console.log("toekn in app.js" , token)

  return (
      // <Routes>
      //   {/* <Route exact path="/login" element={<Login setToken={setToken} />} /> */}
      //   {/* <Route  path="/*" element={<CustomLayout setToken={setToken} token={token} />} /> */}
      // </Routes>

      <>
      <Login/>
        {/* <CustomLayout/> */}
      </>
      
  );
};

export default App;

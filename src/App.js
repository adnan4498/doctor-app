import React, { useState } from "react";
import Login from "./login/Login";
// import { Route, Routes } from 'react-router-dom'
// import CustomLayout from "./customLayout/CustomLayout";
import { Route, Router, Routes } from "react-router-dom";
import CustomLayout from "./customLayout/CustomLayout";

const App = () => {

  const [validation, setValidation] = useState(false)

  console.log("first",validation)

  return (
    <>
      {/* {validation == false ? <Login  validation={validation} setValidation={setValidation} /> : <CustomLayout/>} */}

      <CustomLayout/>

      {/* <Routes>
        <Route path="/" element={<Login/>} />
      </Routes> */}
    </>
  );
};

export default App;

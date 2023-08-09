import React from "react";
import "../header/Header.css";

import logo from "../images/logo-white.png";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const Headers = ({setToken , token}) => {
  console.log("token in header" , token)
  const navigate = useNavigate()
  

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("")
    // console.log("NAVIGAE",navigate())
    navigate("/login" , { replace: true });
  };


  return (
    <>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="admin-div">
          <p>
            <span>
              <UserOutlined />
            </span>
            Admin
            <span className="logout-icon" onClick={handleLogout}>
              <LogoutOutlined />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Headers;

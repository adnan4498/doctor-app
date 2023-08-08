import React from "react";
import "../header/Header.css";

import logo from "../images/logo-white.png";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem("authToken");
    // Redirect to the login page
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

export default Header;

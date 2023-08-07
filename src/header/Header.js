import React from "react";
import "../header/Header.css";

import logo from "../images/logo-white.png";
import { UserOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="logo">
          <img src={logo} />
        </div>

        <div className="admin-div">
        <p><span><UserOutlined /></span>Admin</p>
        </div>
      </div>
    </>
  );
};

export default Header;

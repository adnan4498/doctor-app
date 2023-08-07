// App.js

import React from "react";
// import logo from './logo.svg';
import "../../src/App.css";
import { Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  AntCloudOutlined,
  BookOutlined,
  DashboardOutlined,
  DollarOutlined,
  SecurityScanOutlined,
  StarOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Header from "../header/Header";
import DoctorManagement from "../doctorManagement/DoctorManagement";
import Bookings from "../bookings/Bookings"
import Dashboard from "../dashboard/Dashboard"
import UserManagement from "../userManagement/UserManagement";
import DoctorDetails from "../doctorDetails/DoctorDetails";


const CustomLayout = (props) => {


  const navigate = useNavigate();

  return (
    // Use the "container" class to set full height for the container
    <>
     <Header/>
      <div className="container">
        <Menu
          onClick={({ key }) => {
            navigate(key);
          }}
          className="side-bar-items"
          items={[
            // { label: 'LOGO' },
            { label: "Dashboard", key: "/dashboard", icon: <DashboardOutlined /> },
            {
              label: "User Management",
              key: "/userManagement",
              icon: <UsergroupAddOutlined />,
            },
            {
              label: "Doctor Management",
              key: "/doctorManagement",
              icon: <SecurityScanOutlined />,
            },
            { label: "Bookings", key: "/bookings", icon: <BookOutlined /> },
            {
              label: "Locations",
              key: "/locations",
              icon: <AntCloudOutlined />,
            },
            { label: "Reviews", key: "/reviews", icon: <StarOutlined /> },
            { label: "Earnings", key: "/earnings", icon: <DollarOutlined /> },
          ]}
        ></Menu>
        <div style={{width: "100%"}}>
          <Content />
        </div>
      </div>
    </>
  );
}

function Content() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login/>}></Route> */}
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route
          path="/userManagement"
          element={<UserManagement/>}
        ></Route>
        <Route path="/doctorManagement" element={<DoctorManagement/>} > </Route>
        <Route path="/bookings" element={<Bookings/>}></Route>
        <Route path="/locations" element={<div>locations</div>}></Route>
        <Route path="/reviews" element={<div>reviews</div>}></Route>
        <Route path="/earnings" element={<div>earnings</div>}></Route>
        <Route path="/doctorDetails" element={<DoctorDetails/>}></Route>
      </Routes>
    </>
  );
}

export default CustomLayout;

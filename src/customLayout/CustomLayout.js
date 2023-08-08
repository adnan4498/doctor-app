// App.js

import React, { useEffect } from "react";
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
import Locations from "../locations/Locations";
import Reviews from "../reviews/Reviews";
import Earnings from "../earnings/Earnings";


const CustomLayout = (props) => {

  // useEffect(() => {
  //   // Attach the handleBrowserBack function to the onpopstate event
  //   window.onpopstate = handleBrowserBack;

  //   // Clean up the event handler when the component is unmounted
  //   return () => {
  //     window.onpopstate = null;
  //   };
  // }, []);

  const navigate = useNavigate();

  // // Function to handle browser back button
  // const handleBrowserBack = () => {
  //   // Navigate back only if not on the Login page
  //   if (window.location.pathname !== "/") {
  //     navigate(-1);
  //   }
  // };
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
            { label: "Dashboard", key: "/", icon: <DashboardOutlined /> },
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
        <Route path="/" element={<Dashboard/>}></Route>
        <Route
          path="/userManagement"
          element={<UserManagement/>}
        ></Route>
        <Route path="/doctorManagement" element={<DoctorManagement/>} > </Route>
        <Route path="/bookings" element={<Bookings/>}></Route>
        <Route path="/locations" element={<Locations/>}></Route>
        <Route path="/reviews" element={<Reviews/>}></Route>
        <Route path="/earnings" element={<Earnings/>}></Route>
        <Route path="/doctorDetails" element={<DoctorDetails/>}></Route>
      </Routes>
    </>
  );
}

export default CustomLayout;

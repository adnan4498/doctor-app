// App.js

import React, { useEffect } from "react";
// import logo from './logo.svg';
import "../../src/App.css";
import { Layout, Space } from "antd";

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
import Headers from "../header/Headers";
import DoctorManagement from "../doctorManagement/DoctorManagement";
import Bookings from "../bookings/Bookings";
import Dashboard from "../dashboard/Dashboard";
import UserManagement from "../userManagement/UserManagement";
import DoctorDetails from "../doctorDetails/DoctorDetails";
import Locations from "../locations/Locations";
import Reviews from "../reviews/Reviews";
import Earnings from "../earnings/Earnings";
// import Sider from "antd/es/layout/Sider";
// import { Footer } from "antd/es/layout/layout";
import SideBar from "../sideBar/SideBar";
import "../customLayout/CustomLayout.css";

const CustomLayout = ({ setToken, token }) => {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    // Use the "container" class to set full height for the container
    <>
      {/* <Header/> */}
      {/* <div className="container">
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
      </div> */}

        <Layout className="layout-class">
          <Header style={{height: "105px" , padding: "0px"}}>
            <Headers setToken={setToken} token={token} />
          </Header>
          <Layout>
            <Sider>
              <div className="side-bar-items">
                <SideBar />
              </div>
            </Sider>
            <Content style={{background:"white"}} >
              <Routes>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route path="/userManagement" element={<UserManagement />} />
                <Route
                  path="/doctorManagement"
                  element={<DoctorManagement />}
                />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/earnings" element={<Earnings />} />
                <Route path="/doctorDetails" element={<DoctorDetails />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>

      {/* <Layout>
        <Sider style={siderStyle}>
          <SideBar />
        </Sider>
        <Layout>
          <Header>
            {" "}
            <Headers />{" "}
          </Header>
          <Content>
            <Contents />
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout> */}
    </>
  );
};

export default CustomLayout;

// function Contents() {
//   return (
//     <>
//       <Routes>
//         {/* <Route path="/" element={<Login/>}></Route> */}
//         <Route path="/dashboard" element={<Dashboard />}></Route>
//         <Route path="/userManagement" element={<UserManagement />}></Route>
//         <Route path="/doctorManagement" element={<DoctorManagement />}>
//           {" "}
//         </Route>
//         <Route path="/bookings" element={<Bookings />}></Route>
//         <Route path="/locations" element={<Locations />}></Route>
//         <Route path="/reviews" element={<Reviews />}></Route>
//         <Route path="/earnings" element={<Earnings />}></Route>
//         <Route path="/doctorDetails" element={<DoctorDetails />}></Route>
//       </Routes>
//     </>
//   );
// }

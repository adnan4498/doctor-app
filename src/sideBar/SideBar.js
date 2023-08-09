import { AntCloudOutlined, BookOutlined, DashboardOutlined, DollarOutlined, SecurityScanOutlined, StarOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../customLayout/CustomLayout.css";


const SideBar = () => {
    const navigate = useNavigate();

  return (
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
       
      </div>
  )
}

export default SideBar
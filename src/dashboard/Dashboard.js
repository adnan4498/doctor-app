import { Card, Space } from "antd";
import React from "react";

import "../dashboard/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="first-cards">
        <div className="custom-card-container">
          <Card title="Total Users" className="custom-card">
            <p>2078</p>
          </Card>
        </div>

        <div className="custom-card-container">
          <Card title="Total Specialists" className="custom-card">
            <p>2078</p>
          </Card>
        </div>
      </div>

      <div className="second-cards">
        <Card title="Total Locations" className="custom-card">
          <p>2078</p>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;

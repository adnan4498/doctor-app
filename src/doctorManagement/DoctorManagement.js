import React from "react";
import "../doctorManagement/DoctorManagement.css";
import Search from "antd/es/input/Search";
import { Col, Row } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import DoctorDetails from "../doctorDetails/DoctorDetails";

const DoctorManagement = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div className="doctor-management-container">
      <div className="category-and-search">
        <p>Select the Category</p>

        <div>
          <Search
            placeholder="Search Specialist"
            allowClear
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </div>
      </div>

      <div className="specialists-tabs">
        <Row gutter={[16, 30]}>
          <Col className="gutter-row" span={7}>
          <Link to="/doctorDetails" className="remove-blue-color">
            <div className="divs">Psychiatrist</div>
          </Link>
          </Col>
          <Col className="gutter-row" span={7}>
            <div className="divs">Psychiatrist</div>
          </Col>
          <Col className="gutter-row" span={7}>
          <Link to="/doctorDetails" className="remove-blue-color">
            <div className="divs">Psychiatrist</div>
          </Link>
          </Col>
          <Col className="gutter-row" span={7}>
          <Link to="/doctorDetails" className="remove-blue-color">
            <div className="divs">Psychiatrist</div>
          </Link>
          </Col>
          <Col className="gutter-row" span={7}>
          <Link to="/doctorDetails" className="remove-blue-color">
            <div className="divs">Psychiatrist</div>
          </Link>
          </Col>
          <Col className="gutter-row" span={7}>
          <Link to="/doctorDetails" className="remove-blue-color">
            <div className="divs">Psychiatrist</div>
          </Link>
          </Col>
          <Col className="gutter-row" span={7}>
          <Link to="/doctorDetails" className="remove-blue-color">
            <div className="divs">Psychiatrist</div>
          </Link>
          </Col>
          <Col className="gutter-row" span={7}>
          <Link to="/doctorDetails" className="remove-blue-color">
            <div className="divs">Psychiatrist</div>
          </Link>
          </Col>
          <Col className="gutter-row" span={7}>
          <Link to="/doctorDetails" className="remove-blue-color">
            <div className="divs">Psychiatrist</div>
          </Link>
          </Col>
          <Col className="gutter-row" span={7}>
          <Link to="/doctorDetails" className="remove-blue-color">
            <div className="divs">Psychiatrist</div>
          </Link>
          </Col>
          <Col className="gutter-row" span={7}>
          <Link to="/doctorDetails" className="remove-blue-color">
            <div className="divs">Psychiatrist</div>
          </Link>
          </Col>
           <Col className="gutter-row" span={7}>
          <Link to="/doctorDetails" className="remove-blue-color">
            <div className="divs">Psychiatrist</div>
          </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DoctorManagement;

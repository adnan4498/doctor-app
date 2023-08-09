import React from "react";
import "../doctorManagement/DoctorManagement.css";
import Search from "antd/es/input/Search";
import { Col, Row } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import DoctorDetails from "../doctorDetails/DoctorDetails";

const DoctorManagement = () => {
  const onSearch = (value) => console.log(value);

  const doctors = [
    "Psychiatrist",
    "General Physician",
    "Skin Doctor",
    "Urologist",
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Orthopedic Surgeon",
    "Gynecologist",
    "Ophthalmologist",
    "ENT Specialist",
    "Pediatrician",
  ];

  return (
    <div className="doctor-management-container">
      <div className="category-and-search">
        <h2>Select A Category</h2>

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
          {doctors.map((doctor, index) => (
            <Col key={index} className="gutter-row" span={7}>
              <Link to="/doctorDetails" className="categories">
                <div className="category-divs">{doctor}</div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default DoctorManagement;

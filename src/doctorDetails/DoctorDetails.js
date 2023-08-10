import React, { useState } from "react";
import { Table, Drawer , DatePicker, Select, Button } from "antd";
import "../doctorDetails/DoctorDetails.css"

const DoctorDetails = () => {

  const { Option } = Select;

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Fees",
      dataIndex: "fees",
      key: "fees",
    },
    {
      title: "Reviews",
      dataIndex: "reviews",
      key: "reviews",
    },
    {
      title: "Availability",
      key: "availability",
      dataIndex: "availability",
      render: (_, record) => (
        <Button
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => showAvailabilityDrawer(record)}
        >
          Click to view
        </Button>
      ),
    },
    {
      title: "Profile",
      key: "profile",
      // render: (_, record) => (
      //   <span
      //     style={{ color: "blue", cursor: "pointer" }}
      //     onClick={() => showProfileDrawer(record)}
      //   >
      //     View Profile
      //   </span>
      // ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      email: "john@example.com",
      fees: "$100",
      reviews: 5,
      availability: "Available",
      // availabilityDetails: "Monday to Friday, 9 AM - 6 PM",
      tags: ["Block"],
    },
    {
      key: "2",
      name: "Jim Green",
      email: "jim@example.com",
      fees: "$80",
      reviews: 4,
      availability: "Unavailable",
      // availabilityDetails: "Not available for appointments.",
    },
    {
      key: "3",
      name: "Joe Black",
      email: "joe@example.com",
      fees: "$120",
      reviews: 3,
      availability: "Available",
      // availabilityDetails: "Tuesday and Thursday, 10 AM - 2 PM",
      tags: ["Block"],
    },
  ];

  const [availabilityDrawerVisible, setAvailabilityDrawerVisible] = useState(
    false
  );
  const [profileDrawerVisible, setProfileDrawerVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);

  const showAvailabilityDrawer = (record) => {
    setCurrentRecord(record);
    setAvailabilityDrawerVisible(true);
  };

  const showProfileDrawer = (record) => {
    setCurrentRecord(record);
    setProfileDrawerVisible(true);
  };

  const closeDrawer = () => {
    setAvailabilityDrawerVisible(false);
    setProfileDrawerVisible(false);
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <Drawer
        title="Availability Details"
        placement="right"
        closable={true}
        onClose={closeDrawer}
        visible={availabilityDrawerVisible}       
      >
        {currentRecord && (
          <div>
            <DatePicker style={{ marginBottom: 10 }} />
            <Select
              mode="multiple"
              placeholder="Select weekdays"
              style={{ width: "100%" }}
            >
              <Option value="monday">Monday</Option>
              <Option value="tuesday">Tuesday</Option>
              <Option value="wednesday">Wednesday</Option>
              <Option value="thursday">Thursday</Option>
              <Option value="friday">Friday</Option>
              <Option value="saturday">Saturday</Option>
              <Option value="sunday">Sunday</Option>
            </Select>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default DoctorDetails;

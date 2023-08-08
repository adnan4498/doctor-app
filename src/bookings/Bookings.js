import React, { useState } from "react";
import { Space, Table, Tag, Tabs } from "antd";
// import 'antd/dist/antd.css'; // Import Ant Design CSS
import "../bookings/Bookings.css"

const Bookings = () => {
  const { TabPane } = Tabs;

  const [activeTab, setActiveTab] = useState("upcoming"); // Default tab: upcoming


  const columns = [
    {
      title: "#",
      dataIndex: "",
      key: "",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Patient Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Doctor Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Location",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Price",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Spending",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "Unpaid") {
              color = "volcano";
            } else if (tag == "Unblock") {
              color = "green";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Day",
      dataIndex: "",
      key: "",
    },
    {
      title: "Time",
      dataIndex: "",
      key: "",
    },
    {
      title: "No. of Bookings",
      dataIndex: "",
      key: "",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["Paid"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["Unpaid"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["Paid"],
    },
  ];

  const filteredData =
    activeTab === "upcoming"
      ? data.filter((item) => item.tags.includes("Unpaid"))
      : data.filter((item) => item.tags.includes("Paid"));

  return (
    <div>
      <Tabs defaultActiveKey={activeTab} onChange={(key) => setActiveTab(key)}>
        <TabPane tab="Upcoming" key="upcoming">
          <Table columns={columns} dataSource={filteredData} />
        </TabPane>
        <TabPane tab="Completed" key="completed">
          <Table columns={columns} dataSource={filteredData} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Bookings;

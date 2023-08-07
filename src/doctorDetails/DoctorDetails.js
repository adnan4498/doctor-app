import { Space, Table, Tag } from 'antd';
import React from 'react'

const DoctorDetails = () => {
    const columns = [
        {
            title: "#",
            dataIndex: "",
            key: "",
            // render: (text) => <a>{text}</a>,
          },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: (text) => <a>{text}</a>,
        },
        {
          title: "Email",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "Picture",
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
                if (tag === "Block") {
                  color = "volcano";
                }
                else if (tag == "Unblock"){
                    color = "green"
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
          title: "Action",
          key: "action",
          render: (_, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
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
          tags: ["Block"],
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
          tags: ["Unblock"],
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sydney No. 1 Lake Park",
          tags: ["Block"],
        },
      ];
    
      return (
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      );
}

export default DoctorDetails
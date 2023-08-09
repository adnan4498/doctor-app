import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import '../earnings/Earnings.css';

const Earnings = () => {
  const [earningsData, setEarningsData] = useState([]);

  useEffect(() => {
    // Fetch earnings data from the API
    axios
      .get('https://customdemowebsites.com/dr-admin/admin/doctors/earnings')
      .then((response) => {
        setEarningsData(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching earnings:', error);
      });
  }, []);

  const columns = [
    {
      title: 'Doctor First Name',
      dataIndex: 'doctor_first_name',
      key: 'doctor_first_name',
    },
    {
      title: 'Doctor Last Name',
      dataIndex: 'doctor_last_name',
      key: 'doctor_last_name',
    },
    {
      title: 'Total Earnings',
      dataIndex: 'total_earnings',
      key: 'total_earnings',
    },
  ];

  const dataSource = earningsData.map((earning, index) => ({
    key: index,
    doctor_first_name: earning.doctor_first_name,
    doctor_last_name: earning.doctor_last_name,
    total_earnings: earning.total_earnings,
  }));

  return (
    <div className="earnings-container">
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </div>
  );
};

export default Earnings;

import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Space, InputNumber } from 'antd';
import axios from 'axios';
import "../locations/Locations.css";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState('');
  const [newDoctors, setNewDoctors] = useState(0);
  const [addingLocation, setAddingLocation] = useState(false);

  useEffect(() => {
    const savedLocations = JSON.parse(localStorage.getItem('locations')) || [];
    setLocations(savedLocations);
  }, []);

  useEffect(() => {
    localStorage.setItem('locations', JSON.stringify(locations));
  }, [locations]);

  const handleAddLocation = () => {
    if (newLocation.trim() !== '') {
      setLocations([...locations, { location: newLocation, doctors: newDoctors }]);
      setNewLocation('');
      setNewDoctors(0);
      setAddingLocation(false);
    }
  };

  const handleCancel = () => {
    setNewLocation('');
    setNewDoctors(0);
    setAddingLocation(false);
  };

  const handleRemoveLocation = (index) => {
    const updatedLocations = locations.filter((_, i) => i !== index);
    setLocations(updatedLocations);
  };

  useEffect(() => {
    // Fetch locations data from the API
    axios.get('https://customdemowebsites.com/dr-admin/admin/locations')
      .then(response => {
        setLocations(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
      });
  }, []);

  const columns = [
    {
      title: 'Location',
      dataIndex: 'hospital',
      key: 'hospital',
    },
    {
      title: 'Doctors',
      dataIndex: 'total_doctors',
      key: 'total_doctors',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record, index) => (
        <Space>
          <Button
            onClick={() => handleRemoveLocation(index)}
            type="danger"
            className="remove-button"
            style={{ backgroundColor: 'red', borderColor: 'red', color: 'white' }}
          >
            Remove
          </Button>
        </Space>
      ),
    },
  ];

  const dataSource = locations.map((location, index) => ({
    key: index,
    hospital: location.hospital,
    total_doctors: location.total_doctors,
  }));

  return (
    <div className="locations-container">
      <Table columns={columns} dataSource={dataSource} pagination={false} />
      {!addingLocation && (
        <Button className='location-add-button' onClick={() => setAddingLocation(true)} type="primary">
          Add 
        </Button>
      )}
      {addingLocation && (
        <div style={{ alignItems: 'center' }}>
          <Input
            placeholder="Enter a location"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
            style={{ marginRight: 10 }}
          />
          <span className='number-of-doctors-span'>Number of Doctors</span> 
          <InputNumber
            placeholder="Number of doctors"
            min={0}
            value={newDoctors}
            onChange={(value) => setNewDoctors(value)}
            style={{ marginRight: 10 }}
          />
          <Button onClick={handleAddLocation} type="primary">
            Add
          </Button>
          <Button onClick={handleCancel} type="default" style={{ marginLeft: 10 }}>
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
};

export default Locations;

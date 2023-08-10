import React, { useState } from "react";
import { Table, Button, Input, Space, InputNumber, Modal } from "antd";
import "../locations/Locations.css";

const Locations = () => {
  const [locations, setLocations] = useState([
    { hospital: "Hospital A", total_doctors: 10 },
    { hospital: "Hospital B", total_doctors: 15 },
    { hospital: "Hospital C", total_doctors: 8 },
  ]);
  const [newLocation, setNewLocation] = useState("");
  const [newDoctors, setNewDoctors] = useState(0);
  const [addingLocation, setAddingLocation] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Add location and doctors");
  const [okButtonDisabled, setOkButtonDisabled] = useState(true);

  const columns = [
    {
      title: "Location",
      dataIndex: "hospital",
      key: "hospital",
    },
    {
      title: "Doctors",
      dataIndex: "total_doctors",
      key: "total_doctors",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record, index) => (
        <Space>
          <Button
            onClick={() => handleRemoveLocation(index)}
            type="danger"
            className="remove-button"
            style={{
              backgroundColor: "red",
              borderColor: "red",
              color: "white",
            }}
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

  const handleAddLocation = () => {
    if (newLocation.trim() !== "") {
      setModalText("Adding location and doctors...");
      setConfirmLoading(true);
      setTimeout(() => {
        setLocations([
          ...locations,
          { hospital: newLocation, total_doctors: newDoctors },
        ]);
        setNewLocation("");
        setNewDoctors(0);
        setConfirmLoading(false);
        setAddingLocation(false);
      }, 1000); // 1 second delay
    }
  };

  const handleCancel = () => {
    setNewLocation("");
    setNewDoctors(0);
    setAddingLocation(false);
  };

  const handleRemoveLocation = (index) => {
    const updatedLocations = locations.filter((_, i) => i !== index);
    setLocations(updatedLocations);
  };

  const handleLocationInputChange = (e) => {
    setNewLocation(e.target.value);
    setOkButtonDisabled(e.target.value.trim() === ""); // Disable OK button if no input
  };

  const handleDoctorsInputChange = (value) => {
    setNewDoctors(value < 0 ? 0 : value);
  };

  const showModal = () => {
    setAddingLocation(true);
  };

  const hideModal = () => {
    setAddingLocation(false);
  };

  return (
    <div className="locations-container">
      <Table columns={columns} dataSource={dataSource} pagination={false} />
      <Button
        className="location-add-button"
        onClick={showModal}
        type="primary"
      >
        Add
      </Button>
      <Modal
        title="Add Location and Doctors"
        visible={addingLocation}
        onOk={handleAddLocation}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okButtonProps={{ disabled: okButtonDisabled }} // Disable the OK button based on input
      >
        <div className="docc">
          <span className="number-of-doctors-span">Add Location</span>
          <Input
            className="location-input"
            value={newLocation}
            onChange={handleLocationInputChange}
            style={{ marginBottom: 10 }}
          />
        </div>
        <span className="number-of-doctors-span">Add Doctors </span>
        <InputNumber
          placeholder="Number of doctors"
          min={0}
          value={newDoctors}
          onChange={handleDoctorsInputChange}
          style={{ marginBottom: 10 }}
        />
      </Modal>
    </div>
  );
};

export default Locations;

// import React, { useState, useEffect } from 'react';
// import { Table, Button, Input, Space, InputNumber } from 'antd';
// import axios from 'axios';
// import "../locations/Locations.css";

// const Locations = () => {
//   const [locations, setLocations] = useState([]);
//   const [newLocation, setNewLocation] = useState('');
//   const [newDoctors, setNewDoctors] = useState(0);
//   const [addingLocation, setAddingLocation] = useState(false);

//   useEffect(() => {
//     const savedLocations = JSON.parse(localStorage.getItem('locations')) || [];
//     setLocations(savedLocations);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('locations', JSON.stringify(locations));
//   }, [locations]);

//   const handleAddLocation = () => {
//     if (newLocation.trim() !== '') {
//       setLocations([...locations, { location: newLocation, doctors: newDoctors }]);
//       setNewLocation('');
//       setNewDoctors(0);
//       setAddingLocation(false);
//     }
//   };

//   const handleCancel = () => {
//     setNewLocation('');
//     setNewDoctors(0);
//     setAddingLocation(false);
//   };

//   const handleRemoveLocation = (index) => {
//     const updatedLocations = locations.filter((_, i) => i !== index);
//     setLocations(updatedLocations);
//   };

//   useEffect(() => {
//     // Fetch locations data from the API
//     axios.get('https://customdemowebsites.com/dr-admin/admin/locations')
//       .then(response => {
//         setLocations(response.data.results);
//       })
//       .catch(error => {
//         console.error('Error fetching locations:', error);
//       });
//   }, []);

//   const columns = [
//     {
//       title: 'Location',
//       dataIndex: 'hospital',
//       key: 'hospital',
//     },
//     {
//       title: 'Doctors',
//       dataIndex: 'total_doctors',
//       key: 'total_doctors',
//     },
//     {
//       title: 'Actions',
//       key: 'actions',
//       render: (_, record, index) => (
//         <Space>
//           <Button
//             onClick={() => handleRemoveLocation(index)}
//             type="danger"
//             className="remove-button"
//             style={{ backgroundColor: 'red', borderColor: 'red', color: 'white' }}
//           >
//             Remove
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   const dataSource = locations.map((location, index) => ({
//     key: index,
//     hospital: location.hospital,
//     total_doctors: location.total_doctors,
//   }));

//   return (
//     <div className="locations-container">
//       <Table columns={columns} dataSource={dataSource} pagination={false} />
//       {!addingLocation && (
//         <Button className='location-add-button' onClick={() => setAddingLocation(true)} type="primary">
//           Add
//         </Button>
//       )}
//       {addingLocation && (
//         <div style={{ alignItems: 'center' }}>
//           <Input
//             placeholder="Enter a location"
//             value={newLocation}
//             onChange={(e) => setNewLocation(e.target.value)}
//             style={{ marginRight: 10 }}
//           />
//           <span className='number-of-doctors-span'>Number of Doctors</span>
//           <InputNumber
//             placeholder="Number of doctors"
//             min={0}
//             value={newDoctors}
//             onChange={(value) => setNewDoctors(value)}
//             style={{ marginRight: 10 }}
//           />
//           <Button onClick={handleAddLocation} type="primary">
//             Add
//           </Button>
//           <Button onClick={handleCancel} type="default" style={{ marginLeft: 10 }}>
//             Cancel
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Locations;

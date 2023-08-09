import React from 'react'
import CustomLayout from '../customLayout/CustomLayout'
import DoctorManagement from '../doctorManagement/DoctorManagement'
import Bookings from '../bookings/Bookings'
import Locations from '../locations/Locations'
import Reviews from '../reviews/Reviews'
import Earnings from '../earnings/Earnings'
import DoctorDetails from '../doctorDetails/DoctorDetails'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import UserManagement from '../userManagement/UserManagement'

const NewLayout = () => {
  return (
    <div>
        <h1>header</h1>
        <div>
            <CustomLayout/>
            <Content/>
        </div>
    </div>
  )
}

export default NewLayout

function Content() {
    return (
      <>
        <Routes>
          {/* <Route path="/" element={<Login/>}></Route> */}
          <Route path="/dash" element={<Dashboard/>}></Route>
          <Route
            path="/userManagement"
            element={<UserManagement/>}
          ></Route>
          <Route path="/doctorManagement" element={<DoctorManagement/>} > </Route>
          <Route path="/bookings" element={<Bookings/>}></Route>
          <Route path="/locations" element={<Locations/>}></Route>
          <Route path="/reviews" element={<Reviews/>}></Route>
          <Route path="/earnings" element={<Earnings/>}></Route>
          <Route path="/doctorDetails" element={<DoctorDetails/>}></Route>
        </Routes>
      </>
    );
  }
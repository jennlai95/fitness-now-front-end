
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Classes from './pages/ClassesPage';
import Booking from './pages/BookingPage';
import Schedule from './pages/SchedulePage';
import Profile from './pages/ProfilePage';
import Registration from './pages/RegistrationPage';
import AdminPortal from './pages/AdminPage';
import AdminClasses from './pages/AdminClassesPage';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';

function App ()  {
    return (

       <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/classes" element={<Classes/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route index path="/login" element={<LoginPage/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/admin-portal" element={<AdminPortal/>}/>
          <Route path="/admin-classes" element={<AdminClasses/>}/>
        </Route>
      </Routes>
  );
}
export default App;


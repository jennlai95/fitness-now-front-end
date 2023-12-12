import logo from './logo.svg';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Booking from './pages/Booking';
import Schedule from './pages/Schedule';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import AdminPortal from './pages/AdminPortal';
import AdminClasses from './pages/AdminClasses';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
     <Header>
      <Routes>
  
        <Route path="/" element={<Home/>}/>
        <Route path="/classes" element={<Classes/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/admin-portal" element={<AdminPortal/>}/>
        <Route path="/admin-classes" element={<AdminClasses/>}/>
      </Routes>
      </Header>

      <Footer/>



   </BrowserRouter>

  );
}
}

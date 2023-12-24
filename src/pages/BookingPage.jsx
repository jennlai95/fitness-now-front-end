import React from 'react';
import Layout from '../components/Layout';
import { useState } from 'react';
import Footer from '../components/Footer';

const Booking = ({ scheduleId, date, time }) => {
  const [bookingData, setBookingData] = useState({
    username: '',
    email: '',

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({ ...prevData, [name]: value }));
  };

  // POST request to backend
  const handleBookingSubmit = async () => {
    try {
      const response = await fetch('https://fitness-studio-app-e1ebefd30762.herokuapp.com/booking/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: bookingData.name,
          date,
          scheduleId, 
        }),
      });
  
      const data = await response.json();
      console.log('Booking response:', data);
  
      // error handling 
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
    <Layout />
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Booking Page</h2>
      <div>
        <p className="mb-2">Schedule ID: {scheduleId}</p>
        <p className="mb-2">Date: {date}</p>
        <p className="mb-2">Time: {time}</p>
      </div>
      <form className="mt-4">
        <label className="block mb-2">
          Username:
          <input
            type="text"
            name="name"
            value={bookingData.username}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={bookingData.email}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          />
        </label>
        <button
          type="button"
          onClick={handleBookingSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
    <Footer />
  </div>
);
};
export default Booking;
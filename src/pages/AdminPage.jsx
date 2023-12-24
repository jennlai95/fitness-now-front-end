import React, { useEffect, useState } from "react";
import Layout from '../components/Layout';
import axios from "axios";
import Footer from "../components/Footer";
import EditBooking from "../components/EditBooking";
import { useNavigate, useParams } from "react-router-dom";

function AdminPortal() {
    const { id } = useParams();
    const navigate = useNavigate();

    // establish profile detail state 
    const [profileData, setProfileData ] = useState({
      username: "",
      email: "",
    }
    );

     // Edit mode state
  const [editMode, setEditMode] = useState(false);
    
  const [bookingData, setBookingData] = useState([]);

  
    // fetch all user details 
    useEffect(() => {
      const fetchUserData = async () => {
        try {

          const userResponse = await axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`);
          const userData = userResponse.data;
          setProfileData(userData);

          // Fetch all user booking data
          const bookingResponse = await axios.get(`${process.env.REACT_APP_API_URL}/admin/all`);
          const bookingData = bookingResponse.data.booking;
          setBookingData(bookingData);
          console.log('Booking Data:', bookingData);
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    };

    fetchUserData();
  }, [id]);

  const handleEditProfile = async () => {
    try {
      // Perform the update request with the updated data
      await axios.put(`${process.env.REACT_APP_API_URL}/users/${id}`, {
        username: profileData.username,
        email: profileData.email,
      });
      // Exit edit mode after successful update
      setEditMode(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
 

  const handleDeleteProfile = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/users/${id}`);
      alert('User profile deleted successfully');
      // Use navigate to go to some page after deletion
      navigate('/');
    } catch (error) {
      console.error('Error deleting profile:', error);
      alert('Error deleting profile. Please try again.');
    }
  };


    
  
    // placeholder admin data 
    return (
      <div>
        <Layout/>
        <h1 className='text-center bg-sky-100'>Profile Page </h1>
        <div class="mt-8 grid gap-x-6 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-screen"> 
        <div className='bg-blue-50 p-4'> User information 
          <p> Username : {profileData.username}</p>
          <p> Email : {profileData.email}</p>
          {editMode ? (
            <>
              <button onClick={handleEditProfile}>Save Changes</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </>
          ) : (
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
          )}
          <button onClick={handleDeleteProfile}>Delete User</button>
        </div>
        <div className='bg-blue-50 p-4'> <h1 className='text-center'>Booking History</h1> 
        {bookingData.map((booking) => (
            <p key={booking.id}>{/* Display booking information here */}</p>
          ))}
          <EditBooking/> </div>
        </div>
        <Footer/>
        </div> 
    )
  }
  

export default AdminPortal
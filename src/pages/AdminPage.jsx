import React, { useEffect, useState } from "react";
import Layout from '../components/Layout';
import axios from "axios";
import Footer from "../components/Footer";
import EditBooking from "../components/EditBooking";

function AdminPortal() {
    // const { id } = useParams();

    // establish profile detail state 
    const [profileData, setProfileData ] = useState({
      username: "",
      email: "",
    }
    );
    
    const [bookingData, setBookingData] = useState([]);

  
    // fetch all user details 
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const currentUserId = 'CURRENT_USER_ID';

          const profileResponse = await axios.get(`${process.env.REACT_APP_API_URL}/users/${currentUserId}`);
          const profileData = profileResponse.data;
          setProfileData(profileData); // Updates the user state with the fetched data.
          console.log('Profile Data:', profileData);

        // Fetch user booking data
        const bookingResponse = await axios.get(`${process.env.REACT_APP_API_URL}/booking/my-bookings`);
        const bookingData = bookingResponse.data;
        setBookingData(bookingData);
        console.log('Booking Data:', bookingData);
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    };

    fetchUserData();
  }, []);
    
  
    // placeholder admin data 
    return (
      <div>
        <Layout/>
        <h1 className='text-center bg-sky-100'>Profile Page </h1>
        <div class="mt-8 grid gap-x-6 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-screen"> 
        <div className='bg-blue-50 p-4'> User information 
          <p> Username : {profileData.username}</p>
          <p> Email : {profileData.email}</p>
          <button> Update/Delete User </button> 
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
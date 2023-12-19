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
  
    const API_URL= 'https://fitness-studio-app-e1ebefd30762.herokuapp.com/'
  
    // fetch all user details 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${API_URL}/users`);
          const data = response.data;
          setProfileData(data); // Updates the user state with the fetched data.
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      };
      fetchData();
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
        <p> placeholder </p>
          <EditBooking/> </div>
        </div>
        <Footer/>
        </div> 
    )
  }
  

export default AdminPortal
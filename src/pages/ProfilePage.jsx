import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Profile() {

  const { username } = useParams();

  // establish profile detail state 
  const [profileData, setProfileData ] = useState({
    username: "",
    email: "",
  }
  );

  const API_URL= 'https://fitness-studio-app-e1ebefd30762.herokuapp.com/users/one/id${id}'

  // fetch user details by username /id 
  useEffect(() => {
    const fetchData = async () => {
  
        const response = await axios.get(API_URL)
        const json = await response.json();
        setProfileData(json); // Updates the user state with the fetched data.

     };
     fetchData();
    }, []);

  

  return (
    <div>
      <Layout/>
      Profile
      <Layout/>
      <div class="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 h-screen"> 
      <div> User information 
        <p> Username : {profileData.username}</p>
        <p> Email : {profileData.email}</p>
      </div>
      <div> Booking History </div>
      </div>
      </div> 
  )
}

export default Profile
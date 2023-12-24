import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';


function Profile() {

  const { id } = useParams();

  // establish profile detail state 
  const [profileData, setProfileData ] = useState({
    username: "",
    email: "",
  }
  );

  const [editMode, setEditMode] = useState(false);


  // fetch user details by username /id 
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`${process.env.REACT_APP_API_URL}users/${id}`);
        const data = response.data;
        setProfileData(data); // Updates the user state with the fetched data.
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchData();
  }, [id]);

  // edit profile data

  const handleUpdateProfile = async () => {
    try {
      // Perform the update request with the updated data
      await axios.put(process.env.REACT_APP_API_URL + `users/${id}`, {
        username: profileData.username,
        email: profileData.email,
      });
      // Exit edit mode after successful update
      setEditMode(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  return (
    <div>
      <Layout/>
      <h1 className='text-center bg-sky-100'>Profile Page </h1>
      <div class="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-2 h-screen"> 
      {/* profile data */}
      <div className='bg-blue-50'> User information 
      {!editMode ? (
            <>
              <p> Username: {profileData.username}</p>
              <p> Email: {profileData.email}</p>
              <button onClick={() => setEditMode(true)}>Edit User</button>
            </>
          ) : (
            <>
              <label>
                Username:
                <input
                  type='text'
                  name='username'
                  value={profileData.username}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type='email'
                  name='email'
                  value={profileData.email}
                  onChange={handleInputChange}
                />
              </label>
              <button onClick={handleUpdateProfile}>Save Changes</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </>
          )}
        </div>

      {/* column 2 booking history/data */}
      <div className='bg-blue-50'> <h1 className='text-center'>Booking History</h1> 
      <p> placeholder </p>
        <button> Edit Booking </button> </div>
      </div>
      <Footer/>
      </div> 
  )
}

export default Profile
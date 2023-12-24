import React, { useState } from 'react';
import { Link, useNavigate,  } from 'react-router-dom';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import axios from 'axios';

// login form 
export default function LoginPage ()  {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  async function handleLoginSubmit(event) {
    event.preventDefault();
    try {
      let result = await axios.post(process.env.REACT_APP_API_URL + "users/login", {
        username,
        email,
        password,
      });

      let data =  result.data;
      console.log(data);

      alert('Login succesful')

      // add redirect to login page if successful

      navigate.push(`/profile/${data.id}`);

      // catch error
    } catch (e) {
      console.error('Error:', e);
      console.log('Request details:', e.config);
      alert('Error, please try again');
    }
  }


// styling

  return (
    <div>
      <Layout/>
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center'> Login  </h1>
        <form className='max-width-md mx-auto ' onSubmit={handleLoginSubmit}>
          <input type="email" 
            placeholder='your@email.com'
            value={email}
            onChange={event => setEmail(event.target.value)}/>
          <input type="username" 
            placeholder='username'
            value={username}
            onChange={event => setUsername(event.target.value)}/>
          <input type="password" 
            placeholder="password"
            value={password}
            onChange={event => setPassword(event.target.value)} />
          <button> Login</button>
          <div className='text-center text-gray-400'> 
            <Link to ={'/registration'}> Register Here </Link>
          </div>
        </form> 
    </div>
    </div>
    <Footer/>
            </div>
  )
};


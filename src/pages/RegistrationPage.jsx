import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';

function Registration() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await  axios.post('/registration', {
        name,
        email,
        username,
        password,
      });
      alert('Thanks for signing up. You can now log')
    } catch (e) {
      alert('Error, please try again')
    }
  }

  return (
    <div>
    <Layout/>
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center'> Register Now </h1>
        <form className='max-width-md mx-auto ' onSubmit={registerUser}>
          <input type="name" placeholder='Your name' 
            value={name} 
            onChange={ev => setName(ev.target.value) }/>
          <input type="email" placeholder='your@email.com'
            value={email} 
            onChange={ev => setEmail(ev.target.value) }/>
          <input type="username" placeholder='username'
            value={username} 
            onChange={ev => setUsername(ev.target.value) }/>
          <input type="password" placeholder='password'
            value={password} 
            onChange={ev => setPassword(ev.target.value) }/>

          <button> Register </button>
          <div className='text-center text-black'> Already have an account?
            <Link to ={'/login'}> Login </Link>
          </div>
        </form>
    </div>
    </div>
    </div>
  )
};

export default Registration
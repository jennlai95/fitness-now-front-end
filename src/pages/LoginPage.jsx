import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


// login form 
export default function LoginPage ()  {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      await  axios.post('/login', {
        email,
        username,
        password,
      });
      alert('Login succesful')
    } catch (e) {
      alert('Error, please try again')
    }
  }

  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center'> Login  </h1>
        <form className='max-width-md mx-auto ' onSubmit={handleLoginSubmit}>
          <input type="email" 
            placeholder='your@email.com'
            value={email}
            onChange={ev => setEmail(ev.target.value)}/>
          <input type="username" 
            placeholder='username'
            value={username}
            onChange={ev => setUsername(ev.target.value)}/>
          <input type="password" 
            placeholder="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)} />
          <button> Login</button>
          <div className='text-center text-gray-400'> 
            <Link to ={'/registration'}> Register Here </Link>
          </div>
        </form>
    </div>
    </div>
  )
};


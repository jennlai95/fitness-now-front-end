import React from 'react'
import { Link } from 'react-router-dom'


// login form 
export default function LoginPage ()  {
return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center'> Login form </h1>
        <form className='max-width-md mx-auto '>
          <input type="email" placeholder='your@email.com'/>
          <input type="username" placeholder='username'/>
          <input type="password" placeholder='password'/>
          <button> Login</button>
          <div className='text-center text-gray-400'> 
            <Link to ={'/registration'}> Register Here </Link>
          </div>
        </form>
    </div>
    </div>
  )
};


import React from 'react'
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center'> Register Now </h1>
        <form className='max-width-md mx-auto '>
          <input type="email" placeholder='your@email.com'/>
          <input type="username" placeholder='username'/>
          <input type="password" placeholder='password'/>
          <button> Register </button>
          <div className='text-center text-black'> Already have an account?
            <Link to ={'/login'}> Login </Link>
          </div>
        </form>
    </div>
    </div>
  )
};

export default Registration
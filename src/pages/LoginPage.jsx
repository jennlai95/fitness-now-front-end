import React from 'react'


// login form 
export default function LoginPage ()  {
return (
    <div className='mt-4'>
      <h1 className='text-4xl text-center'> Login form </h1>
      <form className='max-width-md mx-auto border'>
        <input type="email" placeholder='your@email.com'/>
        <input type="username" placeholder='username'/>
        <input type="password" placeholder='password'/>
        <button> Login</button>
      </form>
    </div>
  )
};


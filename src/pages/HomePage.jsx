import React from 'react'
import pilates from "../assets/pilates.jpg"
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

function Home() {
  return (

    <div>
    <Layout/>
      <div className='flex flex-col'>
     

    <div> 
      <img src={pilates} alt="Home Page" className="w-full-h-auto"/>
    </div>
    <button> Login</button>
          <div className='text-center text-gray-400'> 
            <Link to ={'/registration'}> Register Here </Link>
          </div>

    </div>
    <Footer/>
    </div>





  )
}

export default Home
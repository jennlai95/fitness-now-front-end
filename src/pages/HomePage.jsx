import React from 'react'
import pilates from "../assets/pilates.jpg"
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import yoga from "../assets/yoga.jpg";
import reformers from "../assets/reformers.jpg";

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 25000, 
  };

  return (

    <div className='min-h-screen'>
    <Layout/>
      <div className='flex flex-col'>
      <img src={yoga} alt='yoga'className='w-full h-auto' />

    <div> 
  
      <h1 className='relative text-center text-xl'> About Us </h1>
      <p className='relative text-center'> Welcome to Fitness Now. We welcome all fitness lovers from newbies to fitness enthusiasts</p>
    </div>
     <div className='mt-8 mx-4 grid gap-4 grid-cols-1 h-auto'>

      <Slider {...sliderSettings}>
      
            <div>
              <img src={reformers} alt='reformers' className="w-500 h-500" />
            </div>
            <div>
              <img src={yoga} alt='yoga'className="w-500 h-500" />
            </div>
            <div> <img src={pilates} alt="Home Page" className="w-500 h-500"/> </div>
            </Slider>
     </div>

     <div className='mt-8 mx-4'>

    
    <h2 className='relative text-center text-l'> Content Page</h2>
      <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-auto relative text-center">

                <div className='my-2 bg-blue-200 p-4 rounded-lg hover:underline'>
                  
                  <Link to='/classes'>
                    Classes
                  </Link>
                </div>
                <div className='my-2 bg-blue-200 p-4 rounded-lg hover:underline'>
                  <Link to='/schedule'>
                    Schedule of available class
                  </Link>
                </div>
                <div className='my-2 bg-blue-200 p-4 rounded-lg hover:underline'>
                  <Link to='/profile'>
                    Profile Page
                  </Link>
                </div>
                <div className='my-2 bg-blue-200 p-4 rounded-lg hover:underline'>
                  <Link to='/booking'>
                    Booking
                  </Link>
                </div>
                <div className='my-2 bg-blue-200 p-4 rounded-lg hover:underline'>
                  <Link to='/registration'>
                    Sign up
                  </Link>
                </div>
      </div>
      </div>
    <button> <Link to='/login' className='hover:underline'> Login </Link></button>
          
    <Footer/>
    </div>
    </div>




  );
}

export default Home
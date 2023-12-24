import React from 'react';
import pilates from '../assets/pilates.jpg';
import  yoga from '../assets/yoga.jpg';
import reformers from '../assets/reformers.jpg'
import SignUp from '../components/signup';
import Layout from '../components/Layout';
import Footer from '../components/Footer';


export default function Classes() {
  return (
<div> 
<Layout/>
<div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 h-screen"> 
    <div>
        <div className="relative text-center"> 
          <h1  className='tracking-wider' > Pilates </h1>
        <a href = "/#" class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
          <p  class="mx-auto">Join our mat pilates class. Suitable for beginners and intermediate</p>
          </a>
        <a href="/#" class="relative">
            <div class="flex flex-wrap content-center">
                <img src={pilates} class="mx-auto  " alt="reformer"/>
            </div>
        </a>
        </div>
    </div>

    {/* column 2  */}
    <div>
        <div class="relative text-center"> 
          <h1  className='tracking-wider' >Yoga </h1>
        <a href = "/#"  class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
          <p  class="mx-auto">Join our hot yoga class. Suitable for beginners and intermediates. Performed in hot conditions. Please discuss if you have any health issues before booking </p>
          </a>
        <a href="/#" class="relative">
            <div class="flex flex-wrap content-center">
                <img src={yoga} class="mx-auto h-fit" alt="reformer"/>
            </div>
        </a>
        </div>
    </div>


    {/* column 3 class 4  */}

<div>
        <div class="relative text-center"> 
          <h1  className='tracking-wider' >Reformer Pilates </h1>
        <a href = "/#"  class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
          <p  class="mx-auto">Join our reformers pilates class. Suitable for beginners and intermediate with options to progress</p>
          </a>
        <a href="/#" class="relative">
            <div class="flex flex-wrap content-center">
                <img src={reformers} class="mx-auto" alt="reformer"/>
            </div>
        </a>
        </div>
    </div>
 
    </div>
    <SignUp/>
    <Footer/>
    </div>

  )
}



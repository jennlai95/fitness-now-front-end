import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import pilates from '../assets/pilates.jpg'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Schedule() {
  // State to store the schedule data
  const [scheduleData, setScheduleData] = useState([]);

  // Fetch schedule data from the backend when the component mounts
  useEffect(() => {
    fetchScheduleData();
  }, []);

  // Function to fetch schedule data from the backend
  const fetchScheduleData = async () => {
    try {
      const response = await fetch('https://fitness-studio-app-e1ebefd30762.herokuapp.com/schedule/all'); 
      const data = await response.json();
      setScheduleData(data.result);
      // error handling
    } catch (error) {
      console.error('Error fetching schedule data:', error);
    }
  };


  return (
    <div> 
       <Layout/>
     <div className='mt-8 flex flex-col items-center space-y-8'>
            <div className='text-xl font-bold'> Available classes</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scheduleData.map((schedule) => (
                <div key={schedule._id} className='bg-white p-4 rounded-md shadow-md'>
                  <img src={pilates} class="mx-auto  " alt="reformer"/>
                  <div className='text-center'>
                  <p className='text-sm text-gray-500'>Class: {schedule._name}</p>
                    <p className='text-sm text-gray-500'>Date: {new Date(schedule.date).toLocaleDateString()}</p>
                    <p className='text-sm text-gray-500'>Time: {schedule.time.start} - {schedule.time.end}</p>
                    <Link to ={'/booking'}> 
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Book Now
                    </button>
                     </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer/>
        </div>
      );
    }

export default Schedule
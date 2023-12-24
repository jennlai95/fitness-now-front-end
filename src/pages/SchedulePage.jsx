import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import pilates from '../assets/pilates.jpg'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';


function Schedule() {
  // State to store the schedule data
  const [allSchedules, setAllSchedules] = useState([]);

  // state to store schedule data on selected date data
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateSchedules, setSelectedDateSchedules] = useState([]);
  const [noSchedulesError, setNoSchedulesError] = useState(false);
  

  // Fetch schedule data from the backend when the component mounts
  useEffect(() => {
    fetchAllSchedules();
    if (selectedDate) {
      fetchScheduleData(selectedDate);
    }
  }, [selectedDate]);

  // Function to fetch schedule data from the backend
  const fetchAllSchedules = async () => {
    try {
      const response = await fetch('https://fitness-studio-app-e1ebefd30762.herokuapp.com/schedule/all'); 
      const data = await response.json();
      setAllSchedules(data.result);
      // error handling
    } catch (error) {
      console.error('Error fetching schedule data:', error);
    }
  };

  // Function to fetch schedules for the selected date from the backend
  const fetchScheduleData = async (date) => {
    try {
      const formattedDate = date.toISOString().split('T')[0];
      const response = await fetch(`https://fitness-studio-app-e1ebefd30762.herokuapp.com/schedule/date/${formattedDate}`);
      const data = await response.json();
      if (data.result.length > 0) {
        setSelectedDateSchedules(data.result);
        setNoSchedulesError(false);
      } else {
        // Set an error if no schedules are found
        setNoSchedulesError(true);
      }
    } catch (error) {
      console.error('Error fetching schedule data for the selected date:', error);
    }
  };


  return (
    <div> 
       <Layout/>
     <div className='mt-8 flex flex-col items-center space-y-8'>
            <div className='text-xl font-bold'> Available classes</div>
                <div className='mb-4 grid grid-cols-1'>
                <label className='block mb-2'>Select Date:</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className='border rounded p-2 w-full'
                  dateFormat="dd/MM/yyyy"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* display selected date schedule */}
              {noSchedulesError ? (
              <div className='text-red-500'>No schedules found for the selected date.</div>
                ) : (
                  selectedDateSchedules.map((schedule) => (
                    <div key={schedule._id} className='bg-white p-4 rounded-md shadow-md'>
                      <img src={pilates} className='mx-auto' alt='reformer' />
                      <div className='text-center'>
                        <p className='text-sm text-gray-500'>Class: {schedule._name}</p>
                        <p className='text-sm text-gray-500'>Date: {new Date(schedule.date).toLocaleDateString()}</p>
                        <p className='text-sm text-gray-500'>Time: {schedule.time.start} - {schedule.time.end}</p>
                        <Link to={'/booking'}>
                          <button className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
                            Book Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))
                )}

                {/* Display all schedules */}
                {allSchedules.map((schedule) => (
                <div key={schedule._id} className='bg-white p-4 rounded-md shadow-md'>
                <img src={pilates} className='mx-auto' alt='reformer' />
                <div className='text-center'>
                  <p className='text-sm text-gray-500'>Class: {schedule._name}</p>
                  <p className='text-sm text-gray-500'>Date: {new Date(schedule.date).toLocaleDateString()}</p>
                  <p className='text-sm text-gray-500'>Time: {schedule.time.start} - {schedule.time.end}</p>
                  <Link to={'/booking'}>
                    <button className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
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
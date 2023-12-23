// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const EditBooking = () => {
    const [title, setTitle] = useState('');
    const [ time, setTime ] = useState('');
    const [ date, setDate ] = useState('');
   
    const {id} = useParams();

    
    useEffect(() => {
     
    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.API_URL}/booking/`);
            if (!response.status !== 200) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setTitle(data.description);
            setTime(data.time);
            setDate(data.date);
            } catch (error) {
            alert('An error occurred, please try again');
            console.error(error);
                }
            };

            fetchData();
            }, [id]);

            const handleEditBooking = async () => {
                const data = {
                    title,
                    time,
                    date,
                };

                try {
                    const response = await axios.put(`${process.env.REACT_APP_API_URL}/booking/${id}`, data);


                    if (response.status !== 200) {
                        throw new Error('Network response was not ok');
                    }

                    console.log('Booking edited successfully');
                } catch (error) {
                    console.error(error);
                }
            };

      return (
        <div className='p-4'>
            
            <h1 className='text-3xl my-4 text-center'>Edit Booking</h1>
 
            <div className='flex flex-col border-2 border-sky-400 rounded-xl max-w-screen-md p-4 mx-auto'>
                <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Class </label>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                />
                </div>
                <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'> Time </label>
                <input
                    type='time'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2  w-full '
                />
                </div>
                <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Date</label>
                <input
                    type='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2  w-full '
                />
                </div>
                <button className='bg-sky-300' onClick={handleEditBooking}>
                Save
                </button>
            </div>
            </div>
      )


}

export default EditBooking
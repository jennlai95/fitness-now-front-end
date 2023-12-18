import axios from "axios";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditBooking = () => {
    const [title, setTitle] = useState('');
    const [ time, setTime ] = useState('');
    const [ date, setDate ] = useState('');
    const [loading, setLoading ] = useState(false);
    const {id} = useParams();

    const API_URL = 'https://fitness-studio-app-e1ebefd30762.herokuapp.com/';

    useEffect(() => {
        setLoading(true);
        axios.get('API_URL/booking/${id}')
        .then((response) => {
            setTitle(response.data.description);
            setTime(response.date.time);
            setDate(response.data.date);
            setLoading(false);
        }). catch((error) => {
            setLoading(false);
            alert('An error occured, please try again');
            console.log(error);
        });
    }, [])

    const handleEditBooking = () => {
        const data = {
          title,
          time,
          date,
        };
        setLoading(true);
        axios
          .put(`API_URL/booking/${id}`, data)
          .then(() => {
            setLoading(false);
            enqueueSnackbar('Booking edited successfully', { variant: 'success' });
            navigate('/');
          })
          .catch((error) => {
            setLoading(false);

            enqueueSnackbar('Error', { variant: 'error' });
            console.log(error);
          });
      };

      return (
        <div className='p-4'>
            
            <h1 className='text-3xl my-4'>Edit Booking</h1>
 
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Title</label>
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
                    type='number'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2  w-full '
                />
                </div>
                <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Date</label>
                <input
                    type='number'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2  w-full '
                />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleEditBooking}>
                Save
                </button>
            </div>
            </div>
      )


}

export default EditBooking
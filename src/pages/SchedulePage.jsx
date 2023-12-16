import React from 'react'
import { DateRangePicker } from 'react-date-range';
import Layout from '../components/Layout';

function Schedule() {
  return (
    <div> 
       <Layout/>
    <div className='mt-50 flex flex-col items-center gap-30'>
      <div> Abiyt the classes </div>
      <div className="listContainer">
      <h1 className='w-100 '> Yoga </h1>
      <h1 className='w-100 '> Pilates </h1>
      <h1 className='w-100 '> Hot Pilates </h1>

      </div>
     </div>
    </div>
  )
}

export default Schedule
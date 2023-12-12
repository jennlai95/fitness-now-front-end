import React from 'react'
import { Link } from 'react-router-dom'


export default function Classes() {
  return (


 <div>
    <div class="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      <div class="p-4 text-center text-white bg-blue-500">Hot Yoga</div>
      <div class="p-4 text-center text-white bg-blue-500"> Reformers Pilate</div>
      <div class="p-4 text-center text-white bg-blue-500">Mat Pilates</div>
    </div>

    <button> Login</button>
          <div className='text-center text-gray-400'> 
            <Link to ={'/registration'}> Register Here </Link>
          </div>
    </div>
  )
}


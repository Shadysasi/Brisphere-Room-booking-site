import React, { useEffect, useState } from 'react'
import { IoIosWifi } from "react-icons/io";

const Services = () => {
  const[servicesList,setServicesList]=useState([])

  const fetchData=async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json()
    setServicesList(data)
    
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className='p-4 mb-4' id='services'>
      <h1 className='text-center text-2xl font-semibold mb-4'>Services</h1>
      <ul className='flex flex-wrap justify-center items-center gap-4 p-4'>
        {servicesList.map((serviceDetail, index) => {
            return index + 1 <= 9 ? (
              <li key={serviceDetail.id} className='bg-gray-50 flex flex-col items-center rounded-lg shadow-md p-4 md:h-[200px] md:w-1/4'>
                <div>
                  <IoIosWifi size={50} color='gray'/>
                </div>
                <p className='font-bold'>{serviceDetail.email}</p>
                <p className='text-sm'>{serviceDetail.body}</p>
              </li>
            ): undefined           
        })}
      </ul>
    </div>
  )
}

export default Services
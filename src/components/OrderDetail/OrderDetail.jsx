import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { FiMinusCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'


import { addOrder } from '../OrderReducer';
import { useDispatch } from 'react-redux';



const OrderForm = () => {

    const [startDate,setStartDate]=useState(new Date())
    const [endDate,setEndDate]=useState(new Date())
    const [quantity,setQuantity]=useState(0)

    const dispatch = useDispatch()
    const navigate= useNavigate();
    
   
    const handleSubmit=(event)=>{
        event.preventDefault()
        dispatch(addOrder({startDate,endDate,quantity}))

        setTimeout( ()=>{
            navigate("/bookingdetail");
        },10);
    }

  return (
    <form onSubmit={handleSubmit} className='flex justify-around'>
        <div className='flex flex-col justify-center items-center mx-1 md:mx-4'>
            <p className='block mb-1 text-sm md:text-lg font-medium text-gray-900'>CHECK-IN</p>
            <label className='flex'>
                <DatePicker 
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)}
                    dateFormat='dd MMM YYYY'
                    minDate={new Date()}
                    className='bg-transparent font-bold text-sm w-[90px] focus:outline-none focus:ring-0'
                />
                <span className='flex items-end'><IoMdArrowDropdown/></span>
            </label>
        </div>
        <div className="w-0.5 h-auto bg-gray-600 mx-4"></div>
        <div className='flex flex-col justify-center items-center mx-1 md:mx-4'>
            <p className='block mb-1 text-sm md:text-lg font-medium text-gray-900'>CHECK-OUT</p>
            <label className='flex'>
                <DatePicker 
                    selected={endDate} 
                    onChange={(date) => setEndDate(date)}
                    dateFormat='dd MMM YYYY'
                    minDate={new Date()}
                    className='bg-transparent font-bold text-sm w-[90px] focus:outline-none focus:ring-0'
                />
                <span className='flex items-end'><IoMdArrowDropdown/></span>
            </label>
        </div>
        <div className="w-0.5 h-auto bg-gray-600 mx-4"></div>    
        <div className="flex flex-col justify-center items-center mx-1 md:mx-4">
            <label className="block mb-1 text-sm md:text-lg font-medium text-gray-900">ROOMS</label>
            <div className="flex justify-between items-center">
                <button type="button" onClick={()=> quantity > 0 ? setQuantity(quantity-1) : ""}>
                    <FiMinusCircle/>
                </button>
                <p className="font-bold md:text-lg text-center mx-2">{quantity}</p>
                <button type="button" onClick={()=>setQuantity(quantity+1)}>
                    <FaCirclePlus/>
                </button>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <button type='submit' 
                className='bg-sky-700 text-white text-sm md:text-lg font-bold px-8 py-2 ml-4 rounded-lg'
            >
                Book
            </button>    
        </div>
    </form>
  )
}

export default OrderForm
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { FiMinusCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { addUser } from '../UserReducer';
import { addOrder } from '../OrderReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const BookingDetail = () => {
  const orders = useSelector((state)=>state.order)


  const [inputValue,setInputValue]=useState({userName:'',email:'',phone:'',adult:'',children:''});
  const [startDate,setStartDate]=useState(orders.order.startDate)
  const [endDate,setEndDate]=useState(orders.order.endDate)
  const [quantity,setQuantity]=useState(orders.order.quantity)

  
  const dispatch = useDispatch()
  const navigate= useNavigate();

  const handleInput = (e) => {
        setInputValue({...inputValue,[e.target.name]:e.target.value})
  }
  
    const timeDifference=endDate.getTime()-startDate.getTime()
    const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    const totalFare = dayDifference*quantity*6215
  

  const handleSubmit=event=>{
    event.preventDefault()
    dispatch(addUser(inputValue))
    dispatch(addOrder({startDate,endDate,quantity,totalFare}))
    
    setTimeout( ()=>{
        navigate("/orderconform");
    },10);
  }

  return (
    <>
        <Header/>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center h-[60vh] md:p-12 p-4'>
            <div className='grid md:grid-rows-2 md:grid-cols-2 gap-4 w-full md:w-2/3 bg-gray-100 md:p-12 md:pb-20 p-4 pb-10 mb-4 '>
                <input type='text' name='userName' placeholder='User Name' className='h-10 px-4' value={inputValue.userName}
                        onChange={handleInput}
                />
                <input type='text' name='email' placeholder='E mail' className='h-10 px-4' value={inputValue.email}
                        onChange={handleInput}
                />
                <input type='text' name='phone' placeholder='Phone Number' className='h-10 px-4' value={inputValue.phone}
                        onChange={handleInput}
                />
                <div className='grid grid-cols-2 gap-4'>
                    <input type='text' name='adult' placeholder='adult' className='h-10 px-4' value={inputValue.adult}
                            onChange={handleInput}
                    />
                    <input type='text' name='children' placeholder='children' className='h-10 px-4' value={inputValue.children}
                            onChange={handleInput}
                    />
                </div>
            </div>
            <div className='flex justify-center items-center w-auto bg-slate-50 rounded-lg shadow-lg md:mt-[-70px]  mt-[-50px] mb-4 p-4 md:p-12'>
              <div className='flex justify-around'>
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
                    <div className="relative flex justify-between items-center">
                        <button type="button" onClick={()=> quantity > 0 ? setQuantity(quantity-1) : ""}>
                            <FiMinusCircle/>
                        </button>
                        <p className="font-bold md:text-lg text-center mx-2">{quantity}</p>
                        <button type="button" onClick={()=>setQuantity(quantity+1)}>
                            <FaCirclePlus/>
                        </button>
                    </div>
                </div>
                <div>
                    <label className='flex'>
                        <button type='submit' className='bg-sky-700 text-white text-sm md:text-lg font-bold md:px-8 px-4 py-2 ml-4 rounded-l-lg'>
                        ₹ { totalFare>0 ? `${totalFare}`:'00.00'}
                        </button>
                        <span className='flex items-center text-white bg-cyan-900 px-2 rounded-r-lg'><FaArrowRight/></span>
                    </label>
                    <p className='hidden md:block text-[12px] font-bold text-center'>Click to pay token amount</p>
                </div>
              </div>
            </div>
        </form>
        <Footer/>
    </>
  )
}

export default BookingDetail
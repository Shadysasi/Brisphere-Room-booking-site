import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';



const OrderConform = () => {
    const users = useSelector((state)=>state.user)
    const orders = useSelector((state)=>state.order)
    const {startDate,endDate,quantity,totalFare} = orders.order
    
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May","Jun","Jul", "Aug", "Sep", "Oct", "Nov","Dec"];

    function convert(date1) {
        return `${date1.getDate()} ${monthNames[date1.getMonth()]} ${date1.getFullYear()}`
        
    }
    const checkIn = convert(startDate)
    const checkOut = convert(endDate)
    console.log(totalFare)
    
  return (
        <>
            <Header/>
            <div className='flex flex-col justify-center items-center h-[60vh] md:p-12 p-4 mt-8'>
                <div className='flex bg-gray-100 w-full md:w-2/3 pb-20'>
                    <div className='w-1/2  md:p-6 p-2'>
                        <h1 className='text-lg font-bold'>{users.user.userName}</h1>
                        <p className='text-sm'>+91 - {users.user.phone}</p>
                        <p className='text-sm'>{users.user.email}</p>
                        <p className='text-sm'>{users.user.adult} Adults and {users.user.children} Children</p>

                    </div>
                    <div className="w-0.5 h-auto bg-gray-600 mx-4 "></div>
                    <div className='w-1/2 flex justify-center items-center gap-4'>
                        <FaCheckCircle color='green' size={48}/>
                        <div>
                            <h1 className='text-lg font-bold'>Order Complete</h1>
                            <p className='text-sm'>have questions?</p>
                            <a href='/#' className='text-sm text-blue-500'>contact us</a>
                        </div>
                    </div>
                </div>  
                <div className='flex justify-center items-center w-auto bg-slate-50 rounded-lg shadow-lg md:mt-[-70px]  mt-[-40px] mb-4 p-4 md:p-12'>
                    <div className='flex justify-around'>
                        <div className='flex flex-col justify-center items-center mx-1 md:mx-4'>
                            <p className='block mb-1 text-sm md:text-lg font-medium text-gray-900 '>CHECK-IN</p>
                            <p className='font-bold text-sm'>{checkIn}</p>
                        </div>
                        <div className="w-0.5 h-auto bg-gray-600 mx-4"></div>
                        <div className='flex flex-col justify-center items-center mx-1 md:mx-4'>
                            <p className='block mb-1 text-sm md:text-lg font-medium text-gray-900 '>CHECK-OUT</p>
                            <p className='font-bold text-sm'>{checkOut}</p>
                        </div>
                        <div className="w-0.5 h-auto bg-gray-600 mx-4"></div>    
                        <div className="flex flex-col justify-center items-center mx-1 md:mx-4">
                            <p className="block mb-1 text-sm md:text-lg font-medium text-gray-900">ROOMS</p>
                            <p className='font-bold text-sm text-center'>{quantity}</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button type='button' 
                                className='bg-sky-700 text-white text-sm md:text-lg font-bold px-8 py-2 ml-4 rounded-lg'
                            >
                            ₹ { totalFare>0 ? `${totalFare}`:'00.00'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
  )
}

export default OrderConform
import React from 'react';


import image from "../../Assets/ladakhImage.jpg";
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import OrderDetail from "../OrderDetail/OrderDetail";
import Header from '../Header/Header';
import Discover from "../Discover/Discover"
import Services from "../Services/Services"
import Footer from '../Footer/Footer';


const Home = () => {
  return (
    <>
        <Header/>
        <div className='flex flex-col justify-center items-center md:p-8 p-4'>
            <div className='flex bg-gray-100 w-full md:w-2/3'>
                <div className='w-1/2 bg-gray-100 md:p-10 p-4'>
                    <h1 className='text-[24px] md:text-[36px] font-semibold'>Work from ladakh</h1>
                    <p className='text-sm'>India's first true digital tourism ecosystem</p>
                    <div className='flex mt-4'>
                        <MdOutlineFacebook size={24} className='mr-4'/>
                        <AiFillInstagram size={24}/>
                    </div>
                </div>
                <img className='w-1/2 ' src={image} alt='ladakh'/>
            </div>  
            <div className='flex justify-center items-center w-auto bg-slate-50 rounded-lg shadow-lg md:mt-[-70px]  mt-[-40px] mb-4 p-4 md:p-12'>
                <OrderDetail/>    
            </div>
        </div>
        <Discover/>
        <Services/>
        <Footer/>
    </>
  )
}

export default Home
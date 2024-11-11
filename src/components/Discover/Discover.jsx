import React, { useState } from 'react'
import profile from "../../Assets/profile.png"
import { AiFillStar } from "react-icons/ai";
import ladakhImage from "../../Assets/ladakh_river.jpg"

const reviews = [ { reviewer: 'Arjun Raghav', 
                    review: 'I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.', 
                    rating: 4 
                    },
                  { reviewer: 'Arjun Raghav', 
                    review: 'I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.', 
                    rating: 4 
                    },
                  { reviewer: 'Arjun Raghav', 
                      review: 'I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.', 
                      rating: 4 
                    },
                  { reviewer: 'Arjun Raghav', 
                      review: 'I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.', 
                      rating: 5
                    },
                ]
            
const Discover = () => {
    const [isHovered,setIsHovered]=useState(false)

  return (
    <div id='discover'>
        <h1 className='text-center text-2xl font-semibold mb-4'>Discover</h1>
        <ul className='flex flex-wrap justify-around items-center gap-4 p-4'>
            {reviews.map((reviewDetail,index)=>
                (
                    <li key={index} className='flex flex-col items-center rounded-lg shadow-md p-4  md:w-1/4'
                        onClick={()=>setIsHovered(!isHovered)}  
                    >
                        {isHovered && (<img src={ladakhImage} alt='scenic view' className=''/>)}
                        <div className='flex justify-center items-center'>
                            <img className="w-10 h-10 rounded-full mr-2" src={profile} alt="Rounded avatar"/>
                            <div className=''>
                                <h1>{reviewDetail.reviewer}</h1>
                                <div className='flex'>
                                    {[...Array(reviewDetail.rating)].map((e,i)=>
                                    (
                                        <AiFillStar key={i} className='mr-1 text-yellow-300'/>
                                    ))}
                                </div>   
                            </div>
                        </div>
                        <p>{reviewDetail.review} 
                            <a href="/#" className="text-blue-500"> read more</a>
                        </p>
                    </li>
                )
            )}
        </ul>
    </div>
  )
}

export default Discover
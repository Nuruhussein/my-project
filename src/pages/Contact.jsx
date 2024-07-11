import React from 'react'
import { FaMapLocation } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";
import Contactform from '../components/Contactform';
function Contact() {
  return (
    <div>
    
        <div className=" mb-14 ">
            <section className={`flex md:flex-row flex-col m-auto px-10   justify-center items-center `}>
                <div
    
      className={`flex-1 flex  justify-center items-center -z-10 ml-0 md:mt-15 mt-10 relative`}>
      <img src="https://png.pngtree.com/png-clipart/20200722/original/pngtree-abstract-mosque-moslem-logo-vector-for-corporate-business-free-logo-design-png-image_5007087.jpg" alt="billing" className="sm:w-[50%] w-5/6 h-full" />
    </div>
    <div 
      className={ `flex  md:ml-10 flex-col my-0 md:mt-15 mt-10 justify-start items-start`}>
      <div className='flex gap-4 p-4  justify-center items-center'>
        <div className={`text-4xl px-4   text-blue-400 font-semibold `}><FaMapLocation /></div>
        <div>
          <h2 className={`text-lg   text-gray-400 font-semibold md:text-lg`}>
            ADDRES
          </h2>
<h2 className={`text-2xl    text-gray-500 font-semibold md:text-3xl`}>
        Gerji, Behid Alfoz <br/>Building, Addis Ababa, ETHIOPIA
      </h2>
        </div>
  
      </div>
      
   <div className='flex gap-4 p-4  justify-center items-center'>
        <div className={`text-4xl px-4   text-blue-400 font-semibold `}><CgMail /></div>
        <div>
          <h2 className={`text-lg   text-gray-400 font-semibold md:text-lg`}>
           EMAIL
          </h2>
<h2 className={`text-2xl    text-gray-500 font-semibold md:text-3xl`}>
        Contact@vxhzvyu
      </h2>
        </div>
  
      </div>
 <div className='flex gap-4 p-4  justify-center items-center'>
        <div className={`text-4xl px-4   text-blue-400 font-semibold `}><FaPhone /></div>
        <div>
          <h2 className={`text-lg   text-gray-400 font-semibold md:text-lg`}>
        PHONE NUMBER
          </h2>
<h2 className={`text-2xl    text-gray-500 font-semibold md:text-3xl`}>
      +251945925949 +2519965689898 <br/>+2519911702012
      </h2>
        </div>
  
      </div>


     <a href="/" className="flex text-2xl md:ml-28 ml-6 mt-7 items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 bg-gray-200 opacity-75  rounded-3xl md:inline-flex">
                                Go to Home
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 text-blue-500 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </a>
    </div>

    
  </section>
            </div>


    <Contactform/>
    
    <div className=" mt-12 flex justify-center items-center ">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6491100190074!2d38.80713877490875!3d9.00439849105594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853a75e5441d%3A0xcdee69682c57ed1f!2sGerji(Mebrat%20Hail)%20Electric%20Power%20Station%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1715859591429!5m2!1sen!2set" 
    width="1000"
        height="450"
        style={{ border: "0" }} 
        allowfullscreen="" loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
           
    </div>
  )
}

export default Contact

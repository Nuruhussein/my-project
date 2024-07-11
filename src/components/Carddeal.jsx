import React from 'react'
import remedanImage from '../assets/remedan.png';
import { FaChevronRight } from "react-icons/fa6";
function Carddeal() {
  return (
    <div className='
max-w-screen-2xl mx-auto'>
        <div className="sm:pt-16 pt-6 bg-yellow-gradient md:h-20 h-24 w-full mb-0"></div>
        <div className=" ">
            <section className={`flex  md:flex-row flex-col-reverse my-0 justify-center items-center`}>
    <div 
      className={ `flex  flex-col pb-14 m-auto px-10 justify-center items-start`}>
      <h2 className=" mb-6 font-bold sm:text-[48px] text-[40px] leading-[56.8px]  font-poppins ">
        {/* Find a better card deal <br className="sm:block hidden" /> in few easy
        steps. */}
         አል - መህዲዎች ነን !   <br className="sm:block hidden" />ሠውን እናከብራለን ፤ <br className="sm:block hidden" />ራዕያችንን እንደፍራለን!<br className="sm:block hidden" />
      </h2>
      <p className={`sm:text-[18px] text-[14px] sm:leading-[36.8px] leading-[30.8px] font-poppins font-normal max-w-[470px]`}>
        አል መህዲ መርከዝ መነሻችን በሓበሻሆኖ መድረሻችን ዓለምን በቁርኣን ብርሓን በማፍካት ፣ትዉልድን በተፈጥሮ ሰዋዊ ማንነት ለማነፅ እንተጋለን!
      </p>
       <p className={`sm:text-[14px] text-[10px] sm:leading-[36.8px] leading-[30.8px] font-poppins font-normal max-w-[470px]`}>
        አላህን እንፍራ! ሠውን እናክብር፤ ራዕያችንን እንድፈር!
      </p>
     <button type="button" className={`py-4 mt-10 px-6  font-medium text-[18px]  bg-blue-gradient rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 outline-none`}>
  <a href='about' className='flex justify-center items-center gap-3'>About Us <FaChevronRight /> </a>  
  </button>
    </div>

    <div
    
      className={`flex-1 flex  justify-center items-center md:ml-10 ml-0 md:mt-0 mt-0 relative`}>
      <img src={remedanImage} alt="billing" className="sm:w-[85%] w-5/6 h-3/4" />
    </div>
  </section>
            </div>

    </div>
  )
}

export default Carddeal

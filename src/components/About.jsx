import React from "react";
import { Link } from "react-router-dom";
import quran from "../assets/quran.png";

function About() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <header
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.0.2), rgba(255,255,255,0.0)), url('https://thumbs.dreamstime.com/b/islamic-banner-vector-white-abstract-background-illustration-eps-94684843.jpg'`,
        }}
        className=" bg-[url('https://thumbs.dreamstime.com/b/islamic-banner-vector-white-abstract-background-illustration-eps-94684843.jpg')] bg-cover  items mb-14bg-cover bg-no-repeat realtive  h-3/5"
      >
        {/* <div className="sm:py-16  mt-5 pt-6 md:flex  hidden bg-green-gradient md:h-20 h-24 w-full mb-0">
            <h1 className='font-bold text-3xl px-5 mx-4 text-gray-500   '><Link to="/">Home</Link></h1>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-28 text-gray-500  h-16 border border-l-gray-500 border-l-8">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
            <h2 className='font-bold text-3xl px-2 pt-4 text-blue-500 hover:text-gray-500 cursor-pointer '>About</h2>
           </div> */}
        <section className="md:py-28 p-0">
          <div className=" flex xl:flex-row  flex-col max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden  md:px-8">
            <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
              <h1 className="text-sm text-indigo-600 font-medium">
                Over 200 successful deals
              </h1>
              <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                We help startups to grow and make money
              </h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae.
              </p>
              <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                {/* <a href="javascript:void(0)" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                Let's get started
                            </a> */}
                <a
                  href="contact"
                  className="flex items-center max-w-48 justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
                >
                  Get contact
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 text-blue-500 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex-none md:mt-14 mt-10 xl:max-w-xl w-full">
              <img src={quran} className=" md:rounded-tl-[108px]" alt="" />
            </div>
          </div>
        </section>
      </header>
      <section className=" p-0">
        <div className=" flex flex-col-reverse max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden  md:px-8">
          <div className="flex-none space-y-5  md:mt-0 mt-10 px-4 sm:max-w-lg md:px-0 lg:max-w-3xl">
            <h1 className="text-sm text-indigo-600 font-medium">
              Over 200 successful deals
            </h1>
            <h2 className="text-2xl text-gray-800 font-semibold md:text-3xl">
              About Us
            </h2>
            <p
              className={`sm:text-[18px] text-gray-500  text-[10px]sm:leading-[36.8px] leading-[30.8px] font-poppins font-normal max-w-3xl`}
            >
              MoDreams Pharmaceuticals is a private limited company that is
              currently selling pharmaceutical supplies for wholesalers and
              retailers. The company started functioning since 2019 G.C
            </p>
            <h2 className="text-2xl text-gray-800 font-semibold md:text-3xl">
              our mission
            </h2>
            <p
              className={`sm:text-[18px] text-gray-500  text-[10px]sm:leading-[36.8px] leading-[30.8px] font-poppins font-normal max-w-3xl`}
            >
              MoDreams Pharmaceuticals is a private limited company that is
              currently selling pharmaceutical supplies for wholesalers and
              retailers. The company started functioning since 2019 G.C is a
              private limited company that is currently selling pharmaceutical
              supplies for wholesalers and retailers. The company started
              functioning since 2019 G.C
            </p>

            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              {/* <a href="javascript:void(0)" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                Let's get started
                            </a> */}
              <a
                href="contact"
                className="flex max-w-48 items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
              >
                Get contact
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 text-blue-500 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className=" md:flex hidden mt-0 md:max-w-xl w-full">
            <img
              src="https://png.pngtree.com/png-clipart/20200722/original/pngtree-abstract-mosque-moslem-logo-vector-for-corporate-business-free-logo-design-png-image_5007087.jpg"
              alt="Float UI logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

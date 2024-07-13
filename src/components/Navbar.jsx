import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { facebook, telegram, tiktok, youtube } from "../assets";

import { FaChevronRight } from "react-icons/fa6";
import { useUser } from "../Context";
import logo from "../assets/logo.png";
import Admindropdown from "./Admindropdown";
const socialMedia = [
  {
    id: "social-media-1",
    icon: telegram,
    link: "https://web.telegram.org/a/#-1001663955988",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/profile.php?id=100089108505894&mibextid=rS40aB7S9Ucbxw6",
  },
  {
    id: "social-media-3",
    icon: youtube,
    link: "https://youtube.com/@al-mehdialmediterbiyacente9301?si=_PQEn1_7gy-EpShO",
  },
  {
    id: "social-media-4",
    icon: tiktok,
    link: "https://vm.tiktok.com/ZMjab9vmv/?fbclid=IwAR1WmlvW0ZKwxCJ_xhk9f0ENTE9baBNAzrsuqfM5i4J0S68V-qO9XED0hn4",
  },
];

function Navbar() {
  const [state, setState] = useState(false);
  const location = useLocation(); // Use useLocation to get the current route
  const data = useUser();

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Gallery", path: "gallery" },
    { title: "About", path: "about" },
    ...(location.pathname === "/"
      ? [{ title: "Service", path: "#feauter" }]
      : []),
  ];

  return (
    <nav
      className="sticky top-0 z-50 bg-white items-center  px-4 mx-auto max-w-screen-2xl w-screen shadow-sm shadow-gray-200 sm:px-8 md:flex md:space-x-6"
      // Added `sticky`, `top: 0`, and `z-50` to keep the navbar at the top
    >
      <div className="flex justify-between md:pl-12 items-center">
        <Link to="/">
          <div className="h-24 w-24">
            <img
              src={logo}
              // width={120}
              // height={30}
              className="h-28 w-24  pt-3"
              alt="Logo"
            />
          </div>
        </Link>
        <button
          className="text-gray-500 outline-none md:hidden"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${
          state
            ? "absolute z-40 top-10 right-0 px-4 border-b bg-white rounded-bl md:border-none md:static sidebar"
            : "hidden"
        }`}
      >
        <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
          {navigation.map((item, idx) => (
            <li
              className="text-gray-500 text-[17px]  hover:text-indigo-600"
              key={idx}
            >
              {typeof item.path === "string" && item.path.startsWith("#") ? (
                <a
                  href={item.path}
                  onClick={(e) => handleScrollToSection(e, item.path.slice(1))}
                >
                  {item.title}
                </a>
              ) : (
                <Link to={item.path}>{item.title}</Link>
              )}
            </li>
          ))}
        </div>
        <li className="order-2 py-5 md:py-0 flex">
          {data.user ? (
            <div>
              <Admindropdown />
            </div>
          ) : (
            // <div className="flex">
            //   <button
            //     className="py-2 mx-5 px-5 rounded-lg font-medium text-white text-center bg-cyan-300 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline"
            //   >
            //     <a href="/write">write</a>
            //   </button>
            //   <Logout />
            // </div>
            location.pathname !== "/contact" && (
              <Link to="/contact">
                <div id="buttonid" className="group md:pr-28">
                  <div className="flex text-2xl  items-center justify-center gap-x-2 py-2 px-4 text-gray-500 md:text-gray-100  font-medium duration-150 active:bg-gray-100 md:bg-blue-600 opacity-75 rounded-2xl md:inline-flex">
                    contact us
                    <div className="hidden group-hover:block">
                      <FaChevronRight />
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

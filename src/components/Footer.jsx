




import {  facebook, instagram, linkedin, twitter  } from "../assets";

const footerLinks = [
  {
    title: "Menu",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Gallery",
        link: "/gallery",
      },
      {
        name: "Contact Us",
        link: "/contact",
      },
    
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        name: "Gerji, Behid Alfoz Building,  Addis Ababa, ETHIOPIA",
        link: "#",
      },
      {
        name: "Contact@huussscom",
        link: "#",
      },
      {
        name: "	+251945925949 +2519965689898 +2519911702012",
        link: "#",
      }
    ],
  }
];

const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];


const Footer = () => {




  return(
  <section className={`flex 
max-w-screen-2xl mx-auto justify-center px-10 items-center mt-16 bg-gray-100 sm:py-16 py-6 flex-col`}>
    <div
     className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}>
      <div
  
      className="flex-[1] flex flex-col justify-start mr-10">
          <h2 className='font-semibold text-3xl text-gray-500   '>About us</h2>
        <p className={`font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins text-gray-500 font-medium text-[18px] leading-[27px] ">
              {footerlink.title}
            </h4>
            <ul className="list-none text-gray-400  mt-4">
              {footerlink.links.map((link, index) => (
                <li
           
   
      
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-blue-500 cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px]">
        Copyright Ⓒ 2024 merkez. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (




          <img


            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain bg-gray-500 cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
)}

export default Footer;

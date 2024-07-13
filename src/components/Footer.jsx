import { facebook, telegram, tiktok, youtube } from "../assets";

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
        name: " ቁ1 ፉሪ, ቁ2 ጀሞ 1 ተውፊቅ መስጂድ ጀርባ  ቁ3 ደሴ",
        link: "#",
      },
      {
        name: "almehditerbiyacenter@gmail.com",
        link: "#",
      },
      {
        name: " +2519 06 49 49 39  +251962380699",
        link: "#",
      },
    ],
  },
];

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

const Footer = () => {
  return (
    <section
      className={`flex 
max-w-screen-2xl mx-auto justify-center px-10 items-center mt-16 bg-gray-100 sm:py-16 py-6 flex-col`}
    >
      <div
        className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}
      >
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <h2 className="font-semibold text-3xl text-gray-500   ">About us</h2>
          <p
            className={`font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] mt-4 max-w-[312px]`}
          >
            ሙሉ በሙሉ ለቂርአት ምቹ በሆነ መልኩ በብቁ ኡስታዞች ይሰጣል።
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
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

      <div className="w-full flex justify-center items-center  md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <div className="flex flex-row  md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[31px] h-[31px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;

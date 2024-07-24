import React from "react";
import remedanImage from "../assets/remedan.png";
import { FaChevronRight } from "react-icons/fa6";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
function Carddeal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      className="
max-w-screen-2xl mx-auto"
    >
      <div className="sm:pt-16 pt-6 bg-yellow-gradient md:h-20 h-24 w-full mb-0"></div>
      <div className=" ">
        <section
          className={`flex  md:flex-row flex-col-reverse my-0 justify-center items-center`}
        >
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: -200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.75, delay: 0.5 }}
            className={`flex  flex-col pb-14 m-auto px-10 justify-center items-start`}
          >
            <h2 className=" mb-6 font-bold sm:text-[48px] text-[40px] leading-[56.8px]  font-poppins ">
              አል - መህዲዎች ነን ! <br className="sm:block hidden" />
              ሠውን እናከብራለን ፤ <br className="sm:block hidden" />
              ራዕያችንን እንደፍራለን!
              <br className="sm:block hidden" />
            </h2>
            <p
              className={`sm:text-[18px] text-[14px] sm:leading-[36.8px] leading-[30.8px] font-poppins font-normal max-w-[470px]`}
            >
              አል መህዲ መርከዝ መነሻችን በሓበሻሆኖ መድረሻችን ዓለምን በቁርኣን ብርሓን በማፍካት ፣ትዉልድን በተፈጥሮ
              ሰዋዊ ማንነት ለማነፅ እንተጋለን!
            </p>
            <p
              className={`sm:text-[14px] text-[10px] sm:leading-[36.8px] leading-[30.8px] font-poppins font-normal max-w-[470px]`}
            >
              አላህን እንፍራ! ሠውን እናክብር፤ ራዕያችንን እንድፈር!
            </p>
            <motion.button
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: -200 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.15 }}
              type="button"
              className={`py-4 mt-10 px-6  font-medium text-[18px]  bg-blue-gradient rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 outline-none`}
            >
              <a
                href="about"
                className="flex justify-center items-center gap-3"
              >
                About Us <FaChevronRight />{" "}
              </a>
            </motion.button>
          </motion.div>

          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 200 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.75, delay: 0.5 }}
            className={`flex-1 flex  justify-center items-center md:ml-10 ml-0 md:mt-0 mt-0 relative`}
          >
            <img
              src={remedanImage}
              alt="billing"
              className="sm:w-[85%] w-5/6 h-3/4"
            />
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Carddeal;

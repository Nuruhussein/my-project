import React from "react";
import remedanImage from "../assets/hero.png";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full mb-14 lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <motion.div
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, x: -200 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.75, delay: 0.5 }}
                    >
                      <img
                        className="object-cover object-center  mx-auto rounded-3xl shadow-2xl"
                        alt="hero"
                        src={remedanImage}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: 200 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.95, delay: 0.5 }}
              className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0"
            >
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                {" "}
                Al-mahdi{" "}
              </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                አል መህዲ የቁርአን እና ተርቢያ ማዕከል
              </h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
                አል መህዲ የቁርዓን ትምህርትና የተርቢያ ማዕከል በአዲስ አበባ ከ2014 ዓ.ል ጀምሮ በተለያየ የእድሜ
                ከልል ያሉ ተማሪዎችን በተደራጀ መልኩ እያስተማረ የሚገኝ ማዕከል ሲሆን በቋሚ ፕሮግራም በሂፍዝና ነዞር
                ተመላላሽ ተማሪዎችን እያስተማረ ይገኛል።
              </p>
              <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, x: 200 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.75, delay: 0.9 }}
                  className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions"
                >
                  <a
                    href="contact"
                    className="flex max-w-48 items-center justify-center gap-x-2 py-2 px-7 text-gray-700 bg-gray-100 hover:text-gray-500 font-medium duration-150 active:bg-gray-100  rounded-lg md:inline-flex"
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
                </motion.div>

                <div className="sm:max-w-lg sm:flex">
                  <p className="mt-3 text-xs text-gray-500">
                    contact us now and start your journay
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

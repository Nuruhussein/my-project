import React from "react";
import { IoBook } from "react-icons/io5";
import { FaQuran } from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
function Feauter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const features = [
    {
      icon: <IoBook />,
      title: "ተመላላሽ ቂርአት",
      desc: "ተማሪዎች በ ጧት እና በከሰአት ክፍለ ጊዜ በ አካል ወደ ቅርንጫፍ መርከዞች በመገኘት የሚቀሩበት ስርአት ነው",
    },
    {
      icon: <FaQuran />,
      title: "ተመላላሽ አዳሪ",
      desc: "ተማሪዎች ወደ አመሻሽ ሰአት በመገኘት አዳራቸወን እዛ በማድረግ የሚከሩበት ስርአት ሲሆን፣ ያሉት ቦታዎች ለወንዶች ብቻ ክፍት ናቸው",
    },
    {
      icon: <IoBook />,
      title: "ኦንላይን (የበይነ መረብ) ቂርአት",
      desc: "በዚህ ቂርአት ስር ወደ ቅርንጫፎቻችን በአካል መምጣት ለማይችሉ ተማሪዎች የተመቻቸ ሲሆን፣ ማንኛውም ሰው መስፈርቱን እስካሟላ ድረስ መማር ይችላል",
    },
  ];

  return (
    <section id="feauter" className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="max-w-xl space-y-3"
        >
          <h3 className="text-indigo-600 font-semibold">አገልግሎታችን</h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            መርከዛችንን ይቀላቀሉ{" "}
          </p>
          <p>
            ቁርዓን ከቃዒዳ ጀምሮ፣የቁርኣን ሒፍዝ እና የተለያዩ የፊቅህ፣የሀዲስ፣የዓቂዳ፣የሲራ ኪታቦች እናስተምራለን።
          </p>
        </motion.div>
        <div className="mt-12">
          <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
            {features.map((item, idx) => (
              <motion.li
                ref={ref}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.75, delay: idx * 0.25 }}
                key={idx}
                className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}
              >
                <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Feauter;

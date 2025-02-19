import React from "react";
import amir from "../assets/amir.jpg";
import amakari1 from "../assets/amakari1.jpeg";
import amakari2 from "../assets/amakari2.jpeg";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
function Review() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const reviews = [
    {
      imgURL: amir,
      customerName: "በሺር ሸይኽ ሓሰን ሀሚዲን",
      rating: "ስራ አስኪያጅ ",
      feedback: "የማዕከሉ መስራች እና ስራ አስኪያጅ ",
    },
    {
      imgURL: amakari1,
      customerName: "ዶ/ር ሸይኽ ሰዒድ ኺያር",
      rating: "አማካሪ ",
      feedback:
        "የሱና እስላማዊ ዩኒቨርሲቲ ዋና ስራ አስኪያጅ እና ከ አዲስ አበባ ዩኒቨርሲቲ የ ፊሎሎጂ ዶኦክሬት!",
    },

    {
      imgURL: amakari2,
      customerName: "ሸይኽ ኑረላህ ሓሚዲን",
      rating: "አማካሪ ",
      feedback: "የማእከሉ ዋና አማካሪ እና በ ዒልማቸዉ ብዙዎችን እየጠቀሙ ያሉ እና ኡማዉን እያገለገሉ የሚገኙ",
    },
  ];

  return (
    <section className="max-container pt-10">
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
        <h3 className="text-center text-4xl font-bold">
          <span className="text-coral-red text-gray-700">
            የ አል መህዲ የስራ አመራር አባላት
          </span>
        </h3>
        <p className="m-auto mt-4 max-w-lg  text-center font-montserrat text-gray-600 text-lg leading-7">
          ማእከላችን ቁርአንን እና የተለያዪ ዒልሞችን በማስተማር የረጅም አመታት ልምድ ባላቸው ኡስታዞች የተዋቀረ ነው
        </p>
      </motion.div>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.75, delay: index * 0.25 }}
            key={index}
            className="flex justify-center items-center flex-col"
          >
            <img
              src={review.imgURL}
              alt="customer"
              className="rounded-full object-cover w-[120px] h-[120px]"
            />
            <p className="mt-6 max-w-sm text-center leading-7 text-lg font-montserrat text-slate-gray">
              {review.feedback}
            </p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
              <p className="text-xl font-montserrat text-slate-gray">
                ({review.rating})
              </p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
              {review.customerName}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Review;

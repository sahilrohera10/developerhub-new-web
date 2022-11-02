import React from "react";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <div
      className="py-16 bg-gray-50"
      style={{
        width: "90vw",
        margin: "auto",
        marginTop: "100px",
        backgroundColor: "#EDE7E7",
        borderRadius: "20px",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:items-center justify-between lg:flex-row">
        <div className="mb-14 xl:mb-0">
          <h1 className="text-2xl leading-tight md:text-4xl xl:text-5xl font-semibold leading-10   text-gray-800 xl:w-2/3 pr-16 lg:pr-0">
            Our customers love what we do
          </h1>
          <p className="mt-4 text-base leading-normal text-gray-600 md:w-2/3 lg:w-3/4 pr-16 lg:pr-0">
            Over 500 companies use our product to understand their business and
            marketing better.
          </p>
          <button className="hidden md:block w-full sm:w-auto mt-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">
            Read success stories
          </button>
        </div>
        <div
          role="list"
          aria-label="Testimonials"
          className="xl:w-1/2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 flex-wrap justify-center items-start"
        >
          <motion.div
            viewport={{ once: false }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "easeIn", duration: 1.15, delay: 0.15 }}
            role="listitem"
            className="bg-white shadow rounded p-4 xl:p-8"
          >
            <img
              src="https://cdn.tuk.dev/assets/components/26May-update/quote.png"
              aria-hidden="true"
            />
            <div className="pl-4 pt-4 flex items-start justify-between">
              <div className="mr-6">
                <p className="xl:text-xl xl:leading-loose text-gray-600">
                  Course is really very good , teacher is explaining in very
                  details along with important definition, I think this is the
                  best course for Blockchain in Unbounce if you're looking for
                  the same go with this course .
                </p>
                <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                  Yash Singhal
                </p>
              </div>
              <img
                style={{ width: "70px", height: "70px", borderRadius: "50px" }}
                src="https://technomaits.vercel.app/singhal.jpeg"
                alt="Display Avatar of Anna Smith"
                role="img"
              />
            </div>
          </motion.div>
          <motion.div
            viewport={{ once: false }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "easeIn", duration: 1.15, delay: 0.15 }}
            role="listitem"
            className="bg-white shadow rounded p-4 xl:p-8"
          >
            <img
              src="https://cdn.tuk.dev/assets/components/26May-update/quote.png"
              aria-hidden="true"
            />
            <div className="pl-4 pt-4 flex items-start justify-between">
              <div className="mr-6">
                <p className="xl:text-xl xl:leading-loose text-gray-600">
                  My experience with Unbounce was wonderful. The courses
                  strengthened my concepts and helped me in my interviews.
                </p>
                <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                  Sahil Rohera
                </p>
              </div>
              <img
                style={{ width: "70px", height: "70px", borderRadius: "50px" }}
                src="https://technomaits.vercel.app/rohera.jpeg"
                alt="Display avatar of Dany John"
                role="img"
              />
            </div>
          </motion.div>
          <motion.div
            viewport={{ once: false }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "easeIn", duration: 1.15, delay: 0.15 }}
            role="listitem"
            className="bg-white shadow rounded p-4 xl:p-8"
          >
            <img
              src="https://cdn.tuk.dev/assets/components/26May-update/quote.png"
              aria-hidden="true"
            />
            <div className="pl-4 pt-4 flex items-start justify-between">
              <div className="mr-6">
                <p className="xl:text-xl xl:leading-loose text-gray-600">
                  I liked how they broke down the course into easy to understand
                  bits.
                </p>
                <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                  Yash Raj Hans
                </p>
              </div>
              <img
                style={{ width: "70px", height: "70px", borderRadius: "50px" }}
                src="https://technomaits.vercel.app/yrh.jpeg"
                alt="Display Avatar of Mike Blake"
                role="img"
              />
            </div>
          </motion.div>
          <button className="md:hidden w-full sm:w-auto mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">
            Read success stories
          </button>
        </div>
      </div>
    </div>
  );
}

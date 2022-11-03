// import React from "react";
// import { motion } from "framer-motion";

// export default function Testimonial() {
//   return (
//     <div
//       className="py-16 bg-gray-50"
//       style={{
//         width: "90vw",
//         margin: "auto",
//         marginTop: "100px",
//         backgroundColor: "#EDE7E7",
//         borderRadius: "20px",
//       }}
//     >
//       <div className="container mx-auto px-4 flex flex-col lg:items-center justify-between lg:flex-row">
//         <div className="mb-14 xl:mb-0">
//           <h1 className="text-2xl leading-tight md:text-4xl xl:text-5xl font-semibold leading-10   text-gray-800 xl:w-2/3 pr-16 lg:pr-0">
//             Our customers love what we do
//           </h1>
//           <p className="mt-4 text-base leading-normal text-gray-600 md:w-2/3 lg:w-3/4 pr-16 lg:pr-0">
//             Over 500 companies use our product to understand their business and
//             marketing better.
//           </p>
//           <button className="hidden md:block w-full sm:w-auto mt-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">
//             Read success stories
//           </button>
//         </div>
//         <div
//           role="list"
//           aria-label="Testimonials"
//           className="xl:w-1/2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 flex-wrap justify-center items-start"
//         >
//           <motion.div
//             viewport={{ once: false }}
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ type: "easeIn", duration: 1.15, delay: 0.15 }}
//             role="listitem"
//             className="bg-white shadow rounded p-3 xl:p-8"
//           >
//             <img
//               src="https://cdn.tuk.dev/assets/components/26May-update/quote.png"
//               aria-hidden="true"
//             />
//             <div className="pl-4 pt-4 flex items-start justify-between">
//               <div className="mr-6">
//                 <p className="xl:text-xl xl:leading-loose text-gray-600">
//                   Course is really very good ,I think this is the best course
//                   for Blockchain in Unbounce if you're looking for the same go
//                   with this course .
//                 </p>
//                 <p className="mt-4 text-base font-semibold leading-none text-gray-800">
//                   Yash Singhal
//                 </p>
//               </div>
//               <img
//                 style={{ width: "70px", height: "70px", borderRadius: "50px" }}
//                 src="https://technomaits.vercel.app/singhal.jpeg"
//                 alt="Display Avatar of Anna Smith"
//                 role="img"
//               />
//             </div>
//           </motion.div>
//           <motion.div
//             viewport={{ once: false }}
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ type: "easeIn", duration: 1.15, delay: 0.15 }}
//             role="listitem"
//             className="bg-white shadow rounded p-3 xl:p-8"
//           >
//             <img
//               src="https://cdn.tuk.dev/assets/components/26May-update/quote.png"
//               aria-hidden="true"
//             />
//             <div className="pl-4 pt-4 flex items-start justify-between">
//               <div className="mr-6">
//                 <p className="xl:text-xl xl:leading-loose text-gray-600">
//                   My experience with Unbounce was wonderful. The courses
//                   strengthened my concepts and helped me in my interviews.
//                 </p>
//                 <p className="mt-4 text-base font-semibold leading-none text-gray-800">
//                   Sahil Rohera
//                 </p>
//               </div>
//               <img
//                 style={{ width: "70px", height: "70px", borderRadius: "50px" }}
//                 src="https://technomaits.vercel.app/rohera.jpeg"
//                 alt="Display avatar of Dany John"
//                 role="img"
//               />
//             </div>
//           </motion.div>
//           <motion.div
//             viewport={{ once: false }}
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ type: "easeIn", duration: 1.15, delay: 0.15 }}
//             role="listitem"
//             className="bg-white shadow rounded p-3 xl:p-8"
//           >
//             <img
//               src="https://cdn.tuk.dev/assets/components/26May-update/quote.png"
//               aria-hidden="true"
//             />
//             <div className="pl-4 pt-4 flex items-start justify-between">
//               <div className="mr-6">
//                 <p className="xl:text-xl xl:leading-loose text-gray-600">
//                   I liked how they broke down the course into easy to understand
//                   bits.
//                 </p>
//                 <p className="mt-4 text-base font-semibold leading-none text-gray-800">
//                   Yash Raj Hans
//                 </p>
//               </div>
//               <img
//                 style={{ width: "70px", height: "70px", borderRadius: "50px" }}
//                 src="https://technomaits.vercel.app/yrh.jpeg"
//                 alt="Display Avatar of Mike Blake"
//                 role="img"
//               />
//             </div>
//           </motion.div>
//           <button className="md:hidden w-full sm:w-auto mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">
//             Read success stories
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <>
      <div className="mt-20" style={{ marginBottom: "250px" }}>
        <h2 className="text-2xl leading-6 text-white text-center px-4">
          Testimonials
        </h2>
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-white mt-4 text-center">
          What our client says
        </h1>
        <motion.div
          style={{ marginTop: "-100px" }}
          viewport={{ once: false }}
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "easeIn", duration: 1.0, delay: 0.15 }}
          className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20 px-10 py-10 gap-6"
        >
          <div>
            <div className="group w-full bg-white relative flex flex-col items-center cursor-pointer shadow-md md:p-12 p-6">
              <div className="text-gray-600  flex flex-col items-center">
                <svg
                  width={26}
                  height={27}
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24.5767"
                        height={27}
                        fill="white"
                        transform="translate(25.2578 27) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className="xl:w-80 text-base leading-normal text-center mt-4">
                  Course is really very good ,I think this is the best course
                  for Blockchain in Unbounce if you're looking for the same go
                  with this course .
                </p>
              </div>
              <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                <svg
                  width={34}
                  height={28}
                  viewBox="0 0 34 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd)">
                    <path
                      d="M17 19L28.2583 3.25H5.74167L17 19Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd"
                      x="0.741699"
                      y="0.25"
                      width="32.5167"
                      height="27.75"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feMorphology
                        radius={1}
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow"
                      />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={3} />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy={2} />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow"
                        result="effect2_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <img
                style={{ borderRadius: "50px" }}
                src="https://technomaits.vercel.app/singhal.jpeg"
                alt="profile pictre"
                className="w-12 h-12"
              />
              <p className="text-base font-semibold leading-4 my-2 text-gray-800">
                Yash Singhal
              </p>
              <p className="text-base leading-4 text-center text-gray-600">
                Developer
              </p>
            </div>
          </div>
          <div>
            <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
              <div className="text-gray-600  flex flex-col items-center">
                <svg
                  width={26}
                  height={27}
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24.5767"
                        height={27}
                        fill="white"
                        transform="translate(25.2578 27) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className="xl:w-80 text-base leading-normal text-center mt-4">
                  My experience with Unbounce was wonderful. The courses
                  strengthened my concepts and helped me in my interviews.
                </p>
              </div>
              <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                <svg
                  width={34}
                  height={28}
                  viewBox="0 0 34 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd)">
                    <path
                      d="M17 19L28.2583 3.25H5.74167L17 19Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd"
                      x="0.741699"
                      y="0.25"
                      width="32.5167"
                      height="27.75"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feMorphology
                        radius={1}
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow"
                      />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={3} />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy={2} />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow"
                        result="effect2_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <img
                style={{ borderRadius: "50px" }}
                src="https://technomaits.vercel.app/rohera.jpeg"
                alt="profile pictre"
                className="w-12 h-12"
              />
              <p className="text-base font-semibold leading-4 my-2 text-gray-800">
                Sahil Rohera
              </p>
              <p className="text-base leading-4 text-center text-gray-600">
                Developer
              </p>
            </div>
          </div>
          <div>
            <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
              <div className="text-gray-600 flex flex-col items-center">
                <svg
                  width={26}
                  height={27}
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24.5767"
                        height={27}
                        fill="white"
                        transform="translate(25.2578 27) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className="xl:w-80 text-base leading-normal text-center mt-4">
                  I liked how they broke down the course into easy to understand
                  bits. Very nice course to master the blockchain .... and
                  mainly the content is upto mark.
                </p>
              </div>
              <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                <svg
                  width={34}
                  height={28}
                  viewBox="0 0 34 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd)">
                    <path
                      d="M17 19L28.2583 3.25H5.74167L17 19Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd"
                      x="0.741699"
                      y="0.25"
                      width="32.5167"
                      height="27.75"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feMorphology
                        radius={1}
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow"
                      />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={3} />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy={2} />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow"
                        result="effect2_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <img
                style={{ borderRadius: "50px" }}
                src="https://technomaits.vercel.app/yrh.jpeg"
                alt="profile pictre"
                className="w-12 h-12"
              />
              <p className="text-base font-semibold leading-4 my-2 text-gray-800">
                Yash Raj Hans
              </p>
              <p className="text-base leading-4 text-center text-gray-600">
                Developer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

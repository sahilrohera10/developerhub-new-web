// import React from "react";
import "./blog.css";
// import courseImg from "../assets/courses.jpg";
// import eventImg from "../assets/events.jpg";
// import roadmapImg from "../assets/roadmap.jpg";

// const Blog = () => {
//   return (
//     <>
//       <div className="blog_main_body">
//         <div className="blog_sub_body">
//           <div className="blog_container">
//             <div className="blog_subcontainer">
//               <div className="Upper">
//                 <img src={courseImg} alt="" className="Upper_img" />
//               </div>
//               <hr />
//               <div className="Lower">
//                 <p className="Lower_content">
//                   We provide FREE hands-on training in various fields of
//                   computer science and have an inclusive community focussing on
//                   a learn by doing approach.
//                 </p>
//               </div>
//             </div>
//             <div className="blog_button">
//               <button>EXPLORE OUR COURSES&#8594;</button>
//             </div>
//           </div>
//           <div className="blog_container">
//             <div className="blog_subcontainer">
//               <div className="Upper">
//                 <img src={eventImg} alt="" className="Upper_img" />
//               </div>
//               <hr />
//               <div className="Lower">
//                 <p className="Lower_content">
//                   Explore events in various domains to upskill yourself, network
//                   with industry experts, and win amazing prizes by showcasing
//                   your knowledge.
//                 </p>
//               </div>
//             </div>
//             <div className="blog_button">
//               <button>EXPLORE EVENTS&#8594;</button>
//             </div>
//           </div>
//           <div className="blog_container">
//             <div className="blog_subcontainer">
//               <div className="Upper">
//                 <img src={roadmapImg} alt="" className="Upper_img" />
//               </div>
//               <hr />
//               <div className="Lower">
//                 <p className="Lower_content">
//                   A complete solution to all your mentorship needs, including
//                   learning resources, communities to be a part of,
//                   opportunities, and much more.
//                 </p>
//               </div>
//             </div>
//             <div className="blog_button">
//               <button>EXPLORE ROADMAP&#8594;</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Blog;

import React from "react";
import "./blog.css";
function Blog() {
  return (
    <>
      <div id="blog" className="px-4 xl:px-0 py-12 mt-20">
        <div className="mx-auto container" style={{ width: "90vw" }}>
          <h1
            style={{ color: "white" }}
            className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900"
          >
            Blogs
          </h1>
          <div className="mt-12 lg:mt-24">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              <div className="blog-card">
                <img
                  className="w-full"
                  src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
                  alt="computer"
                />
                <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                  <p className="text-sm text-white font-semibold tracking-wide">
                    Bruce Wayne
                  </p>
                  <p className="text-sm text-white font-semibold tracking-wide">
                    13TH Oct, 2020
                  </p>
                </div>
                <div
                  // style={{ height: "52vh" }}
                  className="bg-white px-5 py-6 rounded-bl-3xl rounded-br-3xl"
                >
                  <h1 className="text-4xl text-gray-900 font-semibold tracking-wider blog-header">
                    Transactions
                  </h1>
                  <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                    Find the latest events updates or create events, concerts,
                    conferences, workshops, exhibitions, and cultural events in
                    all cities of the US. The aim of Eventistan is to promote
                    healthy and entertaining event.Find the latest events
                    updates or create events, concerts, conferences, workshops,
                    exhibitions, and cultural events in all cities of the US.
                  </p>

                  <div className="h-5 w-2" />
                </div>
              </div>
              <div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                  <div className="blog-card">
                    <img
                      className="w-full"
                      src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png"
                      alt="games"
                    />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        Bruce Wayne
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                        Transactions
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                        Find the latest events updates or create events,
                        concerts, conferences, workshops...
                      </p>
                    </div>
                  </div>
                  <div className="blog-card">
                    <img
                      className="w-full"
                      src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png"
                      alt="notes"
                    />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        Bruce Wayne
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                        Transactions
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                        Find the latest events updates or create events,
                        concerts, conferences, workshops...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                  <div className="blog-card">
                    <img
                      className="w-full"
                      src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png"
                      alt="laptop"
                    />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        Bruce Wayne
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                        Transactions
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                        Find the latest events updates or create events,
                        concerts, conferences, workshops...
                      </p>
                    </div>
                  </div>
                  <div className="blog-card">
                    <img
                      className="w-full"
                      src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png"
                      alt="worker"
                    />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        Bruce Wayne
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                        Transactions
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                        Find the latest events updates or create events,
                        concerts, conferences, workshops...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;

import React from "react";
import "./blog.css";
import courseImg from "../assets/courses.jpg";
import eventImg from "../assets/events.jpg";
import roadmapImg from "../assets/roadmap.jpg";

const Blog = () => {
  return (
    <div className="blog_main_body">
      <div className="blog_sub_body">
        <div className="blog_container">
          <div className="blog_subcontainer">
            <div className="Upper">
              <img src={courseImg} alt="" className="Upper_img" />
            </div>
            <hr />
            <div className="Lower">
              <p className="Lower_content">
                We provide FREE hands-on training in various fields of computer
                science and have an inclusive community focussing on a learn by
                doing approach.
              </p>
            </div>
          </div>
          <div className="blog_button">
            <button>EXPLORE OUR COURSES&#8594;</button>
          </div>
        </div>
        <div className="blog_container">
          <div className="blog_subcontainer">
            <div className="Upper">
              <img src={eventImg} alt="" className="Upper_img" />
            </div>
            <hr />
            <div className="Lower">
              <p className="Lower_content">
                Explore events in various domains to upskill yourself, network
                with industry experts, and win amazing prizes by showcasing your
                knowledge.
              </p>
            </div>
          </div>
          <div className="blog_button">
            <button>EXPLORE EVENTS&#8594;</button>
          </div>
        </div>
        <div className="blog_container">
          <div className="blog_subcontainer">
            <div className="Upper">
              <img src={roadmapImg} alt="" className="Upper_img" />
            </div>
            <hr />
            <div className="Lower">
              <p className="Lower_content">
                A complete solution to all your mentorship needs, including
                learning resources, communities to be a part of, opportunities,
                and much more.
              </p>
            </div>
          </div>
          <div className="blog_button">
            <button>EXPLORE ROADMAP&#8594;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

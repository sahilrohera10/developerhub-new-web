import React, { useEffect } from "react";
import metaImg from "../assets/meta.png";
import metaVd from "../assets/metaVd.mp4";
import Download from "../Components/Download";

const MetaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main_body">
      <div className="header">
        <div className="header_img">
          <img
            // style={{ width: "200px", height: "180px" }}
            src={metaImg}
            alt="AR/VR"
          />
        </div>
        <div className="header_heading">ETAVERSE</div>
      </div>

      <div className="sub_body">
        <p className="Landing_content">
          {/* &nbsp; To help you get a sense of how vague and complex a term{" "}
          <span className="gradient__text" style={{ fontSize: "24px" }}>
            Metaverse
          </span>{" "} */}
          According to GlobalData, the global metaverse space set to grow to a
          $996.42 billion industry by 2030. There is huge opportunity for
          Metaverse developers; however, there is huge shortage of the trained
          and skilled professionals. Nevertheless, our Metaverse course will
          equip you with the required skills to become a successful Metaverse
          developer.
        </p>
      </div>
      <div className="sub_body">
        <div className="sub_body_left">
          <video autoPlay loop muted>
            <source src={metaVd} type="video/mp4" />
          </video>
        </div>
        <div className="sub_body_right">
          <div className="upper">
            <h3 className="gradient__text">What we give</h3>
            <p className="upper_content">
              We will train you on Metaverse, a shared, online 3D space and what
              are its practical uses for the businesses, and people. Metaverse
              has emerged as a place where users can interact with each other
              like they do in the actual world.
            </p>
            <hr style={{ width: "95%", marginLeft: "1rem" }} />
            <br />
            <h4 id="heading" className="gradient__text">
              What you can expect
            </h4>
            <p>
              With computer-generated objects and avatars, Metaverse technology
              has much more to offer the world than it currently offers, and you
              could be the one who define it. Our course on Metaverse
              development will open a whole new world of career opportunities as
              you would be able to do the following:
            </p>{" "}
            <ol style={{ color: "white" }}>
              <li style={{ marginBottom: "10px" }}>
                You will learn how you can get started with Metaverse.
              </li>
              <li style={{ marginBottom: "10px" }}>
                You will be able to explore different Use Cases to know the
                potential in Metaverse technology.{" "}
              </li>
              <li style={{ marginBottom: "10px" }}>
                You will be able to know what it means to be a Metaverse Expert
                and how much remuneration to expect.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Practical expose to the technologies involved in Metaverse
              </li>
            </ol>
            <hr style={{ width: "95%", marginLeft: "1rem" }} />
          </div>
        </div>
      </div>
      <Download Name = "Metaverse Master classes.pdf" Title = "Metaverse" Description = "Metaverse development course that includes a 3D character developing avatars. " />
    </div>
  );
};

export default MetaPage;

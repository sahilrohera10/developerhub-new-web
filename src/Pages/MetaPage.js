import React, { useEffect } from "react";
import metaImg from "../assets/meta.png";
import metaVd from "../assets/metaVd.mp4";

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
          &nbsp; To help you get a sense of how vague and complex a term{" "}
          <span className="gradient__text" style={{ fontSize: "24px" }}>
            Metaverse
          </span>{" "}
          can be, here's an exercise: Mentally replace the phrase “the
          metaverse” in a sentence with “cyberspace.” Ninety percent of the
          time, the meaning won't substantially change. That's because the term
          doesn't really refer to any one specific type of technology, but
          rather a broad (and often speculative) shift in how we interact with
          technology. And it's entirely possible that the term itself will
          eventually become just as antiquated, even as the specific technology
          it once described becomes commonplace.
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
            <h3 className="gradient__text">Future Of METAVERSE</h3>
            <p className="upper_content">
              The paradox of defining the metaverse is that in order for it to
              be the future, you have to define away the present. We already
              have MMOs that are essentially entire virtual worlds, digital
              concerts, video calls with people from all over the world, online
              avatars, and commerce platforms. So in order to sell these things
              as a new vision of the world, there has to be some element of it
              that's new.
            </p>
            <hr style={{ width: "95%", marginLeft: "1rem" }} />
            <br />
            <h4 id="heading" className="gradient__text">
              USE CASES
            </h4>
            <p>
              Gaming industry is said to be one of the core and primary
              investors of Metaverse technology.Travel and Tourism. Education
              and Learning.Remote working.Real estate. Healthcare. Banking and
              Finance.Social media and entertainment.
            </p>
            <hr style={{ width: "95%", marginLeft: "1rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaPage;

import React from "react";
import my from "../Images/mimg.jpg";
import "./CSS/About.css";
import * as FaIcon from "react-icons/fa";
import resume from "../Images/Resume.pdf";
const About = () => {
  return (
    <>
      <section className="d-flex align-items-center about_header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6  order-1 order-lg-1 d-flex justify-content-center flex-column ">
                  <div className="abt_title">
                    <h2>About</h2>
                    <div>
                      <h2>About</h2>
                    </div>
                  </div>

                  <p className="abt_para">
                    <FaIcon.FaQuoteLeft className="quote_icon" /> <br />{" "}
                    &nbsp;&nbsp;I am a visual artist and a design thinker. I
                    tackles complex problems by empathising, defining, ideating,
                    prototyping and testing. I always thinks outside the box and
                    dig a bit deeper into problem solving, thus i uncovers new
                    ways to meet users' needs. My ultimate goal throughout is to
                    derive as deep an understanding of the product and it's
                    users as possible
                  </p>
                </div>

                <div className="col-lg-6 order-2 order-lg-2">
                  <div className="card">
                    <img className="card-img-top" src={my} alt="Card cap" />
                    <div className="card-body">
                      <h5 className="card-title">
                        <ul>About Me</ul>
                      </h5>
                      <p className="card-text pb-3">
                        <div>
                          Name &nbsp; : &nbsp;Kartik Gautam <br />
                          D.O.B&nbsp; : &nbsp;20-Jan-1998 <br />
                          Phone&nbsp; : &nbsp;7014674789 <br />
                          E-mail&nbsp;: &nbsp;kartikgautam677@gmail.com <br />
                          Address &nbsp;: &nbsp;Jaipur,Rajasthan <br />
                        </div>
                      </p>

                      <a href={resume} target="_blank" rel="noreferrer" className="resume_btn mt-3" > Download Resume <FaIcon.FaFileDownload className="dwld_icon" /></a>
          
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

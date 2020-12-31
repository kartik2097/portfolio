import React from "react";
import * as BoxIcon from "react-icons/bi";
import * as FaIcon from "react-icons/fa";
// import { NavLink } from "react-router-dom";
import "./CSS/Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="contact_title">
                <h2>Contact</h2>
                <div>
                  <h2>Contact</h2>
                </div>
              </div>
              <div className="row cont">
                <div className="col-lg-6 col-md-6 col-sm-12 colm">
                  <p className="contact_para">
                    I am interested in a fulltime job &#8211;
                    especially ambitious for web Devloper job. However, if you have
                    other request or question, don&#8217;t hesitate to contact
                    me using below contact button.
                  </p>
                  <p>&nbsp;</p>
                  <div>
                    {/* <NavLink to="mailto:kartikgautam677@gmail.com" className="contact_btn">Contact</NavLink> */}
                    <a class="mailto" href="mailto:kartikgautam677@gmail.com" className="contact_btn">Contact <BoxIcon.BiMailSend className="conbtn"/></a>
                  </div>
                  <div className="social_icon">
                  <a href="https://www.facebook.com/profile.php?id=100009335088035" target="_blank" rel="noreferrer" className="faicon"><FaIcon.FaFacebookSquare className="Fa Facebook" /></a>
                  <a href="https://www.linkedin.com/in/kartik-gautam-63002416b/" target="_blank" rel="noreferrer" className="faicon"><FaIcon.FaLinkedin className="Fa LinkedIn"/></a>
                  <a href="https://www.instagram.com/kartik._gautam/" target="_blank" rel="noreferrer" className="faicon"><FaIcon.FaInstagramSquare className="Fa Instagram"/></a>
                  <a href="https://twitter.com/Kartikgautam97" target="_blank" rel="noreferrer" className="faicon"><FaIcon.FaTwitterSquare className="Fa Twitter"/></a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57295.30131079336!2d75.76178227788404!3d26.16555160115317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396e614375ed8bbd%3A0xff1c55d39ac799c9!2sTonk%2C%20Rajasthan%20304001!5e0!3m2!1sen!2sin!4v1609258896562!5m2!1sen!2sin"
                    width="450"
                    height="400"
                    frameBorder="0"
                    style={{ color: "blue" }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    title="map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

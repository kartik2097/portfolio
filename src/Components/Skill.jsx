import React from "react";
import "./CSS/Skill.css";
import { NavLink } from "react-router-dom";

const Skill = () => {
  return (
    <>
      {/* <section className="d-flex align-items-center skill_header">
        <div className="container-fluid">
          <div className="row r-1">
            <div className="col-10 mx-auto">
              <div className="row r-2">
                <div className="col-lg-6 order-1 order-lg-1 d-flex justify-content-center flex-column ">
                  <div className="skill_title">
                    <h2>Skils</h2>
                    <div>
                      <h2>Skills</h2>
                    </div>
                  </div>

                </div>

                <div className="col-lg-6 order-2 order-lg-2">

                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="d-flex align-items-center skill_header">
        <div className="container-fluid c-1">
          <div className="row r-1">
            <div className="col-10 mx-auto">
              <div className="row r-2">
                <div className="skill_title">
                  <h2>Skils</h2>
                  <div>
                    <h2>Skills</h2>
                  </div>
                </div>
                <p className="skill_para">
                  <br/>
                  <p>
                    The main area of my expertise is front end development
                    (client side of the web).<br/>
                    HTML, CSS, JS, building small and medium web
                    apps with React, custom plugins, features, animations,
                    and coding interactive layouts.
                    I have also full-stack developer experience with Node.js and MongoDB.
                  </p>
                  <p>
                    Visit my 
                    <a href="https://www.linkedin.com/in/kartik-gautam-63002416b/" target="_blank" rel="noreferrer"><span className="links"> LinkedIn</span> </a>
                    profile for more details or just
                    <NavLink to="/contact" id="co"> <span className="links">Contact</span></NavLink>
                  </p>
                </p>
              </div>
              <div className="row r-3">
                <div className="col-lg-6 col-md-6">
                  <div className="item">
                    <div className="item-text">
                      <span>C</span>
                      <span className="w-60">60%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar w-60"></div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-text">
                      <span>HTML</span>
                      <span className="w-90">90%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar w-90"></div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-text">
                      <span>CSS</span>
                      <span className="w-70">70%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar w-70"></div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-text">
                      <span>JavaScript</span>
                      <span className="w-60">60%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar w-60"></div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                <div className="item">
                    <div className="item-text">
                      <span>Bootstrap</span>
                      <span className="w-75">75%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar w-75"></div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-text">
                      <span>Node.Js</span>
                      <span className="w-60">60%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar w-60"></div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-text">
                      <span>React.Js</span>
                      <span className="w-40">40%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar w-40"></div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-text">
                      <span>MongoDB</span>
                      <span className="w-70">70%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar w-70"></div>
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

export default Skill;

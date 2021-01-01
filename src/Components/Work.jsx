import React from "react";
import bytehub  from "../Images/bytehub.png";
import website from "../Images/website.png";
import './CSS/Work.css';
const Work = () => {
  return (
    <>
      <section className="work_section">
        <div className="container-fluid">
          <div className="row">
  
            <div className="col-10 mx-auto">
            <div className="work_title">
                    <h2>My Work</h2>
                    <div>
                      <h2>My Work</h2>
                    </div>
                  </div>
                  {/* <div>
                  <p>These are the work i've done till now, Please check these out. Hope you like it </p>
                </div> */}
              <div className="row work">
 
                <div className="col-lg-6 col-xs-12 col-sm-12 col-md-6 pt-3 ">
                    <div className="work_block">
                      <div className="work_img">
                      <img src={bytehub} alt="workImg"/>
                        <div className="work_link">
                        <a href="https://www.bytehub.in/" target="_blank" rel="noreferrer" className="work_link_name">Check this out</a>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xs-12 col-sm-12 col-md-6 pt-3 ">
                <div className="work_block">
                      <div className="work_img">
                      <img src={website} alt="workImg"/>
                        <div className="work_link">
                        <a href="https://kartik2097.github.io/Reactwebsite/" target="_blank" rel="noreferrer" className="work_link_name">Check this out</a>
                        </div>
                      </div>
                    </div>
                </div>  
                {/* <div className="col-lg-6 col-xs-12 col-sm-12 col-md-6 pt-3 ">
                <div className="work_block">
                      <div className="work_img">
                      <img src={"https://picsum.photos/200/300"} alt="workImg"/>
                        <div className="work_link">
                        <a href="https://kartik2097.github.io/Reactwebsite/" className="work_link_name">Check this out</a>
                        </div>
                      </div>
                    </div>
                </div> */}
                {/* <div className="col-lg-6 col-xs-12 col-sm-12 col-md-6 pt-3 ">
                <div className="work_block">
                      <div className="work_img">
                      <img src={"https://picsum.photos/200/300"} alt="workImg"/>
                        <div className="work_link">
                          <NavLink to="/" className="work_link_name">Check this out</NavLink>
                        </div>
                      </div>
                    </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;

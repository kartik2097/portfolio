import React from "react";
import myimg from '../Images/mimg.jpg';
import "./CSS/Home.css";
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6  order-1 order-lg-1 d-flex justify-content-center flex-column intro">
                
                    <h1 className="my_intro">
                      <span id="hello">HELLO !</span><br/>
                      <span id="name" className="mt-5">I'm Kartik Gautam,</span>
                    </h1>
                    <h2 className="my_designation">
                      I am Web Devloper.
                    </h2>
                    {/* <button className="hirebtn">Hire Me</button> */}
                    <a class="mailto" href="mailto:kartikgautam677@gmail.com" className="hirebtn">Hire Me</a>
                   
                </div>

                <div className="col-lg-6 order-2 order-lg-2 header_img">
              
                  <img className="header-img" src ={myimg} alt="myimg"/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

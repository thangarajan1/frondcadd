import React, { useEffect } from 'react'
import img from "./Images/Aproval/1.jpeg";
import img1 from "./Images/Aproval/4.png"
import Aos from 'aos';
import "aos/dist/aos.css"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";


export default function Aproval() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="row" style={{ margin: "70px" }}>
        <div className="col-md-12">
          <ScrollAnimation animateIn="flipInX" animateOut="flipOutX">
            <h1 className="text-center text-black">Aproval</h1>
          </ScrollAnimation>
        </div>
      </div>

      <div className="row">
        <div
          className="col-md-6"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <div className="card" style={{ height: "450px" }}>
            <div className="card-body">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <img src={img} width={"200px"} className="" alt="" />
                </div>
                <div className="col-12">
                  <p
                    style={{
                      textAlign: "justify",
                      fontWeight: "550",
                      fontSize: "19px",
                    }}
                  >
                    CADD EXPERT TRAINING INSTITUTION has been Assessed and found
                    to be in accordance with the requirements of the quality
                    standards ISO 9001:2015 for the following purpose👇🏻
                    Providing CADD Courses, IT Courses, Projects and Internships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <div className="card" style={{ height: "450px" }}>
            <div className="card-body">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <img
                    className=""
                    src={img1}
                    alt=""
                    style={{ width: "300px" }}
                  />
                </div>
                <div className="col-12">
                  <p
                    style={{
                      textAlign: "justify",
                      fontWeight: "550",
                      fontSize: "19px",
                    }}
                  >
                    An MSME certificate is issued by the Ministry of Micro,
                    Small and Medium Enterprises. It provides legal recognition
                    to businesses that are classified as micro, small, or medium
                    enterprises (MSMEs).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

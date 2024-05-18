import React, { useEffect } from "react";
import objective from "./ObjectiveImg/Objective.webp";
import "./Objective.css";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Objectivet() {
    useEffect(() => {
      Aos.init();
    });
  return (
    <>
      <div className="row px-3">
        <div className="col-md-6">
          <ScrollAnimation animateIn="flipInX" animateOut="flipOutX">
            <h2 className="card-title">OBJECTIVE</h2>
          </ScrollAnimation>
          <p
            style={{
              textAlign: "justify",
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
            className="card-text"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            CADD EXPERT is a Training Institution,started with a partnership.we
            provide services like CADD Courses IT Courses program and
            intership.The aim of CADD Expert Training Institution is to improve
            the intellectual skills of a students.CADD Expert Training
            Institution provides Training to students with skilled and
            experienced faculty.it has Infrastructure with computer lab.We have
            ISO and MSME accreditation certificates.Students studying with us
            are given a certificate and a book and 100% placement assistant
            guarantee.
          </p>
        </div>
        <div
          className="col-md-6"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <img src={objective} alt="" className="card-img" />
        </div>
      </div>
    </>
  );
}

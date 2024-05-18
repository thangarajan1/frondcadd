import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const style = {
  fontSize: "1.5rem",
  fontWeight: "550",
};

export default function Projects() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center w-100 align-items-center"
        style={{ border: "1px solid black", height: "300px" }}
        data-aos="fade-up-right"
        data-aos-duration="1000"
      >
        <h3>We Are Providing</h3>
        <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
          <h1>All Types Of PROJECTS</h1>
        </ScrollAnimation>
        <ul>
          <li style={style}>Engineering Projects</li>
          <li style={style}>College Projects</li>
          <li style={style}>Civil Construction Project</li>
          <li style={style}>App Development Project</li>
        </ul>
      </div>
    </>
  );
}

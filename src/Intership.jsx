import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
export default function Intership() {
  useEffect(() => {
    Aos.init();
  });
  const style = {
    fontSize: "1.5rem",
    fontWeight: "550",
  };
  return (
    <>
      <div
        style={{ border: "1px solid black" }}
        className="d-flex flex-column justify-content-center w-100 align-items-center"
        data-aos="fade-up-left"
        data-aos-duration="1000"
      >
        <h3>We Are Providing</h3>
        <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
          <h1>INTERNSHIP With Certificate</h1>
        </ScrollAnimation>
        <ul>
          <li style={style}>Engineering Internship</li>
          <li style={style}>Arts & Science Internship</li>
          <li style={style}>Deploma Internship</li>
          <li style={style}>Industrial Internship</li>
          <li style={style}>Software,web & App Development Internship</li>
        </ul>
      </div>
    </>
  );
}
